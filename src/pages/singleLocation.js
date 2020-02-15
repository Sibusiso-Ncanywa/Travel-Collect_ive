import React, { Component } from "react";
import defaultBcg from "../assets/images/Durban/d3.jpg";
//import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { LocationContext } from "../context";
import StyledHero from "../components/styledHero";
import Itenary from "../components/itenary";

export default class SingleLocation extends Component {
  // accessing url parameter
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = LocationContext;
  //componentDidMount() {}

  render() {
    const { getLocation } = this.context;
    const location = getLocation(this.state.slug);

    // check if the location is defined
    if (!location) {
      return (
        <div className="error">
          <h3>no scuh location was found</h3>
          <Link to="/locations" className="btn btn-outline-secondary">
            Back to location
          </Link>
        </div>
      );
    }

    // destructure the location if found
    const { name, description, images } = location;
    const [mainImg, ...defaultImgs] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={name}>
            <Link to="/locations" className="btn btn-primary">
              Back to locations
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-location">
          <div className="single-location-images">
            {defaultImgs.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-location-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <Itenary />
          </div>
        </section>
      </>
    );
  }
}
