import React, { useState, useEffect } from 'react'
import GenerateTripReport from './GenerateTripReport'
import './PieChartHistory.css'

import axios from 'axios';

const PieChartHistory = ({trips, user}) => {

  const [organiserOnly, setOrganiserOnly] = useState(false);

  return (
    <div style={{color: 'white'}}>PieChartHistory

    <button>Where I'm Organiser</button>

    {
      trips.map(trip => {
        return <GenerateTripReport trip = {trip} organiserOnly={organiserOnly}
        user = {user}/>
      })
    }
    
    </div>
    
  )
}

export default PieChartHistory