import React, { Component } from "react";
import "./TourList.scss";

import TourCard from "../TourCard/TourCard";

export default class TourList extends Component {
  render() {
    return (
      <section className="tourList">
        <TourCard />
      </section>
    );
  }
}
