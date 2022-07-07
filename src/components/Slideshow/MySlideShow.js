
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideShow.css'

// array of pics
const slideshowPics = [

    {
        url: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        caption: `Mark's first scuba sesh `
        
    }

    ,{
        url: ' https://images.unsplash.com/photo-1544551763-6e45ce662425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        caption: 'Amy vs scary fish'
        
    }
    ,
    {
        url: 'https://images.twinkl.co.uk/tr/raw/upload/u/ux/usawiki-fish-clownfish_ver_1.jpg',
        caption: 'We found Nemo'
        
    }
    ,{
      url: 'https://images.theconversation.com/files/150289/original/image-20161215-13663-1o37rfi.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
      caption: 'Soo cute'
      
    }

    ,{
      url: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/israel-scuba-diving-cover.jpg',
      caption: 'Cutest Turtle'
      
    }

  
];

// the component 

const MySlideshow = () => {

    return (

      <section>
      <div id= "memoriesTitle"><span id ="memoriesText"> Memories From: Work Crew</span></div>
      <div className="slide-container" style={{width:'870px'}} >
        <Slide>
         {slideshowPics.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div>
               
                <img id= "slideImages" width= "900"  height= "700" src={slideImage.url} alt="" />
                 <span id ="caption">{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </section>
    )
}


export default MySlideshow;