import React from 'react'
import './UserPrivacy.css'
import { useState } from 'react';
import {useTransition, animated } from 'react-spring'
import PrivacyNotifications from '../PrivacyNotification/PrivacyNotifications';
import { ReactComponent as LinkedInIcon } from '../../components/assets/images/linkedin.svg'
import { ReactComponent as InstaIcon } from '../../components/assets/images/instagram.svg'
import { ReactComponent as Chain } from '../../components/assets/images/link.svg'
import { ReactComponent as CheckIcon } from '../../components/assets/images/check.svg'
import { ReactComponent as ChevronRight } from '../../components/assets/images/chevron-right.svg'
import { ReactComponent as Edit } from '../../components/assets/images/edit.svg'
import { ReactComponent as Lock } from '../../components/assets/images/lock.svg'
import { ReactComponent as UserIcon } from '../../components/assets/images/user (3).svg'

const UserPrivacy = () => {

// on change text  

const [isEditing, setIsEditing] = useState(false) ;  // use state (changes state of something)  with initial value= (so isEditing will have an initial value of false), returns an array of 2 elements: isEditing is our state, then we setIsEditing is what allows us to update the isEditing
const [isEditing1, setIsEditing1] = useState(false) ;
const [isEditing2, setIsEditing2] = useState(false) ;
const [isEditing3, setIsEditing3] = useState(false) ;
const [textBody, setTextBody]= useState("");

// changeIcon

const changeIcon = () => {

  // alert("Field has been changed")
  setIsEditing(true)
  setTimeout(() => {
    setIsEditing(false)
  }, 1000)
  
}

const changeIcon1 = () => {

  // alert("Field has been changed")
  setIsEditing1(true)
  setTimeout(() => {
    setIsEditing1(false)
  }, 1000)
  
}

const changeIcon2 = () => {

  // alert("Field has been changed")
  setIsEditing2(true)
  setTimeout(() => {
    setIsEditing2(false)
  }, 1000)
  
}

//----------------------------------- Displays


// initial notification state of display = false
const [notification, setNotification] = useState(false);

// initial notification state is empty 
const [notificationText, setNotificationText] = useState("");


const transition = { 
  
  // time delay before it comes in
  delay: 200,
  // just before it comes in
  from: {opacity:0},
  // when it comes in 
  enter: {opacity:1},
  // when it leaves 
  leave: {opacity:0},
  // if rendering 2 things- previous componenet should unmount, before next one mounts
  exitBeforeEnter: true
}


// useTrandisition returns displayTransition
const notificationTransition = useTransition(notification, transition)


// function oninputchange
const onInputChange = () => {
  console.log('clicked')
  setNotificationText("WARNING!")
  setTextBody("You are about to make changes to your social Tags")
  setNotification(true)
  setTimeout(() => {
      setNotification(false)
      // setNotificationText("")
  }, 5000)


}


const  notif =()=> {
  // rendering Notification
  return (
      <>
          {   // displayTransition takes in a style + an item
              notificationTransition((style, item) => {
                // first we check to see if item boolean (i.e. display) is set to true/ false- if true
                  return item ? 

                  // apply fade transition using style= {style}

                  <animated.div className="animatedDiv" style={style}>             
                     {/* if item boolean is true display notification  */}
                      <PrivacyNotifications notificationText= {notificationText} textBody={textBody} />
                      {/* aimated.div = react's spring version of the div- has exactly same property */}
                  </animated.div> 

              
                  // if item boolean is false- return nothing "" or can just do empty div otherwise -return nothing
                  : 
                  <div></div>
              })
          }
      </>
  )
}



  

  return (
    
    <section>

    {/* <NotificationContainer/> */}
    {notif()}

    <section id= "mainSection">


    <div id= "twitterSection1">
    <div id = "twitterSection2" className = "segment">  

    <div id="lefticons1"> < Lock className = "icon" id="lock"/> 
    < UserIcon className = "icon" id="userIcon"/>  </div>
     
      <span id= "twitterTag" contentEditable="true" onInput={changeIcon}  className= "mainText" onClick={onInputChange}> UserName </span>
      <div id= "twitterCircleRight" className='circlesRight'> </div> 
      <div id= "twitterCircleLeft" className='circlesLeft'> </div> 
      {
          isEditing ?  // if is edtiting is true return:
          <Edit className = "icon checkIcon" id="twitterCheckIcon"/>
          :  // else return 
          <CheckIcon className = "icon checkIcon" id="twitterCheckIcon"/>
      }

    </div>

    </div>
    <div id= "instaSection1">
    <div id = "instaSection2" className = "segment">  
      <InstaIcon className = "icon" id="instaIcon"/>
      <span contentEditable= "true" onInput= {changeIcon1} onClick={onInputChange} className= "mainText">First Name </span> 
      <div id= "instaCircleRight" className='circlesRight'> </div> 
      <div id= "instaCircleLeft" className='circlesLeft'> </div> 

      {
          isEditing1 ?  // if is edtiting is true return:
          <Edit className = "icon checkIcon" id="twitterCheckIcon"/>
          :  // else return 
          <CheckIcon className = "icon checkIcon" id="twitterCheckIcon"/>
      }


    </div>
      
    </div>
    

    <div id= "LinkedInSection1">

    <div id = "LinkedInSection2" className = "segment">  
      <LinkedInIcon  className = "icon" id="linkedInIcon"/> <span contentEditable= "true" onInput= {changeIcon2}  onClick={onInputChange} className= "mainText">Last Name</span> 
      <div id= "instaCircleRight" className='circlesRight'> </div> 
      <div id= "instaCircleLeft" className='circlesLeft'> </div> 
      {
          isEditing2 ?  // if is edtiting is true return:
          <Edit className = "icon checkIcon" id="twitterCheckIcon"/>
          :  // else return 
          <CheckIcon className = "icon checkIcon" id="twitterCheckIcon"/>
      }

    </div>

    </div>
    

    <div id= "chain1Section1">
   
    <div id = "chain1Section2" className = "segment">  
      <Chain  className = "icon" id="chain1Icon"/><span className= "mainText"> Email </span>  
      <div id= "chain1CircleRight" className='circlesRight'> </div> 
      <div id= "chain1CircleLeft" className='circlesLeft'> </div> 
      {
          isEditing3 ?  // if is edtiting is true return:
          <Edit className = "icon checkIcon" id="twitterCheckIcon"/>
          :  // else return 
          <CheckIcon className = "icon checkIcon" id="twitterCheckIcon"/>
      }

    </div>

    </div>
    

    <div id= "chain2Section1">
   
    <div id = "chain2Section2" className = "segment">  
      <Chain  className = "icon" id="chain2Icon"/> <span className= "mainText" >Password</span>  
      
      <div id= "chain2CircleLeft" className='circlesLeft'> </div> 
      <div id = "pwStrenght-container"> 
        <div  className= "pwStrength-class" id="pwStrength1"></div> 
        <div  className= "pwStrength-class" id="pwStrength2"> </div>  
        <div  className= "pwStrength-class" id="pwStrength2"> </div>  
      
      </div>
      
    </div>

    </div>
    

    

    </section>
    <section id= "buttonSection">
      <button id= "saveBtn"> <span id= "saveBtnText"> Save </span> </button>
    </section>
  


  </section>
  )
}

export default UserPrivacy