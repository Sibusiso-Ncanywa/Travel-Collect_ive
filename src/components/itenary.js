import React, { Component } from "react";
//import { Link } from "react-router-dom";
import bookingInfo from "../bookingInfo";

export default class Itenary extends Component {
  render() {
    const { info } = bookingInfo.fields;
    console.log(info);
    return (
      <>
        <div className="itenary">
          <article className="info">
            <h3>How to book</h3>
            <p>{info}</p>
          </article>
        </div>
      </>
    );
  }
}
