import React from 'react';
import { Link } from 'react-router';
import HeaderLink from './header-link';

export default (props) => {
  let headerLinks = props.headerLinks.map((link, index) => {
    return <HeaderLink key={ index } url={ link.url } text={ link.text } />
  });

  return (
    <nav className="row tt-header">
      { headerLinks }
    </nav>
  )
}