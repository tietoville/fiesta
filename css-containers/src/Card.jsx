import * as React from 'react';
import './Card.css';

const Card = ({heading, description}) => {

  return (
    <div className="card">
      <div className="image">
      </div>
      <div className="content">
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  )
};

export default Card;
