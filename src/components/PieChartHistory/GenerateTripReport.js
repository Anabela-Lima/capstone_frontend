import axios from "axios";
import { useState, useEffect } from "react"
import VisiblePieChart from "./VisiblePieChart";
import VisibleReport from "./VisibleReport";
import './PieChartHistory.css'

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
        } else if (organiser) {
            if (window.confirm("You can only generate a report for a trip once. Are you sure?")) {
                fetch(`http://127.0.0.1:8080/generateOwingFromTrip?tripID=${trip.id}`)
                .then(response => setAlreadyGenerated(true))
                .catch(err => console.log(err));
            }
        } else {

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
        <>
        <div className="tripGenerate">
            <div>
                <h1>{trip.name} </h1>
            </div>
        <div>
        {organiser && !alreadyGenerated ? <button className="reportBtn" onClick={handleReportButton}>Generate Report</button> :
            <button className="reportBtn" onClick={handleReportButton}>View Report</button>}
            <button className="pieChartBtn" onClick={handlePieChartButton}>PieChart</button>
        </div>
        </div>
            {pieChartVisible ? <VisiblePieChart trip={trip}/> : null}
            {reportVisible ? <VisibleReport trip={trip} /> : null}

        
        </>
        : 
        organiser ?
        <>
        <div className="tripGenerate">
            <div>
                <h1>{trip.name} </h1>
            </div>
        <div>
        {organiser && !alreadyGenerated ? <button className="reportBtn" onClick={handleReportButton}>Generate Report</button> :
            <button className="reportBtn" onClick={handleReportButton}>View Report</button>}
            <button className="pieChartBtn" onClick={handlePieChartButton}>PieChart</button>
        </div>
        </div>
            {pieChartVisible ? <VisiblePieChart trip={trip}/> : null}
            {reportVisible ? <VisibleReport trip={trip} /> : null}
        </>: null }
        </>
    )
}

export default GenerateTripReport