import React from 'react';
import CarLinkItem from './car-link-item';

export default (props) => {
  var links = props.links.map((link, i) => {
    return <CarLinkItem url={ link.url } text={ link.text } key={ i } />
  });

  return (
    <div className="tt-car-links-section-container">
      <h4 className="tt-car-links-section-header"> { props.label } </h4>
      { links }
    </div>
  )
}