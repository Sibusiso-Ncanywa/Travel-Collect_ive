import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import LocationContainer from "../components/locationContainer";

export default function Locations() {
  return (
    <>
      <Hero hero="locationsHero">
        <Banner title="Our Work">
          <Link to="/" className="btn btn-primary">
            return Home
          </Link>
        </Banner>
      </Hero>
      <LocationContainer />
    </>
  );
}
