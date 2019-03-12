import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="pimg1">
          <div ptext>
            <span className="border">Parallax Website</span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Section One</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        <div className="pimg2">
          <div ptext>
            <span className="border">Image Two Text</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Section Two</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </section>

        <div className="pimg3">
          <div ptext>
            <span className="border">Image Three Text</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Section Three</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </section>

        <div className="pimg1">
          <div ptext>
            <span className="border">Parallax Website</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
