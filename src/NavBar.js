import { Link } from "react-router-dom";
import {AiOutlineInfoCircle} from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import {AiOutlineLogin} from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import { BiTrip } from "react-icons/bi";

function NavBar() {

    return(
        <div id="navBar">
            <Link to="/">
            <button className="buttonDesign" type="submit">Home<AiFillHome/></button>
            </Link>
            <Link to="/About">
            <button className="buttonDesign" type="submit">About<AiOutlineInfoCircle/></button>
            </Link>
            <Link to="/Trips">
            <button className="buttonDesign" type="submit">Trips<BiTrip/></button>
            </Link>
            <Link to="/Contact">
            <button className="buttonDesign" type="submit">Contact <BsFillChatLeftTextFill/></button> 
            </Link>
            <Link to="/LogIn">
            <button className="buttonDesign" type="submit">Log in <AiOutlineLogin/></button>
            </Link>
            <Link to="/Basket">
            <button className="buttonDesign" type="submit">Basket <BsFillBasket2Fill/></button>
            </Link>
        </div>
    );
}


export default NavBar;