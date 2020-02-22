import React, { Component } from "react";
import "./styles.scss";
// import placeholder from "./../../Images/placeholder.jpg";

export default class TourCard extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({ showInfo: this.state.showInfo ? false : true });
  };
  render() {
    const { city, img, name, info } = this.props.tour;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="city" />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
