import React from "react";
import Title from "./title";
import { Bio_what_who } from "../generalInfo";
import { Link } from "react-router-dom";

export default function BioWhoWhat() {
  const { who, what, image } = Bio_what_who;
  return (
    <>
      <section className="who-what">
        <div className="what">
          <Title title="Service we offer" />
          <p>{what}</p>
          <Link to="/locations" className="btn btn-outline-primary w-100">
            locations
          </Link>
        </div>

        <div className="who">
          <Title title="The person behind it all" />
          <div className="img-bio">
            <img src={image} alt="person behind it all" />
            <p>{who}</p>
          </div>
          <Link to="/about" className="btn btn-outline-primary w-100">
            About Us
          </Link>
        </div>
      </section>
    </>
  );
}
