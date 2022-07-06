import React, { useState } from 'react'
import './CreateTrip.css'
import { ReactComponent as GlobeIcon } from '../../components/assets/images/globe.svg'
import { ReactComponent as EditIcon } from '../../components/assets/images/edit.svg'
import { ReactComponent as CalendarIcon } from '../../components/assets/images/calendar.svg'

const CreateTrip = ({userId}) => {


    const [formInput, setFormInput] = useState({
        name: "",
        country: "",
        description: "",
        startDate: "",
        endDate: ""
    })

    const createNewTrip = (event) => {

      window.location.reload();

      console.log('clicked')

      const options = {
        method: "POST",
      }
  
      fetch(
        `http://127.0.0.1:8080/user/trip/new?userId=${userId}&name=${formInput.name}&country=${formInput.country}&description=${formInput.description}&startDate=${formInput.startDate}%2000%3A00%3A00&endDate=${formInput.endDate}%2000%3A00%3A00`,
      options)
      .then((response) => {
        setFormInput({
          name: "",
          country: "",
          description: "",
          startDate: new Date(),
          endDate: new Date()
        })
      })
      .catch(err => console.log(err))
    };
  
    const handleFormChange = (e) => {
        switch(e.target.id) {
          case "name":
            setFormInput({
              name: e.target.value,
              country: formInput.country,
              description: formInput.description,
              startDate: formInput.startDate,
              endDate: formInput.endDate
            })
            break;
          case "country":
            setFormInput({
              name: formInput.name,
              country: e.target.value,
              description: formInput.description,
              startDate: formInput.startDate,
              endDate: formInput.endDate
            })
            break;
          case "description":
            setFormInput({
              name: formInput.name,
              country: formInput.country,
              description: e.target.value,
              startDate: formInput.startDate,
              endDate: formInput.endDate
            })
            break;
          case "startdate":
            setFormInput({
              name: formInput.name,
              country: formInput.country,
              description: formInput.description,
              startDate: e.target.value,
              endDate: formInput.endDate
            })
            break;
          case "enddate":
            setFormInput({
              name: formInput.name,
              country: formInput.country,
              description: formInput.description,
              startDate: formInput.startDate,
              endDate: e.target.value
            })
            break;
          default:
            setFormInput({
              name: formInput.name,
              country: formInput.country,
              description: formInput.description,
              startDate: formInput.startDate,
              endDate: formInput.endDate
            })
            break;
        }
    }

    return (
        <div id="create-trip-container">

            <div className="form-container">

              <div className="form-title">
                <span className="title-style">
                  Create Trip
                </span>
              </div>
              <div className="actual-form-container">
                  <div className="single-form-container">
                    <EditIcon className="form-icons"/>
                    <input 
                      className="register-form"
                      id="name"
                      type="text"
                      placeholder="Trip name"
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.name}
                      onChange={handleFormChange}
                    ></input>
                  </div>
                  <div className="single-form-container">
                    <GlobeIcon className="form-icons"/>
                    <input 
                      className="register-form"
                      id="country"
                      type="select"
                      placeholder="Country"
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.country}
                      onChange={handleFormChange}
                    ></input>
                  </div>
                  <div className="single-form-container">
                    <EditIcon className="form-icons"/>
                    <input 
                      className="register-form"
                      id="description"
                      type="text"
                      placeholder="Description"
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.description}
                      onChange={handleFormChange}
                    ></input>
                  </div>
                  <div className="single-form-container">
                    <CalendarIcon className="form-icons"/>
                    <input 
                      className="register-form"
                      id="startdate"
                      type="date"
                      placeholder=""
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.startDate}
                      onChange={handleFormChange}
                    ></input>
                  </div>
                  <div className="single-form-container">
                    <CalendarIcon className="form-icons"/>
                    <input 
                      className="register-form"
                      id="enddate"
                      type="date"
                      placeholder=""
                      spellCheck="false"
                      autoComplete='off'
                      value={formInput.endDate}
                      onChange={handleFormChange}
                    ></input>
                  </div>
              </div>
              
              <div className="confirm-button-container">
                  <div className="confirm-button" onClick={createNewTrip}>
                      <div className="confirm-button-background"></div>
                      <div className="confirm-text">
                        Confirm
                      </div> 
                  </div>
              </div>

            </div>
{/* 
              <form onSubmit={createNewTrip}>
                  <label>
                    Trip name: <input type="text" placeholder='Trip Title' id="name" onChange={handleFormChange}
                    value={formInput.name}/>
                  </label>
                  <label>
                    Country: <input type="text" placeholder='Country' id="country" onChange={handleFormChange}
                    value={formInput.country}/>
                  </label>
                  <label>
                    Trip Description: <input type="text" placeholder='Trip Description' id="trip" onChange={handleFormChange}
                    value={formInput.trip}/>
                  </label>
                  <label>
                    Start Date: <input type="date" id="startdate" onChange={handleFormChange}
                    value={formInput.startDate}/>
                  </label>
                  <label>
                    End Date: <input type="date" id="enddate" onChange={handleFormChange}
                    value={formInput.endDate}/> 
                  </label>
                
                  <input type="submit" value="Add Trip!"/>
              </form> */}
        </div>
    )
}

export default CreateTrip