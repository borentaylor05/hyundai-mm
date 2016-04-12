import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var happeningsOpen = true;

var data;

var defaultData = {
  title: 'This Week\'s Hyundai Happenings',
  body: 'A bunch of text',
  quote: 'What up? - OG'
};

function _closeHappenings() {
  happeningsOpen = false;
}

function _openHappenings() {
  happeningsOpen = true;
}

function _toggleHappenings() {
  happeningsOpen = !happeningsOpen;
}

function _isHappeningsOpen() {
  return happeningsOpen;
}

function _getData() {
  return {
    opened: _isHappeningsOpen(),
    data: data || defaultData
  }
}

const HappeningsStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getHappeningsState() {
    return _getData();
  },

  dispatcherIndex: register( function(action) {
    switch(action.actionType){
      case AppConstants.HAPPENINGS.CLOSE:
        _closeHappenings();
        break;
      case AppConstants.HAPPENINGS.OPEN:
        _openHappenings();
        break;
      case AppConstants.HAPPENINGS.TOGGLE:
        _toggleHappenings();
        break;
    }

    HappeningsStore.emitChange();

  })
});

export default HappeningsStore;