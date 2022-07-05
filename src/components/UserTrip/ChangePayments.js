import { useState } from "react";


const ChangePayments = ({assignment, reRender}) => {  

    const onRemove = () => {
        const options = {
            method: "DELETE",
        }
        fetch(`http://127.0.0.1:8080/deleteUserFromActivity?userID=${assignment.applicationUser.id}&dayActivityID=${assignment.dayActivity.id}`, 
        options)
        .then(response => reRender())
    }

    const [paid, setPaid] = useState(assignment.paid)
    const [shouldPay, setShouldPay] = useState(assignment.shouldPay);

    const handlePaidChange = (event) => setPaid(event.target.value);
    const handleShouldPayChange = (event) => setShouldPay(event.target.value);


    return (
        <>
        <h1 style={{color: "white"}}>
            {assignment.applicationUser.firstname}
            <form>
                <label>
                    <input type="number" onChange={handlePaidChange}/>
                </label>
                <label>
                    <input type="number" onChange={handleShouldPayChange}/>
                </label>
            </form>
            <button onClick={onRemove}>
                Remove
            </button>
        </h1>
        </>
    )
};

export default ChangePayments;