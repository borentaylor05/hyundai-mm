import React from 'react';
import Happenings from '../happenings/happenings';
import YearsHeader from '../yearsHeader/years-header';
import MatrixStore from '../../stores/matrix-store';
import MatrixMixin from '../../mixins/matrix-watch';
import CarList from './carList/car-list';
import Car from './car/car';

function getState() {
  return { state: MatrixStore.getMatrixState() }
}

const ModelMatrix = (props) => {
  let activeCar = props.state.activeCar;
  let mainSection;
  if (activeCar) {
    mainSection = <Car car={ activeCar } />
  } else {
    mainSection = <CarList cars={ props.state.cars } />
  }

  return (
    <div className="tt-body-container">
      <Happenings />
      <div className="tt-mm-container">
        <YearsHeader years={ props.state.years } active={ props.state.activeYear } />
        { mainSection }
      </div>
    </div>
  )
};

export default MatrixMixin(ModelMatrix, getState);