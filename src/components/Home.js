
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import {GiStripedSun} from "react-icons/gi";
import {FaPaperPlane} from "react-icons/fa";
import {MdWavingHand} from "react-icons/md";
import {HiLightBulb} from "react-icons/hi";
import {FaBookOpen} from "react-icons/fa";
import {BsFillHandThumbsUpFill} from "react-icons/bs";
import {GiThreeFriends} from "react-icons/gi";
import {AiFillThunderbolt} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {MdMarkEmailRead} from "react-icons/md";
import {AiFillInstagram} from "react-icons/ai";
import {BsFillTelephoneForwardFill} from "react-icons/bs";

const Home = () => {

return(
    <>
    <header>
        <NavBar />
    </header>
    <main id="main">
        <div>
            <p id='head1' className="homeTitle">Hello <MdWavingHand/></p>
            <p id='head2' className="homeTitle">Need to get away? <FaPaperPlane/></p>
            <p id='head3' className="homeTitle">Need some inspiration? <HiLightBulb/></p>
            <p id='head4' className="homeTitle">You've come to the right place! <FaBookOpen/></p>
            <p id='head5' className="homeTitle">Welcome to NoCap Travel <GiStripedSun/></p>
        </div>
        <div id="homePara1">
            <h1 className="homeHeader">Trip planning made easy<BsFillHandThumbsUpFill/></h1>
            <p className="p">We love travel, and we want you to, too! That's why we've streamlined a way for you and your friends to seamlessly plan your trips together, with a minimum of fuss.</p>
        </div>
        <div id="homePara2">
            <h1 className="homeHeader">Better Together <GiThreeFriends/></h1>
            <p className="p">Add your friends to your trip planner to put an end to needless facetimes or facebook groups trying to plan your dream trip</p>
        </div>
        <div id="homePara3">
            <h1 className="homeHeader">Low Cost, Low Maintanence <AiFillThunderbolt/></h1>
            <p className="p">Our cutting-edge database and low-cost options has taken the guesswork and late-nights out of planning - we've done that for you already. Trips ready-made, and ready to be delivered. Are you ready?</p>
        </div>
    </main>
    <hr/>
    <footer id="footer">
        <ul className="helpline">
            <li className="li"> <strong>Help and Support</strong></li>
            <li className="li"> Call: 0800 1110 66 <BsFillTelephoneForwardFill/></li>
            <li className="li">nocaptravel@outlook.co.uk <MdMarkEmailRead/></li>
        </ul>

        <ul className="socials">
            <li className="li"><strong>Social Bois</strong></li>
            <li className="li">@nocaptraveluk <BsTwitter/></li>
            <li className="li">No Cap Travel <BsFacebook/></li>
            <li className="li">@nocap_travel <AiFillInstagram/></li>
        </ul>

            <ul className="Legalstuff"> 
                    <li className="li"><strong>Terms and conditions</strong></li>
                    <li className="li"> Privacy Policy </li>
                    <li className="li"> Cookie Settings </li>
                    <li className="li"> Legal </li>
            </ul>

    </footer>
        <div id="footer">
            <p className="copyrights"> 
                © 2022 NoCap Travel Ltd. In no way shape or form is this a real company. All rights reserved. 
            </p>
        </div>
    </>
);

}

export default Home;