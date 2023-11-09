import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
