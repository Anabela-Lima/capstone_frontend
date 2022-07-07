
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
        <div style={{fontSize: 'x-large', textAlign: 'center'}}>
        {   
            moneyOwed.map(owing => {
                return <div style={{borderTop: '1px solid white'}}>
                    <h3>{owing.payer.firstname} owes {owing.payee.firstname} £{(owing.owed).toFixed(2)}</h3>
                </div>
            })
        }
        </div>
        </>
    )
}

export default VisibleReport;