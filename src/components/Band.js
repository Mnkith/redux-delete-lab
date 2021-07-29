import React, { Component } from 'react';

class Band extends Component {
  // { band, index } = 
  render() {
    return <li key={this.props.index}> 
    {this.props.band.name} 
    <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.removeBand(this.props.band.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
    </li>;
    
  }
};

export default Band;
