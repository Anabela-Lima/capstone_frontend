import './App.css';
import './ReactTransitions.css'
import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import MainPage from './components/MainPage/MainPage';
import MainCarousel from './components/MainCarousel/MainCarousel';
import { ReactComponent as UserIcon } from './components/assets/images/user.svg';
import { ReactComponent as HomeIcon } from './components/assets/images/home.svg';
import { ReactComponent as PlusIcon } from './components/assets/images/plus.svg';
import { ReactComponent as PieChartIcon } from './components/assets/images/pie-chart.svg';


const App = () => {

  const [isVisible, setIsVisible] = useState({
    user: true,
    home: false,
    plus: false,
    pieChart: false
  })

  const [visual, setVisual] = useState({
    slide: null,
    secondaryNavHeight: "75px"
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
    ];

    const userIconLeft = document.getElementById('user-icon').getBoundingClientRect().left;
    const homeIconLeft = document.getElementById('home-icon').getBoundingClientRect().left;
    const elementDistance = homeIconLeft - userIconLeft;

    switch(true) {
      case parentElements.includes('user-icon'):
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
        break;
      case parentElements.includes('home-icon'):
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
        break;
      case parentElements.includes('plus-icon'):
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
        break;
      case parentElements.includes('piechart-icon'):
        setVisual({
          slide: `${userIconLeft + elementDistance * 3 - 50}px`,
          secondaryNavHeight: '75px'
        })
        setIsVisible({
          user: false,
          home: false,
          plus: false,
          pieChart: true
        })
        break;
      default:
        break;
    }
  }

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
                }/>
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
                <HomeIcon className={
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

  const fadeTransition = {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
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
                <animated.div style={style} id="test-content">User Content</animated.div> :
                ''
              })
            }
            {
              homeContentTranstion((style, item) => {
                return item.home ? 
                <animated.div style={style} id="test-content">Home Content</animated.div> : 
                ''
              })
            }
            {
              plusContentTransition((style, item) => {
                return item.plus ? 
                <animated.div style={style} id="test-content">Plus Content</animated.div> : 
                ''
              })
            }
            {
              pieChartContentTransition((style, item) => {
                return item.pieChart ? 
                <animated.div style={style} id="test-content">PieChart Content</animated.div> : 
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

  return (
    <>
      {/* <MainCarousel /> */}
      <MainPage />
      {secondaryNav()}
      {mainNav()}
    </>
  );
}

export default App;