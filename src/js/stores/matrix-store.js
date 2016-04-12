import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import MatrixApi from '../api/matrix-api';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'matrix-change';

var years = MatrixApi.getYears();
var activeYear = years[0];
var activeCar = null;

function _getActiveYear() {
  return activeYear;
}

function _getYears() {
  return years;
}

function _setActiveCar(car) {
  activeCar = car;
}

function _getActiveCar() {
  return activeCar;
}

function _setActiveYear(year) {
  activeCar = null;
  activeYear = year;
}

function _getData() {
  return {
    years: MatrixApi.getYears(),
    activeYear: _getActiveYear(),
    cars: MatrixApi.getCarsByYear(_getActiveYear()),
    activeCar: _getActiveCar()
  }
}

const MatrixStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getMatrixState() {
    return _getData();
  },

  getMatrixYears() {
    return {
      all: _getYears(),
      active: _getActiveYear()
    }
  },

  dispatcherIndex: register( function(action) {
    switch (action.actionType) {
      case AppConstants.MATRIX.SELECT_YEAR:
        _setActiveYear(action.year);
        break;
      case AppConstants.MATRIX.SELECT_CAR:
        _setActiveCar(action.car);
        break;
    }

    MatrixStore.emitChange();

  })
});

export default MatrixStore;