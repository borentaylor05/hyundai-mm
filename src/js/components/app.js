import React, { Component } from 'react';
import Template from './app-template';
import ModelMatrix from './modelMatrix/model-matrix';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';

export default () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={ Template }>
        <IndexRoute component={ ModelMatrix } />
      </Route>
    </Router>

  //  <Route path="cart" component={ Cart } />
  //  <Route path="item/:item" component={ CatalogDetail } />
  )
}