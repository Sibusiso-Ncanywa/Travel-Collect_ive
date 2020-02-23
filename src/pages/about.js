import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { aboutPage_info } from "../generalInfo";

export default function About() {
  const { image, info } = aboutPage_info;
  return (
    <>
      <Hero hero="aboutUsHero">
        <Banner title="About Us" subtitle="Travel Collect_ive">
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <section className="About">
        <div className="aboutUs-info">
          <img src={image} alt="The Fam" />
          <div className="info-p">
            {info.map((item, index) => {
              return <p key={index}> {item} </p>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
