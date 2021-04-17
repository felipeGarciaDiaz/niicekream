const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");
const io = require("socket.io")(http);
const mailer = require("nodemailer");
const { RSA_PSS_SALTLEN_DIGEST } = require("constants");
const PORT = 6050;
// Serve any static files built by React

let smtpSend = mailer.createTransport({
	service: "gmail",
	auth: {
		user: "niicekream@gmail.com",
		pass: "@temp123",
	},
});
let verifyPassData = (chooseRegex, value) => {
	if (chooseRegex.test(value)) {
		return true;
	} else {
		return false;
	}
};
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "client/public/", "index.html"));
});
io.on("connection", function (socket) {
	console.log("friend joined!");
	socket.on("test", function (msg) {
		console.log("Client: " + msg);
	});
	socket.on("verify-order", function (customerData) {
		if (
			verifyPassData(/[ a-zA-Z\-\']+$/, customerData.fName) &&
			verifyPassData(/[ a-zA-Z\-\']+$/, customerData.lName) &&
			verifyPassData(/^[_A-z0-9]*((,|\s)*[_A-z0-9])*$/, customerData.address) &&
			verifyPassData(/\S+@\S+\.\S+/, customerData.email) &&
			verifyPassData(/^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im, customerData.tel)
		) {
			io.emit("pass-customer-data");
			console.log("pass-customer-data");
		} else {
			io.emit("deny-customer-data");
			console.log("deny-customer-data");
		}

		socket.on("new-order", function (order) {
			console.log(
				"new ozrder: " + order.flavor + " || " + order.price + "\nName: " + customerData.fName,
				customerData.lName + "\nContact: " + customerData.email,
				customerData.tel + "\nAddress: " + customerData.address + "\nNotes: " + customerData.notes
			);
			var mailData = {
				from: customerData.email,
				to: "niicekream@gmail.com",
				subject: "New order: " + order.flavor + " " + order.price,
				text:
					"Hello,\n\nNew order from customer! here is the information \nName: " +
					customerData.fName +
					" " +
					customerData.lName +
					"\nContact Information: " +
					customerData.email +
					", " +
					customerData.tel +
					"\nCustomer Address: " +
					customerData.address +
					"\nSpecial Notes: " +
					customerData.notes +
					"\n\nThank you,",
			};
			smtpSend.sendMail(mailData, function (error, res) {
				if (error) {
					console.log(error);
				} else {
					res.redirect("/");
				}
			});
		});
	});
});
http.listen(PORT, function () {
	console.log("server started using port: " + PORT);
});
