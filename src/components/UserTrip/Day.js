import React, { useState, useEffect } from 'react'
import './UserTrip.css'
import './Day.css'
import { mockTripData } from '../_MockData/MockTripData'
import { ReactComponent as UsersIcon } from '../assets/images/users.svg'
import { ReactComponent as CircleCloseIcon } from '../assets/images/x-circle.svg'
import { ReactComponent as PlusIcon } from '../assets/images/plus.svg'
import { ReactComponent as ArrowLeftIcon } from '../assets/images/arrow-left.svg'
import { useTransition, animated } from 'react-spring';
import axios from 'axios'
import UserTrip from "./UserTrip"
import { DataArrayOutlined } from '@mui/icons-material'
import Activity from './Activity'
import AddDayActivity from './AddDayActivity'

const Day = ({dayDetails, goToUserProfileFromTripScreen, dayNumber}) => {

    const [dayActivities, setActivities] = useState([]);
    const [activityBoolean, setActivity] = useState(null);

    const [showAddNewActivity, setShowAddNewActivity] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/day/getActivitiesByDayID?dayID=${dayDetails.id}`)
        .then(response => {
            const dayActivities = response.data;
            setActivities(dayActivities);
        })
        .catch(err => console.log(err));
    },[dayActivities]);

    const reRenderActivites = () => setActivities([])

    const fadeTransition = {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        exitBeforeEnter: true
    }

    const slideFadeTransition = {
        from: {
            x: -999,
            y: 0
        },
        enter: {
            x: 0,
            y: 0
        },
        leave : {
            x: 999,
            y: 0
        },
        exitBeforeEnter: true
    }

    const showAllActivities = useTransition(activityBoolean, fadeTransition);

    const showAddNewActivityTransition = useTransition(showAddNewActivity, slideFadeTransition)

    const showAddNewActivityOnClick = () => setShowAddNewActivity(!showAddNewActivity)
    const closeAddNewFromAddNew = () => setShowAddNewActivity(false)


    const activityCard = () => {
        let activities = dayActivities.map(activity => {
            return (
                <>
                    <Activity 
                        reRender={reRenderActivites}
                        activity={activity}
                    />
                </>
            )
        })
        return (
            <>
                {
                    activities.length === 0 ? 
                    <span className="no-activities-display">Nothing here yet.</span> : 
                    activities
                }
            </>
        )
    }

    return (
        <> 
        {
            showAddNewActivityTransition((style, item) => {
                return item ?
                    <animated.div 
                        style={style} 
                        className="add-new-activity-animated-div"
                    >
                        <AddDayActivity 
                            day={dayDetails} 
                            closeAddNewFromAddNew={closeAddNewFromAddNew}
                        />
                    </animated.div>
                :
                    ''
            })
        }

         <div id="user-trip-container">
                <div id="user-trip-image-container">
                    <img src={dayDetails.trip.imgURL} alt="" id="user-trip-image"/>
                    <div id="user-trip-name">{dayDetails.trip.name}</div>
                    <div id="user-trip-day-num">Day {dayNumber}</div>
                    {/* <div id="user-trip-drop-down-container">

                    </div> */}
                    <div 
                        className="go-back-arrow-container"
                        onClick={goToUserProfileFromTripScreen}
                    >
                        <ArrowLeftIcon id="arrow-left"/>
                        <div className="go-back-arrow-background"></div>
                    </div>
                    <div 
                        className="add-new-activity-container"
                        onClick={showAddNewActivityOnClick}
                    >
                        <div className="add-new-activity-background"></div>
                        <div className="add-new-icon-background"></div>
                        <PlusIcon id="add-new-activity-icon" />
                        <span className="add-new-text">New Activity</span>
                    </div>
                    
                </div>
                <div id="user-trip-activities-container">
                    {
                        showAllActivities((style, item) => {
                            return item ? 
                            <animated.div 
                                style={style}
                            >
                                <span style={{color: 'white', fontSize: '50px'}}>{activityBoolean.id}</span>
                            </animated.div> :
                            <animated.div 
                                style={style} 
                                className="show-all-activity-animated-div"
                            >
                                {activityCard()}
                            </animated.div>
                        }) 
                    }
                </div>
            </div>
        
        </>
    )
}

export default Day