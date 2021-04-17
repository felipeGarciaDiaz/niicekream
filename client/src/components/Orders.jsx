import React, { Component } from "react";
import Modules from "./Modules";
import Input from "./Input";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.formArea = React.createRef();

        this.state = {
            icecream: [
                {
                    key: 1,
                    img:
                        "https://bakingamoment.com/wp-content/uploads/2019/08/IMG_5627-chocolate-ice-cream-500x375.jpg",
                    flavor: "Chocolate",
                    price: "$25.00 / 16 oz",
                },
                {
                    key: 2,
                    img:
                        "https://www.creationsbykara.com/wp-content/uploads/2019/07/Best-Vanilla-Bean-Ice-Cream-010-720x540.jpg",
                    flavor: "Vanilla",
                    price: "$25.00 / 16 oz",
                },
                {
                    key: 3,
                    img:
                        "https://www.julieseatsandtreats.com/wp-content/uploads/2020/06/Rainbow-Ice-Cream-14-of-16-500x375.jpg",
                    flavor: "Custom",
                    price: "$35.00 / 16 oz",
                },
            ],
            toggleDisplay: "none",
            customNotes: "none",
            orderFlavor: "",
            orderPrice: "",
        };
    }

    render() {
        return (
            <React.Fragment>
                <div id="order-section" className="container">
                    <div id="weird-bug"></div>
                    <h1 id="orders-title" className="center-align">
                        <b>{this.props.title}</b>
                    </h1>
                    <div className="divider"></div>
                    <div>
                        <React.Fragment>
                            {this.state.icecream.map((section) => (
                                <Modules
                                    key={section.key}
                                    img={section.img}
                                    flavor={section.flavor}
                                    price={section.price}
                                    sendOrder={this.sendOrder}
                                />
                            ))}
                        </React.Fragment>
                    </div>

                    <div
                        id="submit-order"
                        style={{ display: this.state.toggleDisplay }}
                    >
                        <Input
                            custom={this.state.customNotes}
                            flavor={this.state.orderFlavor}
                            price={this.state.orderPrice}
                        />
                    </div>
                </div>
                <h1 ref={this.formArea}></h1>
            </React.Fragment>
        );
    }
    componentDidMount = () => {
        console.log(this.state.toggleDisplay);
    };
    sendOrder = (isCustom, flavor, price) => {
        this.setState({ orderFlavor: flavor, orderPrice: price });
        if (isCustom === true) {
            this.setState({ customNotes: "block" });
        } else {
            this.setState({ customNotes: "none" });
        }
        this.setState({ toggleDisplay: "block" });
        console.log(this.state.toggleDisplay);
        setTimeout(() => {
            this.formArea.current.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };
}

export default Orders;
