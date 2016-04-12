import React, { Component } from 'react';
import HappeningActions from '../../actions/happening-actions';
import HappeningsStore from '../../stores/happenings-store';
import DefaultCloseButton from '../buttons/default-close-button';

// mocked for now
function getHappenings() {
  return { status: HappeningsStore.getHappeningsState() };
}

class Happenings extends Component{
  constructor() {
    super();
    this.state = getHappenings();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    HappeningsStore.addChangeListener( this._onChange )
  }
  componentWillUnmount(){
    HappeningsStore.removeChangeListener( this._onChange )
  }

  _onChange(){
    this.setState( getHappenings() )
  }

  render() {
    let opened = this.state.status.opened;
    var hideBodyClass = opened ?
      'tt-happenings-body-container' : 'tt-happenings-body-container hide';

    return (
      <div className="tt-happenings-container">
        <DefaultCloseButton handler={ HappeningActions.toggleHappenings.bind(null, null) }
                            text={ opened ? 'X' : 'V' }
        />
        <h3> { this.state.status.data.title } </h3>
        <div className={ hideBodyClass }>
          <div className="tt-happenings-body">
            { this.state.status.data.body }
          </div>
        </div>
      </div>
    )
  }
}

export default Happenings;