import { Link } from "react-router-dom";
import {FiMenu} from "react-icons/fi";
import { BsPlusCircleFill } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import {FiUser} from "react-icons/fi";
import {BiHomeAlt} from "react-icons/bi";
import { BiTrip } from "react-icons/bi";
import styled from 'styled-components';

function NavBar() {


    return(
        <>
            <div className="navBar">
                <Link to="/Trips">
                <button className="buttonMenu" type="submit"><FiMenu/></button>
                </Link>
                <Link to="/Friends">
                <button className="buttonUser" type="submit"><FiUser/></button>
                </Link>
                <button className="buttonCreate" type="submit"><BsPlusCircleFill/></button>
                <Link to="/Home">
                <button className="buttonHome" type="submit"><BiHomeAlt/></button>
                </Link>
                <Link to="/Spend">
                <button className="buttonPie" type="submit"><FiPieChart/></button>
                </Link>
            </div>
        </>
    );
}


export default NavBar;