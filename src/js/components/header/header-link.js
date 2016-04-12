import React from 'react';
import utils from '../../utils';
import { Link } from 'react-router';

export default (props) => {
  var link;
  if (utils.isExternal(props.url)) {
    link = <a target="_blank" href={ props.url }> { props.text } </a>
  } else {
    link = <Link to={ props.url }> { props.text } </Link>
  }
  return (
    <div className="col-xs-auto tt-header-link">
      { link }
    </div>
  )
}