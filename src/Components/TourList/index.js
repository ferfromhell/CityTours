import React, { Component } from "react";
import "./TourList.scss";

import TourCard from "../TourCard/TourCard";
import { tourData } from "../../Utils/toursData";
export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const filteredTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: filteredTours
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tourList">
        {tours.map(tour => {
          return (
            <TourCard key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
