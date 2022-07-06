import React, { useState, useEffect } from 'react'
import GenerateTripReport from './GenerateTripReport'
import './PieChartHistory.css'

import axios from 'axios';

const PieChartHistory = ({trips, user}) => {

  const [organiserOnly, setOrganiserOnly] = useState(false);

  const handleOrganiserOnly = () => {
    setOrganiserOnly(!organiserOnly);
  }

  return (
    <>

    <div className="headingTripHistory" style={{backgroundColor: '#395571', padding: '3px'}}>
      <h1 style={{color: 'white', paddingLeft: '50px', paddingTop: '5px', fontSize: '50px'}}>Trip History</h1>
      <img className="headingPicture" src={user.imgURL} height='150px' width='150px'/>
    </div>


    <div style={{color: 'white'}}>

    <button onClick={handleOrganiserOnly}>Where I'm Organiser</button>

    {
      trips.map(trip => {
        return <GenerateTripReport trip = {trip} organiserOnly={organiserOnly}
        user = {user}/>
      })
    }
    
    </div>
    </>
  )
}

export default PieChartHistory