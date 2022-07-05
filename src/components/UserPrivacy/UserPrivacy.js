import React from 'react'
import './UserPrivacy.css'
import { useState } from "react";
import { ReactComponent as TwitterIcon } from '../../components/assets/images/twitter (1).svg'
import { ReactComponent as LinkedInIcon } from '../../components/assets/images/linkedin.svg'
import { ReactComponent as InstaIcon } from '../../components/assets/images/instagram.svg'
import { ReactComponent as Chain } from '../../components/assets/images/link.svg'
import { ReactComponent as CheckIcon } from '../../components/assets/images/check.svg'
import { ReactComponent as ChevronRight } from '../../components/assets/images/chevron-right.svg'
import { ReactComponent as Edit } from '../../components/assets/images/edit.svg'



const UserPrivacy = () => {

// on change text  

const [isEditing, setIsEditing] = useState(false) ;  // use state (changes state of something)  with initial value= (so isEditing will have an initial value of false), returns an array of 2 elements: isEditing is our state, then we setIsEditing is what allows us to update the isEditing
const [isEditing1, setIsEditing1] = useState(false) ;
const [isEditing2, setIsEditing2] = useState(false) ;
const [isEditing3, setIsEditing3] = useState(false) ;
const [isEditing4, setIsEditing4] = useState(false) ;
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



  return (



    <section>


      <section id= "mainSection">

  
      <div id= "twitterSection1">
      <div id = "twitterSection2" className = "segment">  
        <TwitterIcon  className = "icon" id="twitterIcon"/> 
        <span id= "twitterTag" contentEditable="true" onInput={changeIcon} className= "mainText"> @Ayana85 </span>
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
        <span contentEditable= "true" onInput= {changeIcon1} className= "mainText">@AyanaZhen</span> 
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
        <LinkedInIcon  className = "icon" id="linkedInIcon"/> <span contentEditable= "true" onInput= {changeIcon2}  className= "mainText">Ayana Zhen</span> 
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
        <Chain  className = "icon" id="chain1Icon"/><span className= "mainText"> NoCap-Finance</span>  
        <div id= "chain1CircleRight" className='circlesRight'> </div> 
        <div id= "chain1CircleLeft" className='circlesLeft'> </div> 
        <CheckIcon  className = "icon checkIcon" id="chain1CheckIcon"/>
      </div>

      </div>
      

      <div id= "chain2Section1">
     
      <div id = "chain2Section2" className = "segment">  
        <Chain  className = "icon" id="chain2Icon"/> <span className= "mainText" >Link Account</span>  
        <div id= "chain2CircleRight" className='circlesRight'> </div> 
        <div id= "chain2CircleLeft" className='circlesLeft'> </div> 
        <ChevronRight  className = "icon checkIcon" id="chevronRight1"/>
      </div>

      </div>
      

      <div id= "chain3Section1">
     
      <div id = "chain3Section2" className = "segment">  
        <Chain  className = "icon" id="chain3Icon"/> <span className= "mainText">Link Account</span>  
        <div id= "CircleRight" className='circlesRight'> </div> 
        <div id= "twitterCircleLeft" className='circlesLeft'> </div> 
        <ChevronRight  className = "icon checkIcon" id="chevronRight2"/>
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