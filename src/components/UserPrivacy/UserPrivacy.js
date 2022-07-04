import React from 'react'
import './UserPrivacy.css'
import { ReactComponent as TwitterIcon } from '../../components/assets/images/twitter (1).svg'

const UserPrivacy = () => {



  return (



    <section>


      <section id= "mainSection">

  
      <div id= "twitterSection">

     
      <div id = "twitterSection" className = "segment">  
        <TwitterIcon id="twitterIcon"/> @Ayana85 
        <div id= "twitterCircleRight" className='circlesRight'> </div> 
        <div id= "twitterCircleLeft" className='circlesLeft'> </div> 
      </div>


      </div>
      

      <div id = "instaSection"  className = "segment"> @Ayaa__ </div>

      <div id = "linkedInSection"  className = "segment"> Ayana Zhen </div>

      <div id = "LinkAccount1"  className = "segment"> Link Account </div>

      <div id = "LinkAccount2"  className = "segment"> Link Account </div>

      <div id = "LinkAccount3"  className = "segment"> Link Account </div>

      </section>



      <section id= "buttonSection">

        <button id= "saveBtn"> <span id= "saveBtnText"> Save </span> </button>
      
      </section>
     

    
    




 

    </section>





















  )
}

export default UserPrivacy