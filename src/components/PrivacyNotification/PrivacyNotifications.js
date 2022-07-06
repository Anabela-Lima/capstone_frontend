/* Notification Component JS */

import './PrivacyNotifications.css'



const PrivacyNotifications = ({notificationText, textBody, notificationText2, textBody2}) => {    //using curly brackets to destructure 

    return (
        <>
        <div id = "popupBox"> 
        <span className="popupbox-text">
        {notificationText} 
        </span>
        <span  className="popupbox-text">
        {textBody}
        </span>
        </div>
        
        
        </>
    )


    
}

export default PrivacyNotifications;