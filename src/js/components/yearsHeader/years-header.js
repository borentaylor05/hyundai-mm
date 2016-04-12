import React from 'react';
import YearLink from './year-link';
import MatrixStore from '../../stores/matrix-store';

export default (props) => {
  var yearLinks = props.years.map((year, i) => {
    return (
      <YearLink key={ i }
                text={ year }
                className={ year === props.active ? 'active' : '' }
      />
    )
  });

  return (
    <div className="row tt-year-header">
      { yearLinks }
    </div>
  )
};
