import React, { useState } from 'react'
import './UserTrip.css'
import { mockTripData } from '../_MockData/MockTripData'
import { ReactComponent as UsersIcon } from '../assets/images/users.svg'
import { ReactComponent as CircleCloseIcon } from '../assets/images/x-circle.svg'
import { useTransition, animated } from 'react-spring';

const UserTrip = ({tripId}) => {

    const trip = mockTripData.filter(data => data.id === tripId);
    console.log(trip)

    const sortedByDay = trip[0].activities.sort((a, b) => {
        if (a.day < b.day) {
            return -1;
        }
        else if (a.day > b.day) {
            return 1;
        }
        else {
            return 0;
        }
    });
    console.log(sortedByDay)

    const numberOfDays = sortedByDay[sortedByDay.length-1].day
    console.log(numberOfDays)

    const attendeeIconsGenerator = (attendees) => {
        const extra = attendees.length - 3;
        if (extra > 0) {
          return (
            <>
              <div className="attendee-one"></div>
              <div className="attendee-two"></div>
              <div className="attendee-three"></div>
              <div className="attendee-extra">+{extra}</div>
            </>
          )
        }
        else if (extra === 0) {
          return (
            <>
              <div className="attendee-one"></div>
              <div className="attendee-two"></div>
              <div className="attendee-three"></div>
            </>
          )
        }
        else if (extra === -1) {
          return (
            <>
              <div className="attendee-one"></div>
              <div className="attendee-two"></div>
            </>
          )
        }
        else {
          return (
            <>
              <div className="attendee-one"></div>
            </>
          )
        }
    }

    const formatActivityTitle = (title) => {
        if (title.length > 21) {
            return ( 
                <span>
                    {title.substring(0, 21) + '...'}
                </span> 
            )
        }
        return ( 
            <span>
                {title}
            </span>
        )
    }

    const splitOnClick = (id) => {
        setActivityId(id)
    }

    const [activityId, setActivityId] = useState(null);

    const fadeTransition = {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        exitBeforeEnter: true
    }

    const showAllActivities = useTransition(activityId, fadeTransition);

    const getOneActivityCard = (activity) => {
        return (
            <div className="activity-card-container">
                <div className="activity-card-background"></div>
                <div className="activity-card-image-container">
                    <img 
                        src={activity.imgUrl} 
                        alt="" 
                        className="activity-card-image"
                    />
                </div>
                <div className="activity-card-info-container">

                    <div className="activity-card-title-price">
                        <div className="activity-card-title">
                            {formatActivityTitle(activity.name)}
                        </div>
                        <div className="activity-card-price">
                            £{activity.price}
                        </div>
                    </div>

                    <div className="activity-card-type-attendee">
                        <div className="activity-card-type">
                            {activity.category}
                        </div>
                        <div className="activity-card-attendee">
                            {attendeeIconsGenerator(
                                activity.attendees
                            )}
                        </div>
                    </div>

                    <div className="activity-card-control">
                        <div className="whos-going">
                            <button 
                                className="whos-going-button" 
                                onClick={() => splitOnClick(activity.id)}
                            >
                                <div className="whos-going-button-background"></div>
                                <div className="whos-going-button-text">
                                    <UsersIcon className="users-icon-style"/>
                                    <span className="split-text">Split</span>
                                </div>
                            </button>
                        </div>
                        <div className="cancel-trip">
                            <button className="cancel-trip-button">
                                <div className="cancel-trip-button-background"></div>
                                <div className="cancel-trip-button-text">
                                    <CircleCloseIcon className="circle-close-icon-style"/>
                                    <span className="cancel-text">Cancel</span> 
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }

    const activityCard = () => {
        const activities = sortedByDay.map(activity => {
            return (
                <>
                    {getOneActivityCard(activity)}
                </>
            )
        })
        return (
            <>
                {activities}
            </>
        )
    }

    return (
        <>
            <div id="user-trip-container">
                <div id="user-trip-image-container">
                    <img src={trip[0].imgUrl} alt="" id="user-trip-image"/>
                    <div id="user-trip-name">{trip[0].name}</div>
                    <div id="user-trip-day-num">Day 1</div>
                    <div id="user-trip-drop-down-container">

                    </div>
                </div>
                <div id="user-trip-activities-container">
                    {
                        showAllActivities((style, item) => {
                            return item ? 
                            <animated.div 
                                style={style}
                            >
                                <span style={{color: 'white', fontSize: '50px'}}>{activityId}</span>
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

export default UserTrip