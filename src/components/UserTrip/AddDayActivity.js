
import axios from 'axios';
import { useState } from 'react';

const AddDayActivity = ({day}) => {

    const [type, setType] = useState(0);
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);

    const handleType = (event) => setType(event.target.value);
    const handleLocation = (event) => setLocation(event.target.value);
    const handleTitle = (event) => setTitle(event.target.value);
    const handlePrice = (event) => setPrice(event.target.value);

    const handleNewActivity = (event) => {
        const options = {
            method: "POST",
          }
        event.preventDefault();
        fetch(`http://127.0.0.1:8080/dayActivity?activityType=${type}&location=${location}&name=${title}&price=${price}&day_id=${day.id}`,
        options)
    }

    return (
        <>
        <form onSubmit={handleNewActivity}>
            <label onChange={handleType}>
                <select>
                    <option value="">Choose a Category!</option>
                    <option value="Food">FOOD</option>
                    <option value="Physical">PHYSICAL</option>
                    <option value="Entertainment">ENTERTAINMENT</option>
                    <option value="Travel">TRAVEL</option>
                    <option value="Other">OTHER</option>
                </select>
            </label>
            <label>
                <input onChange={handleLocation} type="text" placeholder="Activity Location"/>
            </label>
            <label>
                <input onChange={handleTitle} type="text" placeholder="Activity Title"/>
            </label>
            <label>
                <input onChange={handlePrice} type="number" placeholder="Activity Price" />
            </label>

        <input type="submit"/>
        </form>
        </>
    )
}

export default AddDayActivity