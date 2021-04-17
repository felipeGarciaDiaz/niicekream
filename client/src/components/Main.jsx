import React, { Component } from "react";
import Logo from "./styles/300.png";

import About from "./About";
import Orders from "./Orders";
import Footer from "./Footer";
class Main extends Component {
    constructor(props) {
        super(props);
        this.aboutComp = React.createRef();
        this.orderStuff = React.createRef();
        this.state = {
            email: "NiiceKream@GMail.com",
        };
        this.scrollTo = this.scrollTo.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div id="header" className="col s12">
                        <div className="center-align col s12">
                            <img
                                className="responsive-img"
                                id="logo"
                                src={Logo}
                                alt="Logo"
                            />
                        </div>
                        <h1 id="company" className="center-align">
                            {" "}
                            <b>Niice</b> <b id="company2">Kream</b>{" "}
                        </h1>

                        <div className="col s4"></div>
                        <div className="col s2">
                            <h1
                                className="center-align"
                                id="about"
                                onClick={() => this.scrollTo("about")}
                            >
                                <b>About</b>
                            </h1>
                        </div>
                        <div className="col s2">
                            <h1
                                className="center-align"
                                id="order"
                                onClick={() => this.scrollTo("order")}
                            >
                                <b>Order</b>
                            </h1>
                        </div>

                        <div className="col s4"></div>
                    </div>
                    <div id="about-us" className="col s12">
                        <h1 ref={this.aboutComp}></h1>
                        <About title="About Us" />
                    </div>
                    <div className="col s12">
                        <div id="order-here">
                            <h1 ref={this.orderStuff}></h1>

                            <Orders title="Order Here" />
                        </div>
                    </div>
                    <Footer email={this.state.email} />
                </div>
            </React.Fragment>
        );
    }

    scrollTo = (scrollType) => {
        if (scrollType === "about") {
            this.aboutComp.current.scrollIntoView({ behavior: "smooth" });
        } else {
            this.orderStuff.current.scrollIntoView({ behavior: "smooth" });
        }
    };
}

export default Main;
