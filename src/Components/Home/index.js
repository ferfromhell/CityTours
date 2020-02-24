import React, { Component } from "react";
import "./styles.scss";

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="home-content">
          <h1>Business & Vacation Travel Services</h1>
          <p>
            Reprehenderit nostrud aliquip occaecat aliqua aute qui Lorem magna
            consectetur proident adipisicing consequat esse. Exercitation ea
            ullamco consequat sit est nulla quis excepteur consequat. Aliqua
            enim aute exercitation officia consequat magna deserunt esse
            consectetur dolore. Velit ea mollit labore esse. Nulla eu ut velit
            ea reprehenderit mollit laborum nulla nostrud irure nulla mollit.
            Minim nisi labore aute est minim. Qui id enim nisi fugiat dolore
            elit.
          </p>
          <ul className="social-media-links">
            <li>
              <a href="https://instagram.com">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
