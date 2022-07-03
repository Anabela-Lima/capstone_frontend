import React, { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring';
import './UserProfile.css'
import './UserProfileActivity.css'
import mainProfileImage from '../assets/images/main-profile-image.png'
import { ReactComponent as UserIcon } from '../../components/assets/images/user.svg'
import { ReactComponent as SearchIcon } from '../../components/assets/images/search.svg'
import { ReactComponent as CreditCardIcon } from '../../components/assets/images/credit-card.svg'
import { ReactComponent as UserMinusIcon } from '../../components/assets/images/user-minus.svg'
import { ReactComponent as MessageSquareIcon } from '../../components/assets/images/message-square.svg' 

const UserProfile = () => {

  // const [slide, setSlide] = React.useState({
  //   text: "Social",
  //   left: "335px"
  // });


  // const moveSlider = (e) => {
  //     switch(e.target.id) {
  //       case "nav-profile":
  //         setSlide({
  //           text: "Profile",
  //           left: "40px"
  //         });
  //         break;
  //       case "nav-privacy":
  //         setSlide({
  //           left: "640px",
  //           text: "Privacy"
  //         });
  //         break;
  //       case "nav-social":
  //         setSlide({
  //           left: "335px",
  //           text: "Social"
  //         });
  //         break;
  //       default:
  //         break;
  //     }
  // }

  const [tripData, setTripData] = useState([]);
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    // Get trip and friend data here

    setTripData([])

    setFriendData([])

  }, [])

  const mockTripData = [
    {
      id: 1,
      name: "Girls' Trip",
      country: "Morocco",
      date: "2022-06-30",
      imgUrl: "https://www.mickeyshannon.com/photos/moraine-lake-sunrise-brilliance.jpg",
      attendees: [1,2,3,4,5]
    },
    {
      id: 2,
      name: "Lads' Trip",
      country: "Italy",
      date: "2022-07-30",
      imgUrl: "https://www.mickeyshannon.com/photos/maroon-bells-magic.jpg",
      attendees: [1,2,3,4,5,6,7,8,9,10]
    },
    {
      id: 3,
      name: "Work Trip",
      country: "Iceland",
      date: "2022-08-05",
      imgUrl: "https://www.mickeyshannon.com/photos/summit-county-sunrise.jpg",
      attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    },
    {
      id: 4,
      name: "More Trips",
      country: "Japan",
      date: "2022-09-26",
      imgUrl: "https://www.mickeyshannon.com/photos/mount-sneffels-majesty.jpg",
      attendees: [1, 2]
    },
    {
      id: 5,
      name: "Yay Trips",
      country: "India",
      date: "2022-12-21",
      imgUrl: "https://www.mickeyshannon.com/photos/light-on-the-cliffs-of-the-napali-coast-kauai.jpg",
      attendees: [1,2,3,4]
    }
  ]

  const mockFriendData = [
    {
      firstname: 'Daniel',
      lastname: 'Davis',
      imgUrl: "",
    },
    {
      firstname: "Jack",
      lastname: 'Feathers',
      imgUrl: "",
    },
    {
      firstname: "Summer",
      lastname: "Halts",
      imgUrl: "",
    },
    {
      firstname: "Jess",
      lastname: "Bevers",
      imgUrl: "",
    },
    {
      firstname: "Jonathan",
      lastname: "Welsh",
      imgUrl: ""
    },
    {
      firstname: "Mary",
      lastname: "Thomas",
      imgUrl: ""
    },
    {
      firstname: "Extra",
      lastname: "Person",
      imgUrl: ""
    },
    {
      firstname: "Extra",
      lastname: "Person",
      imgUrl: ""
    }
  ]

  const [isVisible, setIsVisible] = useState({
    activity: true,
    media: false,
    friends: false
  })

  const fadeTransition = {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    exitBeforeEnter: true
  }

  const userProfileActivityTransition = useTransition(isVisible, fadeTransition)
  const userProfileMediaTransition = useTransition(isVisible, fadeTransition)
  const userProfileFriendsTransition = useTransition(isVisible, fadeTransition)

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

  const tripCardsList = () => {
    const tripList = mockTripData.map(data => {
      return (
          <div className="trip-section" key={data.id}>
            <div className="trip-indicator">-</div>
            <div className="trip-card">
              <div className="trip-card-background"></div>
              <div className="trip-card-layout">
                <div className="trip-card-layout-top">
                  <div className="trip-card-layout-top-left">
                    <div className="trip-image-container">
                      <img 
                        src={data.imgUrl}
                        alt="" 
                        className="trip-image"
                      />
                    </div>
                  </div>
                  <div className="trip-card-layout-top-right">
                    <span className="trip-title">{data.name}</span>
                    <span className="trip-country">{data.country}</span>
                  </div>
                </div>
                <div className="trip-card-layout-bottom">
                  <div className="trip-card-layout-bottom-left">
                    {attendeeIconsGenerator(data.attendees)}
                  </div>
                  <div className="trip-card-layout-bottom-right">
                    {data.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    })
    return (
      <>
        {tripList}
      </>
    );
  }


  const friendsCardsList = () => {

    const friendsList = mockFriendData.map(data => {
      return (
        <div className="friend-section">
          <div className="friend-section-background"></div>
          <div className="friend-section-top-content">
            <div className="friend-section-friend-image-container">
              <img src="" alt="" className="friend-section-friend-image"/>
            </div>
            <div className="friend-section-friend-name">{data.firstname} {data.lastname}</div>
            <div className="friend-section-friend-buttons">
              <div className="friend-section-button-text-container">
                <span className="friend-section-button-text">Pay</span>
                <div className="friend-section-button-container">
                  <button className="friend-section-button"></button>
                  <CreditCardIcon className="friend-section-button-icon"/>
                </div>
              </div>
              <div className="friend-section-button-text-container">
                <span className="friend-section-button-text">Chat</span>
                <div className="friend-section-button-container">
                  <button className="friend-section-button"></button>
                  <MessageSquareIcon className="friend-section-button-icon"/>
                </div>
              </div>
              <div className="friend-section-button-text-container">
                <span className="friend-section-button-text">Remove</span>
                <div className="friend-section-button-container">
                  <button className="friend-section-button"></button>
                  <UserMinusIcon className="friend-section-button-icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <>
        {friendsList}
      </>
    )
  }


  const userProfileSwitchableContent = () => {
    return (
      <>
      {
        userProfileActivityTransition((style, item) => {
          return item.activity ? 
            <animated.div id="user-profile-activity-content-background" style={style}>
              <div id="trip-list">
                {tripCardsList()}
              </div>
            </animated.div> :
            ''
        })
      }
      {
        userProfileMediaTransition((style, item) => {
          return item.media ? 
            <animated.div id="user-profile-media-content-background" style={style}>
              MEDIA
            </animated.div> :
            ''
        })
      }
      {
        userProfileFriendsTransition((style, item) => {
          return item.friends ? 
            <animated.div id="user-profile-friends-content-background" style={style}>
              <div id="search-friends-input-container">
                <input type="text" id="search-friends" placeholder="Search friends..."/>
                <div id="search-friends-icon-container">
                    <SearchIcon id="search-friends-search-icon"/>
                </div>
              </div>
              <div id="friend-list">
                {friendsCardsList()}
              </div>
            </animated.div> :
            ''
        })
      }
      </>
    )
  }


  const userProfileHandleOnClick = (e) => {
    e.preventDefault();
    const name = e.target.attributes.buttonname.value;
    switch(name) {
      case "user-profile-activity-btn":
        if (isVisible.activity) break;
        setIsVisible({
          activity: true,
          media: false,
          friends: false
        })
        break;
      case "user-profile-media-btn":
        if (isVisible.media) break;
        setIsVisible({
          activity: false,
          media: true,
          friends: false
        })
        break;
      case "user-profile-friends-btn":
        if (isVisible.friends) break;
        setIsVisible({
          activity: false,
          media: false,
          friends: true
        })
        break;
      default:
        setIsVisible({
          activity: true,
          media: false,
          friends: false
        })
        break;
    }
  }


  return (
    <>
      <div id="main-page-container"> 
        {/* <div id="main-page-navigation-container"></div> */}
            {/* <div id="main-page-navigation-bar"></div>
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
            </div> */}


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
              <button 
                className="user-profile-button" 
                onClick={userProfileHandleOnClick}
                buttonname="user-profile-activity-btn"
              >
                <span 
                  className="user-profile-button-text"
                  buttonname="user-profile-activity-btn"
                >Activity</span>
              </button>
              <button 
                className="user-profile-button"
                onClick={userProfileHandleOnClick}
                buttonname="user-profile-media-btn"
                >
                  <span 
                    className="user-profile-button-text"
                    buttonname="user-profile-media-btn"
                  >Media</span>
              </button>
              <button 
                className="user-profile-button"
                onClick={userProfileHandleOnClick}
                buttonname="user-profile-friends-btn"
              >
                  <span 
                    className="user-profile-button-text"
                    buttonname="user-profile-friends-btn"
                  >Friends</span>
              </button>
          </div>
        </div>


        <div id="user-profile-content-container">
            {userProfileSwitchableContent()}
        </div>


      </div>
    </>
  )
}

export default UserProfile