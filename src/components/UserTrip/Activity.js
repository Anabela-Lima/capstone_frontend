import React, { useState, useEffect } from 'react'
import './UserTrip.css'
import { mockTripData } from '../_MockData/MockTripData'
import { ReactComponent as UsersIcon } from '../assets/images/users.svg'
import { ReactComponent as CircleCloseIcon } from '../assets/images/x-circle.svg'
import { ReactComponent as ArrowLeftIcon } from '../assets/images/arrow-left.svg'
import { useTransition, animated } from 'react-spring';
import axios from 'axios'
import ChangePayments from './ChangePayments'

const Activity = ({activity, activityBoolean, setActivity, reRender}) => {

    const [activityAssignment, setActivityAssignment] = useState([]);
    const [paymentsAddUp, setPaymentsAddUp] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/DayActivityAssignmentsByDayActivityID?dayActivityID=${activity.id}`)
        .then(response => {
            const activityAssignment = response.data;
            setActivityAssignment(activityAssignment);
        })
        .catch(err => console.error(err));
    }, [activityAssignment]);


    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/canSubmitActivityPaymentForm?dayActivityID=${activity.id}`)
        .then(response => {
            const paymentsAddUp = response.data;
            setPaymentsAddUp(paymentsAddUp.success);
        })
        .catch(err => console.error(err));
    }, [paymentsAddUp]);

    const reRenderAddUp = () => {
        setPaymentsAddUp(!paymentsAddUp);
    }

    const reRenderAssignments = () => {
        setActivityAssignment([]);
    }

    const [canSeePayments, setSeePayments] = useState(false);

    const deleteDayActivity = () => {
        const options = {
            method: "DELETE",
        }
        fetch(`http://127.0.0.1:8080/deleteDayActivity?dayActivityID=${activity.id}`, options)
        .then(response => reRender());
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

    const attendeeIconsGenerator = (attendees) => {
        const extra = attendees - 3;
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

    return (
        <>
        <div className="activity-card-container">
                <div className="activity-card-background"></div>
                <div className="activity-card-image-container">
                    <img 
                        src={activity.imgURL} 
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
                            {activity.dayActivityType}
                        </div>
                        <div className="activity-card-attendee">
                            {attendeeIconsGenerator(
                                activityAssignment.length
                            )}
                        </div>
                    </div>

                    <div className="activity-card-control">
                        <div className="whos-going">
                            <button 
                                className="whos-going-button" 
                                onClick={() => setSeePayments(!canSeePayments)}
                            >
                                <div className="whos-going-button-background"></div>
                                <div className="whos-going-button-text">
                                    <UsersIcon className="users-icon-style"/>
                                    <span className="split-text">Split</span>
                                </div>
                            </button>
                        </div>
                        <div className="cancel-trip">
                            <button className="cancel-trip-button" onClick={deleteDayActivity}>
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
            {!paymentsAddUp ? <h1 style={{color:"red"}}>THESE DON'T ADD UP</h1> : null}  
            {canSeePayments ? 
            activityAssignment.map(assignment => {
                return <ChangePayments assignment={assignment} reRender={reRenderAssignments}
                reRenderAddUp={reRenderAddUp}/>
            })
            : null}
        </>
    )
}

export default Activity