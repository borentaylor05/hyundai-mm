import React from 'react';
import DefaultButton from './default-button';

export default (props) => {
  return (
    <DefaultButton className="tt-tr-close"
                   text={ props.text }
                   handler={ props.handler }
    />
  )
}