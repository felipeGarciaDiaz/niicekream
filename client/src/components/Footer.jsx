import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col s12" id="footer">
                    <div className="col s4">
                        <p className="left-align">© NiceKream</p>
                    </div>
                    <div className="col s4">
                        <p className="center-align">
                            Andrix M : {this.props.email}
                        </p>
                    </div>
                    <div className="col s4">
                        <p className="right-align">
                            <a id="credit" href="http://felipedev.us:60">
                                Code by Felipe Garcia
                            </a>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
