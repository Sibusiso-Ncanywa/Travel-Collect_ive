import React from "react";
import Title from "./title";
import { Bio_what_who } from "../generalInfo";

export default function BioWhoWhat() {
  const { bio, who, what } = Bio_what_who;
  return (
    <>
      <section className="bio-who-what">
        <div className="bio">
          <Title title="Bio" />
          <p>{bio}</p>
        </div>

        <div className="what">
          <Title title="Services we offer" />
          <p>{what}</p>
        </div>

        <div className="who">
          <Title title="The person behind it all" />
          <div className="img-bio">
            <img src="" alt="person behind it all" />
            <p>{who}</p>
          </div>
        </div>
      </section>
    </>
  );
}
