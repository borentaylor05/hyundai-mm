import React from 'react';
import MatrixActions from '../../actions/matrix-actions';

export default (props) => {
  var myClass = "col-xs-auto tt-year-link " + props.className;
  return (
    <div className={ myClass }>
      <a onClick={ MatrixActions.selectYear.bind(null, props.text) }>
        { props.text }
      </a>
    </div>
  )
}