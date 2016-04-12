import React from 'react';
import MatrixApi from '../../../api/matrix-api';
import MatrixStore from '../../../stores/matrix-store';
import MatrixActions from '../../../actions/matrix-actions';
import CarListItem from './car-list-item';

export default (props) => {
  let cars = props.cars.map((car, i) => {
    return <CarListItem car={ car }
                        key={ i }
                        handler={ MatrixActions.selectCar.bind(null, car) }/>
  });

  return (
    <div className="row tt-car-list-row">
      { cars }
    </div>
  )
};
