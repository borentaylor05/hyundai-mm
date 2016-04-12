import React from 'react';
import CarLinksSection from './car-links-section';

export default (props) => {
  var linkSections = props.data.map((item, i) => {
    return <CarLinksSection label={ item.label } links={ item.links } key={ i } />
  });
  return (
      <div className="tt-car-links-container">
        { linkSections }
      </div>
  )
}