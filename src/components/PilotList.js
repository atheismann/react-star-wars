import React, { Component } from 'react';
import { getPilots } from '../services/sw-api';
import './PilotList.css';

class PilotList extends Component {
  state = {
    pilots: [],
  }
  async componentDidMount() {
    const pilots = await getPilots(this.props.starship.pilots);
    this.setState({pilots: pilots});
  };

  render(){
    let pilotList;
    if (this.state.pilots.length > 0) {
      pilotList = (
        this.state.pilots ?
        <div className='PilotList-pilot'>
        {this.state.pilots.map((pilot, idx) => 
              <span>
                {pilot.name}
              </span>
            )}
        </div>
        :
        <h3>Loading...</h3>
      );
    } else {
      pilotList = (
      <div className='PilotList-pilot'>
        No Pilots!
      </div>
      );
    };
    return(
      <div className='PilotList'>
       {pilotList}
      </div>
    );
  };
};

export default PilotList;