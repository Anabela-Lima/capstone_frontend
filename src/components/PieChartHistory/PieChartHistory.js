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
    <div>

    <div className="headingTripHistory" style={{backgroundColor: '#395571', padding: '3px'}}>
      <h1 style={{color: 'white', paddingLeft: '50px', paddingTop: '5px', fontSize: '50px'}}>Trip History</h1>
      <div style={{height: '150px', width: '150px', overflow: 'hidden', borderRadius: '50%', display: 'flex', justifyContent: 'center'}}>
        <img className="headingPicture" src={user.imgURL} height='100%' width='auto'/>
      </div>
    </div>


    <div style={{color: 'white'}}>

    <div className="organiserBtn">
      {/* <button onClick={handleOrganiserOnly}>Where I'm Organiser</button> */}
      <h1 style={{paddingRight: '30px'}}>Where I'm Organiser</h1>
      <input style={{}} type="checkbox" onChange={handleOrganiserOnly}/>
    </div>

    <div style={{overflowY: 'scroll', height: '1500px'}}>
    {
      trips.map(trip => {
        return <GenerateTripReport trip = {trip} organiserOnly={organiserOnly}
        user = {user}/>
      })
    }
    </div>

    </div>
    </div>
    </>
  )
}

export default PieChartHistory