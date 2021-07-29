import React from 'react';
import Band from './Band';

const Bands = props => {
  // console.log(props.bands)
  return (
    <ul>
      {props.bands.map((band, index) => <Band band={band} index={index} removeBand={ props.removeBand } />)}
    </ul>
  )
};

export default Bands;