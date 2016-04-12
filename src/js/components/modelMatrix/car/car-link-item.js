import React from 'react';

export default (props) => {
  return (
    <div className="tt-car-link-item-container">
      <a target="_blank" href={ props.url }> { props.text } </a>
    </div>
  )
}