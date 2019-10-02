import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipPage.css';
import PilotList from '../../components/PilotList'

const StarshipPage = (props) => {
  const starship = props.getStarship(props.match.params.idx);
  
  return(
    <div className='StarshipPage'>
      {starship ?
        <div className='StarshipPage-starship'>
          <span>Name:</span>
          <span>{starship.name}</span>
          <span>Model:</span>
          <span>{starship.model}</span>
          <span>Pilots:</span>
          <span><PilotList 
            {...props}
            starship={starship}
          /></span>
          <Link to='/'>RETURN</Link>
        </div>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};
  
  export default StarshipPage;