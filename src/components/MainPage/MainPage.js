import React from 'react'
import './MainPage.css'

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
        <div id="main-page-navigation-container">
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
              <div id="user-profile-front-glass"></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MainPage