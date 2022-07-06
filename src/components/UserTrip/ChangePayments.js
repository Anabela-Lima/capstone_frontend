import { useState } from "react";


const ChangePayments = ({assignment, reRender, reRenderAddUp}) => {  

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

    const SubmitPaymentChange = (event) => {
        event.preventDefault();

        const options = {
            method: "PUT",
        }

        fetch(`http://127.0.0.1:8080/changePaymentOfDayActivity?userID=${assignment.applicationUser.id}&dayActivityID=${assignment.dayActivity.id}&paid=${paid}&shouldPay=${shouldPay}`,
        options)
        .then(response => reRenderAddUp())
        .catch(err => console.log(err));
    }

    return (
        <>
        <h1 style={{color: "white"}}>
            {assignment.applicationUser.firstname}
            <form onSubmit={SubmitPaymentChange}>
                <label>
                    <input type="number" step="any" onChange={handlePaidChange} value={paid}/>
                </label>
                <label>
                    <input type="number" step="any" onChange={handleShouldPayChange} value={shouldPay}/>
                </label>
            <input type="submit"/>
            </form>
            <button onClick={onRemove}>
                Remove
            </button>
        </h1>
        </>
    )
};

export default ChangePayments;