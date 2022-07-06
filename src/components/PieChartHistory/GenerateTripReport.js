import axios from "axios";
import { useState, useEffect } from "react"
import VisiblePieChart from "./VisiblePieChart";
import VisibleReport from "./VisibleReport";

const GenerateTripReport = ({trip, organiserOnly, user}) => {

    const [organiser, setOrganiser] = useState(false);
    const [alreadyGenerated, setAlreadyGenerated] = useState(false);

    const [pieChartVisible, setPieChartVisible] = useState(false);
    const [reportVisible, setReportVisible] = useState(false);

    const handlePieChartButton = () => {
        setPieChartVisible(!pieChartVisible);
    }

    const handleReportButton = () => {  
        if (alreadyGenerated) {
            setReportVisible(!reportVisible);
        } else {
            if (window.confirm("You can only generate a report for a trip once. Are you sure?")) {
                fetch(`http://127.0.0.1:8080/generateOwingFromTrip?tripID=${trip.id}`)
                .then(response => setAlreadyGenerated(true))
                .catch(err => console.log(err));
            }
        }
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/user/didUserOrganiseTrip?tripID=${trip.id}&userID=${user.id}`)
        .then(response => {
            const organiser = response.data;
            setOrganiser(organiser.success);
        })
        .catch(err => console.log(err));
     }, []);

     useEffect(() => {
        axios.get(`http://127.0.0.1:8080/trips/hasReportBeenGeneratedByTrip?tripID=${trip.id}`)
        .then(response => {
            const alreadyGenerated = response.data;
            setAlreadyGenerated(alreadyGenerated.success);
        })
        .catch(err => console.log(err));
     } , []);

    return (
        <>
        {!organiserOnly ? 
        <h3>{trip.name} 
        {organiser && !alreadyGenerated ? <button onClick={handleReportButton}>Generate Report</button> :
        <button onClick={handleReportButton}>View Report</button>}
            {reportVisible ? <VisibleReport trip={trip} /> : null}
        <button onClick={handlePieChartButton}>PieChart</button>
            {pieChartVisible ? <VisiblePieChart trip={trip}/> : null}
        </h3>
        : 
        organiser ?
        <h3>{trip.name} 
        {organiser && !alreadyGenerated ? <button onClick={handleReportButton}>Generate Report</button> :
        <button onClick={handleReportButton}>View Report</button>}
            {reportVisible ? <VisibleReport trip={trip} /> : null}
        <button onClick={handlePieChartButton}>PieChart</button>
            {pieChartVisible ? <VisiblePieChart trip={trip}/> : null}
        </h3> : null }
        </>
    )
}

export default GenerateTripReport