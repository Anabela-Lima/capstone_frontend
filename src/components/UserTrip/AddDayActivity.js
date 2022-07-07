import './AddDayActivity.css'
import axios from 'axios';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../components/assets/images/x.svg'
import { ReactComponent as CheckIcon } from '../../components/assets/images/check.svg'

const AddDayActivity = ({day, closeAddNewFromAddNew, dayNumber}) => {

    const [type, setType] = useState(0);
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);

    const handleType = (event) => setType(event.target.value);
    const handleLocation = (event) => setLocation(event.target.value);
    const handleTitle = (event) => setTitle(event.target.value);
    const handlePrice = (event) => setPrice(event.target.value);

    const handleNewActivity = () => {
        const options = {
            method: "POST",
          }
        fetch(`http://127.0.0.1:8080/dayActivity?activityType=${type}&location=${location}&name=${title}&price=${price}&day_id=${day.id}`,
        options)
    }

    return (
        <>
            <div className="add-activity-container">
                {/* <form onSubmit={handleNewActivity} className="add-activity-form"> */}
                <form className="add-activity-form">
                    <label onChange={handleType}>
                        <select className="add-activity-drop-down">
                            <option value="">Choose a Category!</option>
                            <option value="Food">FOOD</option>
                            <option value="Physical">PHYSICAL</option>
                            <option value="Entertainment">ENTERTAINMENT</option>
                            <option value="Travel">TRAVEL</option>
                            <option value="Other">OTHER</option>
                        </select>
                    </label>
                    <label>
                        <input 
                            onChange={handleLocation} 
                            type="text" 
                            placeholder="Activity Location"
                            className="add-activity-input-form"    
                        />
                    </label>
                    <label>
                        <input 
                            onChange={handleTitle} 
                            type="text" 
                            placeholder="Activity Title"
                            className="add-activity-input-form"
                        />
                    </label>
                    <label>
                        <input 
                            onChange={handlePrice} 
                            type="number" 
                            placeholder="Activity Price" 
                            className="add-activity-input-form"
                        />
                    </label>
                    {/* <input type="submit"/> */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: '50px'
                    }}>
                        <button 
                            style={{
                                height: '100px', 
                                width: '100px',
                                borderRadius: '50%',
                                border: 'none',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '20px'
                            }} 
                            onClick={(e) => {
                                e.preventDefault()
                                handleNewActivity()
                                closeAddNewFromAddNew()
                            }}>
                            <CheckIcon style={{
                                height: '70%',
                                width: '70%'
                            }}/>
                        </button>
                        <button 
                            style={{
                                height: '100px', 
                                width: '100px',
                                borderRadius: '50%',
                                border: 'none',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '20px'
                            }} 
                            onClick={(e) => {
                                e.preventDefault()
                                closeAddNewFromAddNew()
                            }}>
                            <CloseIcon style={{
                                height: '70%',
                                width: '70%'
                            }}/>
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddDayActivity