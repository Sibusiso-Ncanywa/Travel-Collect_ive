import React from "react";
import loadingGif from "../assets/images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <>
      <div className="loading">
        <h4> locations loading...</h4>
        <img src={loadingGif} alt="loading..." />
      </div>
    </>
  );
}
