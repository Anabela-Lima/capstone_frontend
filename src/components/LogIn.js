import "./LogIn.css";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiTwotoneLock} from "react-icons/ai";

const LogIn = () => {

    return(
        <>
        <div>
            <img ></img>

            <form className="containerForm">

                <h1 className="createAccHeading"> Log in, or 
                    <Link to="/CreateAccount">
                    <button className="createAccBtn" value="submit">Create your account</button>
                    </Link>
                </h1>
                <div className="unameForm">
                <FiUser/><input type="uname" placeholder="Username"></input>
                </div>
                <div className="passwordForm">
                <AiTwotoneLock/><input type="password" placeholder="Password"></input>
                </div>

                <button className="logInBtn">Log In</button>
                <button className="forgotPswBtn">Forgot Password?</button>

            </form>

        </div>

        </>
    );
}

export default LogIn;