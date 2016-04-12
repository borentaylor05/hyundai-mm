import React from 'react';
import Header from './header/header';

var headerLinks = teleTechGlobalData.header.links;

export default (props) => {
  return (
    <div className="container">
      <Header headerLinks={ headerLinks } />
      { props.children }
    </div>
  )
}