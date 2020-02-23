import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import WhoWhat from "../components/who-what";
import { Link } from "react-router-dom";
import FeaturedLocations from "../components/featuredLocations";

export default function Home() {
  return (
    <>
      <section className="home">
        <Hero>
          <Banner title="WHERE TO NEXT? LET' S PLAN YOUR NEXT GREAT ADVENTURE">
            <Link to="/locations" className="btn btn-primary">
              See Potential Vacation Locations
            </Link>
          </Banner>
        </Hero>
        <WhoWhat className="bio-who-what" />
        <FeaturedLocations />
      </section>
    </>
  );
}
