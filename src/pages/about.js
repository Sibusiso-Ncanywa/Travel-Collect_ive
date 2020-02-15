import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Hero>
        <Banner title="About Us" subtitle="Travel Collect_ive">
          <Link to="/locations" className="btn btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
