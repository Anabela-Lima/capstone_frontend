
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideShow.css'

// array of pics
const slideshowPics = [

    {
        url: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        // caption: 'Slide1'
        
    }

    ,{
        url: ' https://images.unsplash.com/photo-1544551763-6e45ce662425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        // caption: 'Slide2'
        
    }
    ,
    {
        url: 'https://images.twinkl.co.uk/tr/raw/upload/u/ux/usawiki-fish-clownfish_ver_1.jpg'
        // caption: 'Slide3'
        
    }
    ,{
      url: 'https://images.theconversation.com/files/150289/original/image-20161215-13663-1o37rfi.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'
      // caption: 'Slide3'
      
    }

    ,{
      url: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/israel-scuba-diving-cover.jpg'
      // caption: 'Slide3'
      
    }


    // ,{
    //   url: 'https://greenfins.net/wp-content/uploads/2020/10/Impact-Of-Scuba-Diving-On-A-Coral-Reef-Dos-Donts-Green-Living-Zone-2.jpg'
    //   // caption: 'Slide3'
      
    // }


  
];

// the component 

const MySlideshow = () => {

    return (

      <section>
      <div id= "memoriesTitle"></div>
      <div className="slide-container" style={{width:'870px'}} >
        <Slide>
         {slideshowPics.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              {/* <div style={{backgroundImage: `url(${slideImage.url})`}}> */}
              <div>
                <span>{slideImage.caption}</span>
                <img id= "slideImages" width= "900"  height= "700" src={slideImage.url} alt="" />
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </section>
    )
}


export default MySlideshow;