import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { BookingInfo } from "../generalInfo";

export default class Itenary extends Component {
  render() {
    const { info, name } = BookingInfo;
    return (
      <>
        <div className="itenary">
          <article className="info">
            <h3>{name}</h3>
            <p>{info}</p>
          </article>
        </div>
      </>
    );
  }
}
