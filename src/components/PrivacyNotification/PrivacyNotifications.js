/* Notification Component JS */

import './PrivacyNotifications.css'



const PrivacyNotifications = ({notificationText}) => {    //using curly brackets to destructure 

    return (
        <>
        <div id = "popupBox"> {notificationText} </div>
        
        </>
    )


    
}

export default PrivacyNotifications;