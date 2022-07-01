import React from 'react'
import './MainCarousel.css'
import backgroundIslandImage from './../assets/images/start_screen_background.png';
import { ReactComponent as UserIcon } from './../assets/images/user.svg';
import { ReactComponent as PenIcon } from './../assets/images/edit.svg';
import { ReactComponent as MailIcon } from './../assets/images/mail.svg';
import { ReactComponent as LockIcon} from './../assets/images/lock.svg';
import {Link} from "react-router-dom";

const MainCarousel = () => {

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


  const PasswordStrengthIndicator = () => {
    return (
      <div id="password-strength-indicator">
        <div className="indicator-bar" id="low-strength"></div>
        <div className="indicator-bar" id="mid-strength"></div>
        <div className="indicator-bar" id="high-strength"></div>
      </div>
    )
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
          <span id="page-name-text">Register</span>
        </div>
      </>
    )
  }

  return (
    <>
      <div id="carousel-container">
          <img src={backgroundIslandImage} alt="" id="background-img"/>
              <div id="center-container">
                <div id="register-form-container">
                  <div id="register-title">Register</div>
                  <div>
                    <Link to="/LogIn">
                    <button id="log-in-btn" value="submit">Or, Log in</button>
                    </Link>
                  </div>
                  <div className="register-form-container">
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
                  <div className="register-form-container">
                    <PenIcon className="register-form-icons"/>
                    <input 
                      className="register-form"
                      id="firstname-form"
                      type="text" 
                      placeholder="First Name"
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.firstname}
                      onChange={onRegistrationInputChange}
                    ></input>
                  </div>
                  <div className="register-form-container">
                    <PenIcon className="register-form-icons"/>
                    <input 
                      className="register-form" 
                      id="lastname-form"
                      type="text" 
                      placeholder="Last Name"
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.lastname}
                      onChange={onRegistrationInputChange}
                    ></input>
                  </div>
                  <div className="register-form-container">
                    <MailIcon className="register-form-icons"/>
                    <input 
                      className="register-form"
                      id="email-form"
                      type="text" 
                      placeholder="Email"
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.email}
                      onChange={onRegistrationInputChange}
                    ></input>
                  </div>
                  <div className="register-form-container">
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
                  <PasswordStrengthIndicator />
                </div>
              </div>
              <div id="register-account-button-container">
                <div id="register-account-button-background">
                  <button id="register-account-button">
                    <span id="register-account-button-text">Create Account</span>
                  </button>
                </div>
              </div>
              <PageIndicator />
          </div>
    </>
  )
}

export default MainCarousel