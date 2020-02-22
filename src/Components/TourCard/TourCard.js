import React, { Component } from "react";
import "./styles.scss";
import hollywood from "./../../Images/hollywood.jpg";

export default class TourCard extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img src={hollywood} alt="city" />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>City name</h3>
          <h4>Tour name</h4>
          <h5>
            Info
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>
            Fugiat non consequat veniam minim minim voluptate ut culpa laborum
            consectetur commodo ad. Excepteur est in fugiat fugiat nulla
            cupidatat officia excepteur irure sit quis adipisicing. Ad eu
            ullamco et cupidatat culpa laborum tempor incididunt. Quis veniam
            Lorem fugiat do laboris occaecat ullamco minim proident nostrud qui
            sint excepteur. Cillum consectetur mollit commodo do anim tempor et
            incididunt magna labore ut id qui.
          </p>
        </div>
      </article>
    );
  }
}
