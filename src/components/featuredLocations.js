import React, { Component } from "react";
import { LocationContext } from "../context";
import Loading from "./loading";
import Location from "./location";
import Title from "./title";

export default class FeatureLocations extends Component {
  static contextType = LocationContext;
  render() {
    let { loading, featuredLocations: locations } = this.context;
    locations = locations.map(location => {
      return <Location key={location.id} location={location} />;
    });

    return (
      <>
        <section className="featured-Locations">
          <Title title="Featured Locations" />
          <div className="featured-locations-center">
            {loading ? <Loading /> : locations}
          </div>
        </section>
      </>
    );
  }
}
