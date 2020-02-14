import React from "react";
import Location from "./location";

export default function LocationList({ locations }) {
  if (locations.length === 0) {
    return (
      <div className="emptyLocations">
        <h3>unfortunately we don't the location specified yet.</h3>
      </div>
    );
  }
  return (
    <>
      <section>
        <div className="locationList-center">
          {locations.map(item => {
            return <Location key={item.id} location={item} />;
          })}
        </div>
      </section>
    </>
  );
}
