import React, { useState, useEffect } from 'react'
import './UserTrip.css'
import './Day.css'
import { mockTripData } from '../_MockData/MockTripData'
import { ReactComponent as UsersIcon } from '../assets/images/users.svg'
import { ReactComponent as CircleCloseIcon } from '../assets/images/x-circle.svg'
import { ReactComponent as PlusIcon } from '../assets/images/plus.svg'
import { ReactComponent as ArrowLeftIcon } from '../assets/images/arrow-left.svg'
import { ReactComponent as CheckIcon } from '../assets/images/check.svg'
import { ReactComponent as EditIcon } from '../assets/images/edit-2.svg'
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
    const [budget, setBudget] = useState(0);

    const handleBudgetChange = (event) => setBudget(event.target.value);

    const changeBudget = (event) => {
        event.preventDefault();
        const options = {
            method: "PUT",
          }
        fetch(`http://127.0.0.1:8080/day/changeBudget?dayID=${dayDetails.id}&budget=${budget}`, options)
    }

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
                        dayNumber={dayNumber}
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
        <form 
            onSubmit={changeBudget}
            style={{
                position: 'absolute',
                background: 'white',
                height: '100px',
                width: '360px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '999',
                borderRadius: '50px',
                border: 'none',
                opacity: '0.75',
                left: '480px',
                top: '400px'
            }}
        >
                <label>
                    <input 
                        onChange={handleBudgetChange} 
                        type="text" 
                        placeholder={"Set Budget"}
                        style={{
                            width: '220px',
                            height: '70px',
                            fontSize: '40px',
                            color: 'black',
                            border: 'none',
                            textAlign: 'center'
                        }}
                        className="set-budget-input"
                    />
                </label>
            <button 
                type="submit"
                style={{
                    border: 'none',
                    width: '80px',
                    height: '80px',
                    marginLeft: '0px',
                    boxShadow: 'none',
                    background: 'transparent'
                }}
                onClick={() => {}}
            >
                <CheckIcon style={{
                    height: '100%',
                    width: '100%',
                    background: 'transparent'
                }}/>
            </button>
        </form>
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
                                <span 
                                    style={{color: 'white', fontSize: '50px'}}>{activityBoolean.id}</span>
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