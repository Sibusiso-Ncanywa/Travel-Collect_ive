import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Hero>
        <Banner title="Welcome" subtitle="refresh">
          <Link to="/locations" className="btn btn-primary">
            welcome to the about us page
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
