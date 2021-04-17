import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1 id="about-title" className="center-align">
          <b>{this.props.title}</b>
        </h1>
        <div className="col s1 m1 l1 xl1"></div>
        <div className="col s10 m10 l10 xl10">
          <p className="center-align" id="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="col s1 m1 l1 xl1"></div>
      </div>
    );
  }
}

export default About;
