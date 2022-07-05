
import axios from 'axios';
import { useEffect, useState } from 'react';

const VisibleReport = ({trip}) => {

    const [moneyOwed, setMoneyOwed] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/trips/getReportByTrip?tripID=${trip.id}`)
        .then(response => {
            const moneyOwed = response.data;
            setMoneyOwed(moneyOwed);
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <>
        {
            moneyOwed.map(owing => {
                return <div>
                    <h3>{owing.payer.firstname} owes {owing.payee.firstname} £{owing.owed}</h3>
                </div>
            })
        }
        </>
    )
}

export default VisibleReport;