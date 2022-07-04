import { Link } from "react-router-dom";
import React from 'react';
import "./Landing.css";
import backgroundIslandImage from './../assets/images/start_screen_background.png';
import gosplitlogo from './../assets/images/gosplitlogo.png';

const Landing = () => {



    return(
      <>
        <div id="welcome-carousel-container">

          <img src={backgroundIslandImage} alt="" id="background-img-welcome"/>

            <div id="landing-top-container">
              <div>
                <img src={gosplitlogo} alt="" id="gosplit-logo"/>
              </div>

                <p id='head1' class='header'> Plan</p>
                <p id='head2' class='header'> Budget</p>
                <p id='head3' class='header'> Dream</p>
                <p id='head4' class='header'> Travel</p>
                <p id='head5' class='header'> Go-Split</p>

            </div>

            <div class="landing-bottom-container">
              <div id="paragraph1">
              <p>Whether it's Coast or Canyon, Woods or Water, The Andes or the Arctic, Familiar or Far Far Away... We've got something for you!</p>
              </div>
            </div>

          <Link to="/LogIn">
            <button className="welcomeButton">Get Started</button>
          </Link>
          

        </div>

      </>

    )
}

export default Landing;