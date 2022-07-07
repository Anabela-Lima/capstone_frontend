import { useState } from "react";
import { Table } from "react-bootstrap"


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
            {/* <div style={{
                    color: "white", 
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}
            >
                {assignment.applicationUser.firstname}
                <form onSubmit={SubmitPaymentChange}>
                    <label>
                        <input 
                            type="number" 
                            step="any" 
                            onChange={handlePaidChange} 
                            value={paid}
                        />
                    </label>
                    <label>
                        <input 
                            type="number" 
                            step="any" 
                            onChange={handleShouldPayChange} 
                            value={shouldPay}
                        />
                    </label>
                    <input type="submit"/>
                </form>
                <button onClick={onRemove}>
                    Remove
                </button>
            </div> */}
            {/* <Table id= "fieldsTable" striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th className="nameTh">Attendee</th>
                        <th className="timeLeft">Paid</th>
                        <th className="timeLeft">ShouldPay</th>
                        <th className="">Submit</th>
                        <th className="">Remove</th>
                    </tr>
                </thead> */}
                    <tr>
                        <td style={{
                                fontSize: '40px', 
                                textAlign: 'center',
                                color: 'white'
                            }}
                        >
                            {assignment.applicationUser.firstname}
                        </td>

                        <td>
                            <label>
                                <input 
                                    type="number" 
                                    step="any" 
                                    onChange={handlePaidChange} 
                                    value={paid}
                                    style={{
                                        height: '40px',
                                        width: '80px',
                                        paddingLeft: '10px',
                                        marginLeft: '20px',
                                        fontSize: '30px',
                                        textAlign: 'center',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        color: 'white'
                                    }}
                                />
                            </label>
                        </td>

                        <td>
                            <label>
                                <input 
                                    type="number" 
                                    step="any" 
                                    onChange={handleShouldPayChange} 
                                    value={shouldPay}
                                    style= {{
                                        height: '40px',
                                        width: '100px',
                                        marginLeft: '40px',
                                        fontSize: '30px',
                                        textAlign: 'center',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        color: 'white'
                                    }}
                                />
                            </label>
                        </td>

                        <td>
                            <input 
                                type="submit" 
                                style={
                                    {
                                        height: '70px', 
                                        width: '140px',
                                        marginLeft: '10px',
                                        fontSize: '30px',
                                        borderRadius: '20px',
                                        border: 'none'
                                    }
                                }
                                onClick={SubmitPaymentChange}
                            />
                        </td>

                        <td style={{paddingLeft: '10px'}}>
                            <button 
                                onClick={onRemove} 
                                style={{
                                    height: '70px', 
                                    width: '140px',
                                    fontSize: '30px',
                                    borderRadius: '20px',
                                    border: 'none'
                                }}>
                                Remove
                            </button>
                        </td>

                    </tr>
            {/* </Table> */}
        </>
    )
};

export default ChangePayments;