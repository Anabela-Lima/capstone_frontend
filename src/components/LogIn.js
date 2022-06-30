import "./LogIn.css";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const LogIn = () => {

    return(
        <>
        <div id="logInBody">

            <form className="containerForm">

                <h1> Log in, or 
                    <Link to="/CreateAccount">
                    <button className="createAcc" value="submit">Create your account</button>
                    </Link>
                </h1>
                <div>
                <FiUser/><input type="uname" placeholder="Username"></input>
                </div>
                <div>
                <FiUser/><input type="password" placeholder="Password"></input>
                </div>

                <button className="logInBtn">Log In</button>
                <button className="forgotPswBtn">Forgot Password?</button>

            </form>

        </div>
        </>
    );
}

export default LogIn;