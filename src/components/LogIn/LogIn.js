import React from 'react'
import './LogIn.css'
import backgroundIslandImage from './../assets/images/start_screen_background.png';
import { ReactComponent as UserIcon } from './../assets/images/user.svg';
import { ReactComponent as PenIcon } from './../assets/images/edit.svg';
import { ReactComponent as MailIcon } from './../assets/images/mail.svg';
import { ReactComponent as LockIcon} from './../assets/images/lock.svg';
import {AiFillInstagram} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import { AiFillTwitterCircle} from "react-icons/ai";
import { Link } from 'react-router-dom';

const LogIn = () => {

  const [formInput, setFormInput] = React.useState({
    username : "",
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })


  const onRegistrationInputChange  = (e) => {
    let currentUsername = formInput.username;
    let currentFirstname = formInput.firstname;
    let currentLastname = formInput.lastname;
    let currentEmail = formInput.email;
    let currentPassword = formInput.password;
    switch(e.target.id) {
        case "username-form":
          currentUsername = e.target.value;
          break;
        case "firstname-form":
          currentFirstname = e.target.value;
          break;
        case "lastname-form":
          currentLastname = e.target.value;
          break;
        case "email-form":
          currentEmail = e.target.value;
          break;
        case "password-form":
          currentPassword = e.target.value;
          break;
        default:
          break;
    }
    setFormInput({
      username: currentUsername,
      firstname: currentFirstname,
      lastname: currentLastname,
      email: currentEmail,
      password: currentPassword
    })
  }


  const PageIndicator = () => {
    return (
      <>
        <div id="swipe-indicator-container">
            <div id="swipe-indicators">
              <div id="first-circle"></div>
              <div id="second-circle"></div>
              <div id="third-circle"></div>
            </div>
        </div>
        <div id="page-name-container">
          <span id="page-name-text">Sign in</span>
        </div>
      </>
    )
  }

  return (
    <>
      <div id="carousel-container">
          <img src={backgroundIslandImage} alt="" id="background-img-log-in"/>
              <div id="center-container">
                <div id="register-form-container-log-in">
                  <div id="log-in-title">Log In 
                    <Link to="/">
                    <button id="create-account-btn" value="submit"> or Create your New Account</button>
                    </Link>
                  </div>
                  <div className="log-in-form-container">
                    <UserIcon className="register-form-icons"/>
                    <input 
                      className="register-form"
                      id="username-form"
                      type="text"
                      placeholder="Username"
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.username}
                      onChange={onRegistrationInputChange}
                    ></input>
                  </div>
                  <div className="log-in-form-container">
                    <LockIcon className="register-form-icons"/>
                    <input 
                      className="register-form" 
                      id="password-form"
                      type="password" 
                      placeholder="Password"
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.password}
                      onChange={onRegistrationInputChange}
                    ></input>
                  </div>
                </div>
                <div id="pass-reg-container">
                  <Link to="/ForgotPass">
                  <button id="forgot-pass-btn">Forgot Password?</button>
                  </Link>
                  <div id="vertical-line"></div>
                  <Link to="/">
                  <button id="register-log-in-btn">Register</button>
                  </Link>
                </div>

                <div id="social-heading">
                    <h1>Or Sign in With...</h1>
                  </div>

                <div id="sign-in-socials-container">

                <div id="horizontal-line-1-sign-in-with"></div>

                <Link to="/Facebook">
                  <button id="fb-btn" value="submit"><BsFacebook/></button>
                  </Link>

                  <Link to="/Insta">
                  <button id="tweet-btn" value="submit"><AiFillTwitterCircle/></button>
                  </Link>

                  <Link to="/Insta">
                  <button id="insta-btn" value="submit"><AiFillInstagram/></button>
                  </Link>
                  
                  <div id="horizontal-line-2-sign-in-with"></div>

                </div>
              </div>
              <div id="log-in-account-button-container">
                <div id="log-in-account-button-background">
                  <button id="log-in-account-button">
                    <span id="log-in-account-button-text">Log in</span>
                  </button>
                </div>
              </div>
              <PageIndicator />
          </div>
    </>
  )
}

export default LogIn;