import React from 'react';
import MatrixStore from '../stores/matrix-store';

export default ( InnerComponent, stateCallback ) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateCallback(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    MatrixStore.addChangeListener( this._onChange )
  }
  componentWillUnmount(){
    MatrixStore.removeChangeListener( this._onChange )
  }

  _onChange(){
    this.setState( stateCallback( this.props ) )
  }

  render() {
    return (
      <InnerComponent { ...this.state } { ...this.props } />
    )
  }
}