import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../assets/images/home/DSCN6107.jpg";
import PropTypes from 'prop-types';

export default function Location({ location }) {
  let { name, slug, images } = location;
  
  return (
    <>
      <article className="location">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt={name} />
          <Link to={`/locations/${slug}`} className="btn btn-secondary">
          Features
        </Link>
        </div>
        <p>{name}</p>
      </article>
    </>
  );
}

Location.propTypes={
  location:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired
  })
}