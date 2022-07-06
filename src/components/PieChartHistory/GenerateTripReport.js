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
        if (alreadyGenerated.success) {
            setReportVisible(!reportVisible);
        } else {
            window.confirm("You can only generate a report for a trip once. Are you sure?")
        }
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/user/didUserOrganiseTrip?tripID=${trip.id}&userID=${user.id}`)
        .then(response => {
            const organiser = response.data;
            setOrganiser(organiser);
        })
        .catch(err => console.log(err));
     }, []);

     useEffect(() => {
        axios.get(`http://127.0.0.1:8080/trips/hasReportBeenGeneratedByTrip?tripID=${trip.id}`)
        .then(response => {
            const alreadyGenerated = response.data;
            setAlreadyGenerated(alreadyGenerated);
        })
        .catch(err => console.log(err));
     } , []);

    return (
        <>
        <h3>{trip.name} 
        {organiser.success && !alreadyGenerated.success ? <button onClick={handleReportButton}>Generate Report</button> :
        <button onClick={handleReportButton}>View Report</button>}
            {reportVisible ? <VisibleReport trip={trip} /> : null}
        <button onClick={handlePieChartButton}>PieChart</button>
            {pieChartVisible ? <VisiblePieChart trip={trip}/> : null}
        </h3>
        </>
    )
}

export default GenerateTripReport