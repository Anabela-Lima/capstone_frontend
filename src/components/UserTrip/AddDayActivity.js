import './AddDayActivity.css'
import axios from 'axios';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../components/assets/images/x.svg'

const AddDayActivity = ({day, closeAddNewFromAddNew, dayNumber}) => {

    const [type, setType] = useState(0);
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);

    const handleType = (event) => setType(event.target.value);
    const handleLocation = (event) => setLocation(event.target.value);
    const handleTitle = (event) => setTitle(event.target.value);
    const handlePrice = (event) => setPrice(event.target.value);

    const handleNewActivity = (event) => {
        event.preventDefault();
        const options = {
            method: "POST",
          }
        fetch(`http://127.0.0.1:8080/dayActivity?activityType=${type}&location=${location}&name=${title}&price=${price}&day_id=${day.id}`,
        options)
    }

    return (
        <>
            <div className="add-activity-container">
                <CloseIcon className="add-activity-close-icon"/>
                <form onSubmit={handleNewActivity} className="add-activity-form">
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
                    <button style={{height: '100px', width: '100px'}} onClick={closeAddNewFromAddNew}></button>

                </form>
            </div>
        </>
    )
}

export default AddDayActivity