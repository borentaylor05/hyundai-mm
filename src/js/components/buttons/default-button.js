import React from 'react';

export default (props) => {
  let myClass = "btn btn-default btn-sm tt-default-button " + props.className;
  return (
    <button className={ myClass }
            onClick={ props.handler }
    >{ props.text }
    </button>
  )
}