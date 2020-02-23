import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { BookingInfo } from "../generalInfo";

export default class Itenary extends Component {
  render() {
    const { info, name, deposit_info } = BookingInfo;
    return (
      <>
        <div className="itenary">
          <article className="info">
            <h3>{name}</h3>
            <ul className="info-list">
              {info.map((item, index) => {
                return <li key={index}> {item} </li>;
              })}
            </ul>
            <p>{deposit_info}</p>
          </article>
        </div>
      </>
    );
  }
}
