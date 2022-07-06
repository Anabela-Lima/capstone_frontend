import './App.css';
import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import UserProfile from './components/UserProfile/UserProfile';
import UserSocial from './components/UserSocial/UserSocial';
import UserPrivacy from './components/UserPrivacy/UserPrivacy';
// import UserPrivacy from './components/UserPrivacy'
import PieChartHistory from './components/PieChartHistory/PieChartHistory';
import PieChartReport from './components/PieChartReport/PieChartReport';
import PieChartSplitPay from './components/PieChartSplitPay/PieChartSplitPay';
import Friends from './components/Friends/Friends';
import UserTrip from './components/UserTrip/UserTrip';
import MainCarousel from './components/MainCarousel/MainCarousel';
import { ReactComponent as UserIcon } from './components/assets/images/user.svg';
import { ReactComponent as HomeIcon } from './components/assets/images/home.svg';
import { ReactComponent as PlusIcon } from './components/assets/images/plus.svg';
import { ReactComponent as PieChartIcon } from './components/assets/images/pie-chart.svg';
import { ReactComponent as SearchIcon } from './components/assets/images/search.svg';
import Report from './components/Report/Report';
import Support from './components/Support/Support';

import axios from 'axios';


const App = () => {

  const mockLoggedInAsID = 9;

  const [userLoggedInDetails, setUserLoggedInDetails] = useState({});
  const [tripInformation, setTripInformation] = useState([]);
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8080/user/getUserByID?userID=${mockLoggedInAsID}`)
    .then(response => {
      const userInfo = response.data;
      setUserLoggedInDetails(userInfo);
    })
    .catch(err => console.log(err));
  }, []);

  useEffect(() => { 
    axios.get(`http://localhost:8080/user/tripsByUser?userID=${mockLoggedInAsID}`)
    .then(response => {
      const tripInfo = response.data;
      setTripInformation(tripInfo);
    })
    .catch(err => console.log(err));
  }, [tripInformation]);

  useEffect(() => {
    axios.get(`http://localhost:8080/friend/friendsByID?userID=${mockLoggedInAsID}`)
    .then(response => {
      const friendData = response.data;
      setFriendData(friendData);
    })
  }, [friendData]);

  // new trip form 
  const [tripTitle, setTripTitle] = useState("");
  const [tripCountry, setTripCountry] = useState("");
  const [tripDescription, setTripDescription] = useState("");
  const[startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleTripTitle = (event)  => setTripTitle(event.target.value);
  const handleTripCountry = (event) => setTripCountry(event.target.value);
  const handleTripDescription = (event) => setTripDescription(event.target.value);
  const handleStartDate = (event) => setStartDate(event.target.value);
  const handleEndDate = (event) => setEndDate(event.target.value);

  const createNewTrip = (event) => {
    // event.preventDefault();
    const options = {
      method: "POST",
    }

    fetch(`http://127.0.0.1:8080/user/trip/new?userId=${mockLoggedInAsID}&name=${tripTitle}&country=${tripCountry}&description=${tripDescription}&startDate=${startDate}%2000%3A00%3A00&endDate=${endDate}%2000%3A00%3A00`,
    options)
    .then((response) => {
      setTripTitle("");
      setTripCountry("");
      setTripDescription("");
      setStartDate(new Date());
      setEndDate(new Date());
    })
    .catch(err => console.log(err))
  };

  // Sets which nav button is selected
  const [isVisible, setIsVisible] = useState({
    user: true,
    home: false,
    plus: false,
    pieChart: false
  })

  // This controls the secondary nav bar's size- gray display sliding up
  const [visual, setVisual] = useState({
    slide: null,
    secondaryNavHeight: "75px"
  })

  // decides what shows up on the main screen
  const [userNavSelection, setUserNavSelection] = useState({
    userProfile: true,
    userSocial: false,
    userPrivacy: false,
    userTrip: false,
    piechartSplitPay: false,
    piechartReport: false,
    piechartHistory: false,
    searchUsers: false,
    searchSupport: false,
    searchReport: false,
    slide: "27px"
  })

  useEffect(() => {
    setVisual({
      slide: `${document.getElementById('user-icon').getBoundingClientRect().left - 50}px`,
      secondaryNavHeight: "75px"
    })
  }, [])

  const navHandleOnClick = (e) => {
    const parentElements = [
      e.target.parentElement.id,
      e.target.parentElement.parentElement.id
    ]

    const userIconLeft = document.getElementById('user-icon').getBoundingClientRect().left
    const homeIconLeft = document.getElementById('home-icon').getBoundingClientRect().left
    const elementDistance = homeIconLeft - userIconLeft

    switch(true) {
      case parentElements.includes('user-icon'):
        if (isVisible.user && !userNavSelection.userTrip) break;
        setVisual({
          slide: `${userIconLeft - 50}px`,
          secondaryNavHeight: "75px"
        })
        setIsVisible({
          user: true,
          home: false,
          plus: false,
          pieChart: false
        })
        setUserNavSelection({
          userProfile: true,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "27px"
        })
        break;
      case parentElements.includes('home-icon'):
        if (isVisible.home) break;
        setVisual({
          slide: `${userIconLeft + elementDistance - 50}px`,
          secondaryNavHeight: "75px"
        })
        setIsVisible({
          user: false,
          home: true,
          plus: false,
          pieChart: false
        })
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: true,
          searchSupport: false,
          searchReport: false,
          slide: '30px'
        })
        break;
      case parentElements.includes('plus-icon'):
        if (isVisible.plus) break;
        setVisual({
          slide: `${userIconLeft + elementDistance * 2 - 50}px`,
          secondaryNavHeight: "1575px"
        })
        setIsVisible({
          user: false,
          home: false,
          plus: true,
          pieChart: false
        })
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: userNavSelection.slide
        })
        break;
      case parentElements.includes('piechart-icon'):
        if (isVisible.pieChart) break;
        setVisual({
          slide: `${userIconLeft + elementDistance * 3 - 50}px`,
          secondaryNavHeight: '75px',
          secondaryNavWidth: "35%"
        })
        setIsVisible({
          user: false,
          home: false,
          plus: false,
          pieChart: true
        })
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: true,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "40px"
        })
        break;
      default:
        setVisual({
          slide: `${userIconLeft - 50}px`,
          secondaryNavHeight: "75px"
        })
        setIsVisible({
          user: true,
          home: false,
          plus: false,
          pieChart: false
        })
        setUserNavSelection({
          userProfile: true,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: userNavSelection.slide
        })
        break;
    }
  }

  // html for main nav bar

  const mainNav = () => {
    return (
      <>
        <div id="main-nav-section">
        <div id="just-another-container">
          <div id="main-nav-container">
            <div id="visual-selector" style={{left: visual.slide}}></div>
            <div id="main-nav-background"></div>
            <div id="main-nav-icons-container">
            <div className="moveable-container">
              <div 
                className={
                  isVisible.user ? 
                  "icon-container container-selected" : 
                  "icon-container"
                }
                id="user-icon"
                onClick={navHandleOnClick}
              >
                <UserIcon className={
                  isVisible.user ?
                  'main-nav-icon icon-selected' :
                  'main-nav-icon'
                }
                  id="user-icon-icon"
                />
              </div>
            </div>
            <div className='moveable-container'>
              <div 
                className={
                  isVisible.home ? 
                  "icon-container container-selected" : 
                  "icon-container"
                }
                id="home-icon"
                onClick={navHandleOnClick}
              >
                <SearchIcon className={
                  isVisible.home ? 
                  'main-nav-icon icon-selected' : 
                  'main-nav-icon'
                }/>
              </div>
            </div>
            <div className='moveable-container'>
              <div 
                className={
                  isVisible.plus ? 
                  "icon-container container-selected" : 
                  "icon-container"
                }
                id="plus-icon"
                onClick={navHandleOnClick}
              >
                <PlusIcon className={
                  isVisible.plus ? 
                  'main-nav-icon icon-selected' : 
                  'main-nav-icon'
                }/>
              </div>
            </div>
            <div className='moveable-container'>
              <div 
                className={
                  isVisible.pieChart ?
                  "icon-container container-selected" : 
                  "icon-container"
                }
                id="piechart-icon"
                onClick={navHandleOnClick}
              >
                <PieChartIcon className={
                  isVisible.pieChart ? 
                  'main-nav-icon icon-selected' : 
                  'main-nav-icon'
                }/>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </>
    )
  }


  const userSecondaryNavHandleOnClick = (e) => {
    switch(e.target.id){
      case "user-nav-social":
        if (userNavSelection.userSocial) break;
        setUserNavSelection({
          userProfile: false,
          userSocial: true,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "214px"
        })
        break;
      case "user-nav-privacy":
        if (userNavSelection.userPrivacy) break;
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: true,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "410px"
        })
        break;
      case "user-nav-profile":
        if (userNavSelection.userProfile) break;
        setUserNavSelection({
          userProfile: true,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "27px"
        })
        break;
      default:
        setUserNavSelection({
          userProfile: true,
          userSocial: false,  
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "27px"
        })
        break;
    }
  }

  const piechartSecondaryNavHandleOnClick = (e) => {
    switch(e.target.id) {
      case "piechart-nav-splitpay":
        if (userNavSelection.piechartSplitPay) break;
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: true,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "40px"
        })
        break;
      case "piechart-nav-history":
        if (userNavSelection.piechartHistory) break;
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: true,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "410px"
        })
        break;
      case "piechart-nav-report":
        if (userNavSelection.piechartReport) break;
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: true,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "214px"
        })
        break;
      default:
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: true,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: false,
          slide: "40px"
        })
        break;
    }
  }

  const searchSecondaryNavHandleOnClick = (e) => {
    switch(e.target.id){
      case "search-nav-search":
        if (userNavSelection.searchUsers) break;
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: true,
          searchSupport: false,
          searchReport: false,
          slide: "30px"
        })
        break;
      case "search-nav-report":
        if (userNavSelection.searchReport) break;
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: false,
          searchReport: true,
          slide: "214px"
        })
        break;
      case "search-nav-support":
        if (userNavSelection.searchSupport) break;
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: false,
          searchSupport: true,
          searchReport: false,
          slide: "410px"
        })
        break;
      default:
        setUserNavSelection({
          userProfile: false,
          userSocial: false,
          userPrivacy: false,
          userTrip: false,
          piechartSplitPay: false,
          piechartReport: false,
          piechartHistory: false,
          searchUsers: true,
          searchSupport: false,
          searchReport: false,
          slide: "40px"
        })
        break;
    }
  }

  const fadeTransition = {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    delay: 200,
    exitBeforeEnter: true
  }

  const userContentTransition = useTransition(isVisible, fadeTransition)
  const homeContentTranstion = useTransition(isVisible, fadeTransition)
  const plusContentTransition = useTransition(isVisible, fadeTransition)
  const pieChartContentTransition = useTransition(isVisible, fadeTransition)

  const secondaryNavContent = () => {
        return (  
          <>
            {
              userContentTransition((style, item) => {
                return item.user ? 
                <animated.div style={style} id="user-nav-content">
                  <div id="navigation-bar-selected" style={{left: userNavSelection.slide}}></div>
                    <div 
                      className="secondary-navigation-bar-text-container" 
                      onClick={userSecondaryNavHandleOnClick}
                    >
                      <span 
                        className="secondary-navigation-bar-text"
                        id="user-nav-profile" 
                      >Profile</span>
                    </div>
                    <div 
                      className="secondary-navigation-bar-text-container"
                      onClick={userSecondaryNavHandleOnClick}
                    >
                      <span 
                        className="secondary-navigation-bar-text" 
                        id="user-nav-social" 
                      >Social</span>
                    </div>
                    <div 
                      className="secondary-navigation-bar-text-container"
                      onClick={userSecondaryNavHandleOnClick}
                    >
                      <span 
                        className="secondary-navigation-bar-text" 
                        id="user-nav-privacy"
                      >Privacy</span>
                  </div>
                </animated.div> :
                ''
              })
            }
            {
              homeContentTranstion((style, item) => {
                return item.home ? 
                <animated.div style={style} id="user-nav-content">
                  <div id="navigation-bar-selected" style={{left: userNavSelection.slide}}></div>
                      <div 
                        className="secondary-navigation-bar-text-container" 
                        onClick={searchSecondaryNavHandleOnClick}
                      >
                        <span 
                          className="secondary-navigation-bar-text"
                          id="search-nav-search" 
                        >Search</span>
                      </div>
                      <div 
                        className="secondary-navigation-bar-text-container"
                        onClick={searchSecondaryNavHandleOnClick}
                      >
                        <span 
                          className="secondary-navigation-bar-text" 
                          id="search-nav-report" 
                        >Report</span>
                      </div>
                      <div 
                        className="secondary-navigation-bar-text-container"
                        onClick={searchSecondaryNavHandleOnClick}
                      >
                        <span 
                          className="secondary-navigation-bar-text" 
                          id="search-nav-support"
                        >Support</span>
                    </div>
                </animated.div> : 
                ''
              })
            }
            {
              plusContentTransition((style, item) => {
                return item.plus ? 
                <animated.div style={style} id="test-content">
                  <form onSubmit = {createNewTrip}>
                    <label>
                      Trip name: <input type="text" placeholder='Trip Title' onChange={handleTripTitle}
                      value={tripTitle}/>
                    </label>
                    <label>
                      Country: <input type="text" placeholder='Country' onChange={handleTripCountry}
                      value={tripCountry}/>
                    </label>
                    <label>
                      Trip Description: <input type="text" placeholder='Trip Description' onChange={handleTripDescription}
                      value={tripDescription}/>
                    </label>
                    <label>
                      Start Date: <input type="date"  onChange={handleStartDate}
                      value={startDate}/>
                    </label>
                    <label>
                      End Date: <input type="date" onChange={handleEndDate}
                      value={endDate}/> 
                    </label>
                  
                  <input type="submit" value="Add Trip!"/>
                  </form>
                </animated.div> : 
                ''
              })
            }
            {
              pieChartContentTransition((style, item) => {
                return item.pieChart ? 
                <animated.div style={style} id="user-nav-content">
                {/* <div id="navigation-bar-selected" style={{left: userNavSelection.slide}}></div> */}
                    {/* <div 
                      className="secondary-navigation-bar-text-container" 
                      onClick={piechartSecondaryNavHandleOnClick}
                    >
                      <span 
                        className="secondary-navigation-bar-text"
                        id="piechart-nav-splitpay" 
                      >SplitPay</span>
                    </div>
                    <div 
                      className="secondary-navigation-bar-text-container"
                      onClick={piechartSecondaryNavHandleOnClick}
                    >
                      <span 
                        className="secondary-navigation-bar-text" 
                        id="piechart-nav-report" 
                      >Report</span>
                    </div> */}
                    <div 
                      className="secondary-navigation-bar-text-container"
                      onClick={piechartSecondaryNavHandleOnClick}
                    >
                      <span 
                        className="secondary-navigation-bar-text" 
                        id="piechart-nav-history"
                      >History</span>
                  </div>
                </animated.div> : 
                ''
              })
            }
          </>
        )
    }


  const secondaryNav = () => {
    return (
      <>
        <div id="secondary-nav-section">
          <div id="secondary-nav-control-container" style={{height: visual.secondaryNavHeight}}>
            <div id="secondary-nav-background"></div>
            <div id="secondary-nav-content-container">
              {secondaryNavContent()}
            </div>
          </div>
        </div>
      </>
    )
  }

  const userProfileTransition = useTransition(userNavSelection, fadeTransition);
  const userSocialTransition = useTransition(userNavSelection, fadeTransition);
  const userPrivacyTransition = useTransition(userNavSelection, fadeTransition);
  const userTripTransition = useTransition(userNavSelection, fadeTransition);

  const piechartSplitPayTransition = useTransition(userNavSelection, fadeTransition);
  const piechartReportTransition = useTransition(userNavSelection, fadeTransition);
  const piechartHistoryTransition = useTransition(userNavSelection, fadeTransition);

  const searchUsersTransition = useTransition(userNavSelection, fadeTransition);
  const searchReportTransition = useTransition(userNavSelection, fadeTransition);
  const searchSupportTransition = useTransition(userNavSelection, fadeTransition);


  const [tripId, setTripId] = useState(null)

  const goToTripScreenFromUserProfile = (id) => {
    console.log("Go to Trip Screen From User Profile Pressed " + id);
    setTripId(id)
    setUserNavSelection({
      userProfile: false,
      userSocial: false,
      userPrivacy: false,
      userTrip: true,
      piechartSplitPay: false,
      piechartReport: false,
      piechartHistory: false,
      searchUsers: false,
      searchSupport: false,
      searchReport: false,
      slide: userNavSelection.slide
    })
    
  }

  const goToUserProfileFromTripScreen = () => {
    setUserNavSelection({
      userProfile: true,
      userSocial: false,
      userPrivacy: false,
      userTrip: false,
      piechartSplitPay: false,
      piechartReport: false,
      piechartHistory: false,
      searchUsers: false,
      searchSupport: false,
      searchReport: false,
      slide: userNavSelection.slide
    })
  }


  const mainContentSection = () => {

    /* 
        main-content-section --> sets the height section
        main-content-container --> sets the width
    */
    return (
      <>
        <div id="main-content-section">
          <div id="main-content-container">

          {/* USER SCREEN ------------------------------------------------------------------------------------------------ */}
          {
            userProfileTransition((style, item) => {
              return item.userProfile ? 
              <animated.div style={style} className="main-content-animated-div">
                <UserProfile 
                  goToTripScreenFromUserProfile={goToTripScreenFromUserProfile}
                  goToUserProfileFromTripScreen={goToUserProfileFromTripScreen}
                  userLoggedInDetails={userLoggedInDetails}
                  tripInformation={tripInformation}
                  friendData={friendData}
                />
              </animated.div> 
              : ''
            })
          }
          {
            userSocialTransition((style, item) => {
              return item.userSocial ? 
              <animated.div style={style} className="main-content-animated-div">
                  <UserSocial />
              </animated.div> 
              : ''
            })
          }
          {
            userPrivacyTransition((style, item) => {
              return item.userPrivacy ? 
              <animated.div style={style} className="main-content-animated-div">
                <UserPrivacy />
              </animated.div> 
              : ''
            })
          }
          {
            userTripTransition((style, item) => {
              return item.userTrip ? 
              <animated.div style={style} className="main-content-animated-div">
                <UserTrip 
                  tripId={tripId}
                  goToUserProfileFromTripScreen={goToUserProfileFromTripScreen}
                  />
              </animated.div> : ''
            })
          }
          {/* USER SCREEN ------------------------------------------------------------------------------------------------ */}


          {/* PIECHART SCREEN ------------------------------------------------------------------------------------------------ */}
          {/* {
            piechartSplitPayTransition((style, item) => {
              return item.piechartSplitPay ?
              <animated.div style={style} className="main-content-animated-div">
                <PieChartSplitPay />
              </animated.div> 
              : ''
            })
          }
          {
            piechartReportTransition((style, item) => {
              return item.piechartReport ? 
              <animated.div style={style} className="main-content-animated-div">
                <PieChartReport />
              </animated.div>
              : ''
            })
          } */}
          {
            piechartHistoryTransition((style, item) => {
              return item.piechartHistory ?
              <animated.div style={style} className="main-content-animated-div">
                <PieChartHistory 
                  trips = {tripInformation} 
                  user = {userLoggedInDetails}
                />
              </animated.div>
              : ''
            }) 
          }
          {/* PIECHART SCREEN ------------------------------------------------------------------------------------------------ */}

          {/* MAGNIFIER SCREEN ------------------------------------------------------------------------------------------------ */}
          {
            searchUsersTransition((style, item) => {
              return item.searchUsers ?
              <animated.div style={style} className="main-content-animated-div">
                <Friends />
              </animated.div> 
              : ''
            })
          }
          {
            searchReportTransition((style, item) => {
              return item.searchReport ?
              <animated.div style={style} className="main-content-animated-div">
                <Report />
              </animated.div> : ''
            }) 
          }
          {
            searchSupportTransition((style, item) => {
              return item.searchSupport ?
              <animated.div style={style} className="main-content-animate-div">
                <Support />
              </animated.div> : ''
            })
          }
          {/* MAGNIFIER SCREEN ------------------------------------------------------------------------------------------------ */}


          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* <MainCarousel /> */}
      {/* <MainPage /> */}
      {mainContentSection()}
      {secondaryNav()}
      {mainNav()}
    </>
  );
}

export default App;