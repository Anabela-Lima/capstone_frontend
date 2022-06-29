
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import {GiStripedSun} from "react-icons/gi";
import {FaPaperPlane} from "react-icons/fa";
import {MdWavingHand} from "react-icons/md";
import {HiLightBulb} from "react-icons/hi";
import {FaBookOpen} from "react-icons/fa";

const Home = () => {

return(
    <>
    <header>
        <NavBar />
    </header>
    <main>
        <div>
            <p id='head1' className="header">Hello <MdWavingHand/></p>
            <p id='head2' className="header">Need to get away? <FaPaperPlane/></p>
            <p id='head3' className="header">Need some inspiration? <HiLightBulb/></p>
            <p id='head4' className="header">You've come to the right place! <FaBookOpen/></p>
            <p id='head5' className="header">Welcome to NoCap Travel <GiStripedSun/></p>
        </div>
    </main>
    </>
);

}

export default Home;