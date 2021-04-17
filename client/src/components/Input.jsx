import React, { Component } from "react";
import socket from "./socket";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            address: "",
            email: "",
            tel: "",
            notes: "",
            showError: "none",
            isSent: false,
        };
    }
    render() {
        if (this.state.isSent === false) {
            return (
                <React.Fragment>
                    <div className="row">
                        <div className="col s12" id="form-section">
                            <div className="input-field ">
                                <div
                                    className="col s12"
                                    id="data-denied"
                                    style={{ display: this.state.showError }}
                                >
                                    <h6>
                                        Please check that your information is
                                        correctly formatted
                                    </h6>
                                </div>
                                <div className="col s6">
                                    {" "}
                                    <input
                                        id="first-name"
                                        placeholder="First Name"
                                        name="fName"
                                        onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="col s6">
                                    {" "}
                                    <input
                                        id="last-name"
                                        placeholder="Last Name"
                                        name="lName"
                                        onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="col s12">
                                    <input
                                        id="address"
                                        placeholder="Address"
                                        name="address"
                                        onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="col s6">
                                    {" "}
                                    <input
                                        id="email"
                                        placeholder="E-Mail"
                                        type="email"
                                        name="email"
                                        onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="col s6">
                                    {" "}
                                    <input
                                        id="phone"
                                        placeholder="Phone"
                                        type="tel"
                                        name="tel"
                                        onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div
                                    className="col s12"
                                    style={{ display: this.props.custom }}
                                >
                                    <textarea
                                        className="materialize-textarea"
                                        placeholder="Custom Order Notes"
                                        name="notes"
                                        onChange={this.handleChange}
                                    ></textarea>
                                </div>
                                <div className="col s3 offset-s9">
                                    {" "}
                                    <button
                                        className="btn blue center-align"
                                        id="submit"
                                        onClick={this.onSubmitOrder}
                                    >
                                        Send Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className="row">
                        <div className="col s12" id="form-section">
                            <div className="input-field">
                                <h1 className="center-align" id="confirmation">
                                    Order Sent
                                </h1>
                                <p className="center-align" id="confirmation">
                                    We will respond to your email regarding
                                    payment, please stay in touch as each order
                                    is hand crafted with love and care
                                </p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
    handleChange = (e) => {
        const val = e.target.value;
        this.setState({
            [e.target.name]: val,
        });
    };
    onSubmitOrder = () => {
        socket.emit("verify-order", {
            fName: this.state.fName,
            lName: this.state.lName,
            address: this.state.address,
            email: this.state.email,
            tel: this.state.tel,
            notes: this.state.notes,
        });
    };
    componentDidMount = () => {
        socket.on("deny-customer-data", () => {
            this.setState({ showError: "block" });
        });
        socket.on("pass-customer-data", () => {
            this.setState({ isSent: true });
            socket.emit("new-order", {
                flavor: this.props.flavor,
                price: this.props.price,
            });
        });
    };
}

export default Input;
