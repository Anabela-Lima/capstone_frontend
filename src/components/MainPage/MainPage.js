import React from 'react'
import './MainPage.css'
import mainProfileImage from '../assets/images/main-profile-image.png'
import { ReactComponent as UserIcon } from '../../components/assets/images/user.svg'

const MainPage = () => {

  const [slide, setSlide] = React.useState({
    text: "Social",
    left: "335px"
  });


  const moveSlider = (e) => {
      switch(e.target.id) {
        case "nav-profile":
          setSlide({
            text: "Profile",
            left: "40px"
          });
          break;
        case "nav-privacy":
          setSlide({
            left: "640px",
            text: "Privacy"
          });
          break;
        case "nav-social":
          setSlide({
            left: "335px",
            text: "Social"
          });
          break;
        default:
          break;
      }
  }


  return (
    <>
      <div id="main-page-container"> 
        {/* <div id="main-page-navigation-container">
            <div id="main-page-navigation-bar"></div>
            <div className="navigation-bar-text-container">
              <span 
                className="navigation-bar-text"
                id="nav-profile" 
                onClick={moveSlider}
              >Profile</span>
              <span 
                className="navigation-bar-text" 
                id="nav-social" 
                onClick={moveSlider}
              >Social</span>
              <span 
                className="navigation-bar-text" 
                id="nav-privacy"
                onClick={moveSlider}
              >Privacy</span>
            </div>
            <div id="navigation-bar-selected" style={{left: slide.left}}>
              <span id="navigation-bar-selected-text">{slide.text}</span>
            </div>
            <div id="user-profile-container">
              <div id="green-circle"></div>
              <div id="blue-circle"></div>
              <div id="magenta-circle"></div>
              <div id="user-profile-front-glass">
                <div id="user-profile-add-button">
                    <UserIcon className="user-profile-user-icon"/>
                    <span id="user-profile-add-button-text">Add +</span>
                </div>
                <div id="user-profile-picture-container">
                  <div id="user-profile-picture-ring"></div>
                  <img src={mainProfileImage} alt="" id="user-profile-image" />
                </div>
                <div id="user-profile-name">Ayana Zhen</div>
                <div id="user-profile-location">London, UK</div>
              </div>
              <div id="user-profile-status-container">
                <div id="user-profile-status-background"></div>
                <div id="user-profile-status-text-container">
                  <span id="user-profile-status-text"> 
                    Nothing feels as good as going from a place you 
                    love to a place youv’e never been #CatchMeIfYouCan
                  </span>
                </div>
              </div>
              <div id="user-profile-buttons-container">
                  <div className="user-profile-button">
                    <div className="user-profile-button-text-container">
                      <span className="user-profile-button-text">Activity</span>
                    </div>
                  </div>
                  <div className="user-profile-button">
                    <div className="user-profile-button-text-container">                
                      <span className="user-profile-button-text">Media</span>
                    </div>
                  </div>
                  <div className="user-profile-button">
                    <div className="user-profile-button-text-container">
                      <span className="user-profile-button-text">Friends</span>
                    </div>
                  </div>
              </div>
            </div>
        </div> */}
      </div>
    </>
  )
}

export default MainPage