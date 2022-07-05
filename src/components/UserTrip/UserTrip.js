import React, { useState, useEffect } from 'react'
import './UserTrip.css'
import { mockTripData } from '../_MockData/MockTripData'
import { ReactComponent as UsersIcon } from '../assets/images/users.svg'
import { ReactComponent as CircleCloseIcon } from '../assets/images/x-circle.svg'
import { ReactComponent as ArrowLeftIcon } from '../assets/images/arrow-left.svg'
import { useTransition, animated } from 'react-spring';
import axios from 'axios'
import Day from './Day'

const UserTrip = ({tripId, goToUserProfileFromTripScreen}) => {

    const[daysByTrip, setDaysByTrip] = useState([]);
    const [dayNumber, setDayNumber] = useState(1);

    const ChangeToValue = (event) => {
        setDayNumber(event.target.value);
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/day/getDaysByTrip?tripID=${tripId}`)
        .then(response => {
            const daysByTrip = response.data;
            setDaysByTrip(daysByTrip);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <>
        <select name="days" style={{width: "100px"}} onChange={ChangeToValue}>
                {daysByTrip.map((day, index) => {
                    return <option value={index+1}> Day {index+1}</option>
                })}
        </select>

        
        {
            daysByTrip.map((data, index) => {
                if (dayNumber == index+1) {
                    return <Day dayDetails={data} dayNumber = {index+1} goToUserProfileFromTripScreen={goToUserProfileFromTripScreen}/> 
                }   
            })
        }    
        </>
    )
}

export default UserTrip