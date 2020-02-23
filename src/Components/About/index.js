import React, { Component } from "react";
import "./styles.scss";

import MapImage from "../../Images/map-bg.jpg";

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <h1>Travel expertise</h1>
        <img src={MapImage} alt="mapimage" />
        <div className="about-list">
          <div className="about1">
            <h3>About us</h3>
            <p>
              In nostrud aliquip officia nostrud sit veniam aliqua occaecat
              pariatur duis. Proident culpa aute veniam tempor eiusmod laborum
              eu. Exercitation elit veniam laboris sit consequat mollit non
              duis. Id ex veniam amet sint. Consectetur consectetur ex labore
              veniam. Nisi non fugiat nostrud sit ea pariatur et. Nulla tempor
              id exercitation reprehenderit. Do do aliqua est nisi est amet
              exercitation magna amet. Voluptate culpa ut qui esse.
            </p>
          </div>
          <div className="about2">
            <div>
              <h4>Mission</h4>
              <p>
                Mollit nisi dolor culpa fugiat veniam ad. Elit aliqua quis
                adipisicing proident laboris cupidatat sint labore. Est minim
                duis quis deserunt duis duis deserunt elit nisi cillum irure
                nisi. Laboris ex ex ea mollit ipsum quis aliqua. Tempor non
                cupidatat laboris pariatur magna ea anim. Non aliquip tempor
                fugiat sint.
              </p>
            </div>
            <div>
              <h4>Values</h4>
              <ul>
                <li>Value #1</li>
                <li>Value #2</li>
                <li>Value #3</li>
                <li>Value #4</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
