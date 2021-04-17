import React, { Component } from "react";
class Modules extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var sendOrder = this.props.sendOrder;
        return (
            <div id="order-block" className="center-align col s12 m12 l3 xl3">
                <img
                    src={this.props.img}
                    className="circle responsive-img"
                    id="item"
                    alt="icecream"
                ></img>
                <h4>
                    <b>{this.props.flavor}</b>
                </h4>
                <h6> {this.props.price}</h6>

                <button
                    className="btn blue"
                    id="order-button"
                    onClick={() => {
                        if (this.props.flavor != "Custom") {
                            sendOrder(
                                false,
                                this.props.flavor,
                                this.props.price
                            );
                        } else {
                            sendOrder(
                                true,
                                this.props.flavor,
                                this.props.price
                            );
                        }
                    }}
                >
                    Order
                </button>
            </div>
        );
    }
    /*sendOrder = () => {
    console.log(this.props.form);
    this.props.form.current.scrollIntoView({ behavior: "smooth" });
    socket.emit("new-order", {
      price: this.props.price,
      flavor: this.props.flavor,
    });
    console.log(this.props.price);
    alert(this.props.flavor);
  };*/
}

export default Modules;
