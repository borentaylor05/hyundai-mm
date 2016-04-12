import React from 'react';

export default (props) => {
  return (
    <div className="col-xs-3 tt-car-list-item">
      <div className="tt-car-list-item-wrapper">
        <a className="tt-car-list-item-link" onClick={ props.handler }>
          <p className="tt-car-list-item-name">
            { props.car.name }
          </p>
          <img src={ props.car.listImage }
               alt={ props.car.name }
               className="tt-car-list-item-img"
          />
        </a>
      </div>
    </div>
  )
}