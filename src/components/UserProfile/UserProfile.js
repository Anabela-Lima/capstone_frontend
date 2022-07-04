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

const UserProfile = ({goToTripScreenFromUserProfile, goToUserProfileFromTripScreen}) => {


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
      attendees: [1,2,3,4,5],
      activities: [
        {
          day: 1,
          name: "Mouton Noir Brunch",
          price: 235.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0f/14/c0/ed/roesti.jpg",
          attendees: [1,2,3,4,5],
        },
        {
          day: 1,
          name: "3 Days Desert Tou",
          price: 400.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/ec/e0/09.jpg",
          attendees: [1,2,3,4]
        },
        {  
          day: 1,
          name: "Alas Mountains Hot Air Balloon",
          price: 648.00,
          category: "Physical",
          imgUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/71/ea/a0.jpg",
          attendees: [1,2,3,4,6],
        },
        { day: 1,
          name: "Agadir Day Trip To Legzira ",
          price: 350.00,
          category: "Physical",
          imgUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/d2/54.jpg",
          attendees: [1,2,3,4,5,6,8,10],
        },
        {
          day: 2,
          name: "Marrakech: Private Guided Half-Day City Tours",
          price: 585.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e8/d3/84.jpg",
          attendees: [1,2,3,5,7]
        },
        {
          day: 2,
          name: "Libzar",
          price: 200.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/07/0a/87/c9/libzar.jp",
          attendees: [1, 2,3,5,7,8,10]
        },
        {
          day: 2,
          name: "Desert Agafay and Atlas Mountains & Camel ride Day",
          price: 900.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/71/23/18.jpg",
          attendees: [1,2,3,4,5,6,7,9,10]
        }



      ]
    },
    {
      id: 2,
      name: "Lads' Trip",
      country: "Italy",
      date: "2022-07-30",
      imgUrl: "https://www.mickeyshannon.com/photos/maroon-bells-magic.jpg",
      attendees: [1,2,3,4,5,6,7,8,9,10],
      activities: [


        {
          day: 1,
          name: "Pisa, Siena and San Gimignano Day Trip ",
          price: 250.45,
          category: "Physical",
          imgUrl: "https://images.musement.com/default/0001/20/pisa-siena-san-gimignano-and-chianti-day-tour-in-tuscany-with-typical-lunch_header-19719.jpeg?q=50&fit=crop&auto=format&w=1024&h=400",
          attendees: [1,2,3,4,6,9]
        }


        ,{
          
          day: 2,
          name: "La Forchetta d´Oro",
          price: 648.00,
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1c/2d/45/81/la-forchetta-d-oro.jpg",
          category: "Food",
          attendees: [1,9,3,7,5,6],

        }

        ,{
          
          day: 2,
          name: "Ambrosia Rooftop Restaurant & Bar",
          price: 350.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/04/02/75/3f/ambrosia.jpg",
          attendees: [1,9,4,7,5,6,10,],

        }

        ,{
          
          day: 3,
          name: "VITA NOVA",
          price: 150.50,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/16/ba/3e/e7/esterno.jpg",
          attendees: [1,2,3,4,5,6,7],
          
        }
        
        ,{
          day: 3,
          name: "Tour Tuscan Hill Towns by Bicycle ",
          price:  599.99,
          category: "Physical",
          imgUrl: "https://cdn.thecrazytourist.com/wp-content/uploads/2017/08/Valley-of-the-Temples.jpg",
          attendees: [1,2,3,4,6,9,10]
        }

        ,{
          day: 3,
          name: "Tour Tuscan Hill Towns by Bicycle ",
          price: 150,
          category: "Physical",
          imgUrl: "https://www.bikeadventures.co.uk/media/2014/10/tuscany.jpg",
          attendees: [1,2,3,4,6,9,10]
        }
        

        ,{
          day: 3,
          name: "Tour Tuscan Hill Towns by Bicycle ",
          price: 150,
          category: "Physical",
          imgUrl: "https://www.bikeadventures.co.uk/media/2014/10/tuscany.jpg",
          attendees: [1,2,3,4,6,9,10]
        }
       
      ]
    },
    //------------------
    {
      id: 3,
      name: "Work Trip",
      country: "Iceland",
      date: "2022-08-05",
      imgUrl: "https://www.mickeyshannon.com/photos/summit-county-sunrise.jpg",
      attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
      activities: [
        {
          day: 1,
          name: "Golden Circle & Glacier Snowmobiling Day Trip from Reykjavik",
          price: 1000.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/70/1c/17.jpg",
          attendees: [1,2,3,4,5,6,10,21,18,15,13],
        },
        {
          day: 1,
          name: "Ice Cave by Katla Volcano Super Jeep Tour from Vik",
          price: 1800.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/c4/81/53.jpg",
          attendees: [1,2,3,4,6,8,10,12,16,19,20,21]
        },
       
        {
          day: 2,
          name: "2hr Midnight Sun ATV Adventure from Reykjavik",
          price: 4000.00,
          category: "",
          imgUrl: "",
          attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
        },
        {
          day: 2,
          name: "Tanginn",
          price: 900.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0f/61/d1/54/tanginn.jpg",
          attendees: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20]
        },
        {
          day: 2,
          name: "Pakkhus Restaurant",
          price: 950.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1a/02/37/8c/pakkhus-restaurant.jpg",
          attendees: [1,2,3,4,5,6,10,11,12,13,14,15,16,17,19]
        }

       ,{
          day: 2,
          name: "Combo: Active Volcano Guided Geldingadalur Hike and the Reykjanes Peninsula",
          price: 3000.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/e4/38/8c.jpg",
          attendees: [1, 2,3,4,5,6,7,8,10,11,15,17,19,20]
        },
        {
          day: 3,
          name: "Blue Lagoon & Reykjavík Sightseeing",
          price: 3800.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/25/01/df.jpg",
          attendees: [1,2,3,6,10,11]
        }

        ,{
          day: 3,
          name: "Private G tour by jeep",
          price: 800,
          category: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/93/7a/f2.jpg",
          attendees: [1,2,3,4,5,6,7]
        },

        {
          day: 3,
          name: " Ultimate Iceland Ring Road Private Tour",
          price: 9000.00,
          category: "Travel",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/84/f1/ac.jpg",
          attendees: [1,2,3,4,5,6,7,8,9,10,14,17]
        }
      ]   
    },

    //-----------------------------
    {
      id: 4,
      name: "More Trips",
      country: "Japan",
      date: "2022-09-26",
      imgUrl: "https://www.mickeyshannon.com/photos/mount-sneffels-majesty.jpg",
      attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20],
      activities: [
        {
          day: 1,
          name: "Han no Daidokoro Kadochika",
          price: 730,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/12/cf/f3/47/beef-on-the-bbq.jpg",
          attendees: [1,2,3,4,5,6,10,21,18,15,13],
        },
        {
          day: 1,
          name: "Tokyo Private Chauffeur Driving Sightseeing Tour - English Speaking Driver",
          price: 1200.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/0e/b9/79.jpg",
          attendees: [1,2,3,4,6,8,10,12,16,19,20,21]
        },
       
        {
          day: 2,
          name: "Geisha Experience at Chaya in Tokyo",
          price: 1000.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/81/30/0e.jpg",
          attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
        },
        {
          day: 2,
          name: "Gyopao Gyoza Shinjuku",
          price: 780.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1b/e3/b4/a1/caption.jpg",
          attendees: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        },
        {
          day: 2,
          name: "",
          price: 950.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-o/0d/53/b6/45/bistro.jpg",
          attendees: [1,2,3,4,5,6,10,11,12,13,14,15,16,17,19]
        }

       ,{
          day: 2,
          name: "Cherry Blossom Private Tour",
          price: 382.10,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/b5/26/25.jpg",
          attendees: [1, 2,3,4,5,6,7,8,10,11,15,17,19,20]
        },
        {
          day: 3,
          name: "Japanese Whisky Tasting in Tokyo",
          price: 580.90,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/0d/8d/44.jpg",
          attendees: [1,2,3,6,10,11,15,19,21]
        }

        ,{
          day: 3,
          name: "Ebisu Local Food Tour: Shibuya's Most Popular Neighborhood",
          price: 830.00,
          category: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/22/bf/b6.jpg",
          attendees: [1,2,3,4,5,6,7]
        },

        {
          day: 3,
          name: "Meiji Shrine Imperial Garden",
          price: 1000.00,
          category: "Travel",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/44/05/cd/photo6jpg.jpg?w=1200&h=1200&s=1",
          attendees: [1,2,3,4,5,6,7,8,9,10,14,17]
        }

      ]

    },




    //--------

    {
      id: 5,
      name: "Yay Trips",
      country: "India",
      date: "2022-12-21",
      imgUrl: "https://www.mickeyshannon.com/photos/light-on-the-cliffs-of-the-napali-coast-kauai.jpg",
      attendees: [1,2,3,4],
      activities: [
        {
          day: 1,
          name: "Tsukiji Hongwanji Temple",
          price: 200.00,
          category: "Entertainment",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/1b/97/75/bon-odori-at-tsukiji.jpg?w=600&h=-1&s=1",
          attendees: [1,2,3,4,5,6,10,21,],
        },
        {
          day: 1,
          name: "India Gate",
          price: 1800.00,
          category: "Physical",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/dc/5a/af/india-gate-a-beautiful.jpg?w=1200&h=-1&s=1",
          attendees: [1,2,3,4,6,8,10,12]
        },
       
        {
          day: 2,
          name: "Chi Ni",
          price: 1000.00,
          category: "",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/9d/52/1d/dine-at-chi-ni-for-an.jpg",
          attendees: [1,2,3,4,5,6,7,8,9,10,11]
        },
        {
          day: 2,
          name: "Tanginn",
          price: 900.00,
          category: "Food",
          imgUrl: "",
          attendees: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20]
        },
        {
          day: 2,
          name: "",
          price: 950.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/14/2d/91/33/club-honk.jpg",
          attendees: [1,2,3,4,5,6,10,11,12,13,14,15,16,17,19]
        }

       ,{
          day: 2,
          name: "Honk",
          price: 3000.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/14/2d/91/33/club-honk.jpg",
          attendees: [1, 2,3,4,5,6,7,8,10,11,15,17,19,20]
        },
        {
          day: 3,
          name: "DLF Promenade Mall",
          price: 2800.00,
          category: "Other",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c9/ca/0e/dlf-promenade-mall.jpg?w=1200&h=-1&s=1",
          attendees: [1,2,3,6,10,21]
        }

        ,{
          day: 3,
          name: "All Inclusive Taj Mahal & Agra Fort Tour from Delhi by Express Train",
          price: 800,
          category: "Travel",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/57/b2/e2.jpg",
          attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        },

        {
          day: 3,
          name: "Private Day Tour to Haridwar and Rishikesh from Delhi",
          price: 800.00,
          category: "Travel",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/c6/5c/2f.jpg",
          attendees: [2,3,5,6,7,8,9,10]
        }
      ]   
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
      const id = data.id;
      return (
          <div 
            className="trip-section" 
            key={data.id}
          >
            <div className="trip-indicator">-</div>
            <div 
              className="trip-card"
              onClick={() => goToTripScreenFromUserProfile(id)}
            >
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