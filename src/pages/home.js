import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import BioWhoWhat from "../components/bio-who-what";
import { Link } from "react-router-dom";
import FeaturedLocations from "../components/featuredLocations";

export default function Home() {
  return (
    <>
      <section className="home">
        <Hero>
          <Banner title="WHERE TO NEXT? LET' S PLAN YOUR NEXT GREAT ADVENTURE">
            <Link to="/locations" className="btn btn-primary">
              See Potential Locations
            </Link>
          </Banner>
        </Hero>
        <BioWhoWhat className="bio-who-what" />
        <FeaturedLocations />
      </section>
    </>
  );
}
