import React from 'react';
import MatrixStore from '../../../stores/matrix-store';
import CarLinks from './car-links';
import CarImage from './car-image';

export default (props) => {
  let data = props.car.data;
  let length = Math.ceil(data.length / 2);
  let leftLinks = data.splice(0, length);
  let rightLinks = data;
  
  return (
    <div className="row tt-car-row">
      <div className="col-xs-4">
        <CarLinks data={ leftLinks } />
      </div>
      <div className="col-xs-4">
        <CarLinks data={ rightLinks } />
      </div>
      <div className="col-xs-4">
        <CarImage image={ props.car.selectImage } />
      </div>
    </div>
  )
};
