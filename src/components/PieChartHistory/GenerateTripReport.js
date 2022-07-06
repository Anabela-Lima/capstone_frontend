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
                <h1 style={{fontSize: '50px'}}>{trip.name} </h1>
            </div>
        <div style={{display: 'flex', justifyContent : 'flex-end', paddingTop : '50px', paddingBottom : '50px', alignItems : 'center', columnGap : '20px'}}>
        {organiser && !alreadyGenerated ? <button className="reportBtn" onClick={handleReportButton}>Generate Report</button> :
            <button className="reportBtn" onClick={handleReportButton}>View Report</button>}
            <input src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Noun_Project_pie_chart_icon_1379121_cc.svg/1024px-Noun_Project_pie_chart_icon_1379121_cc.svg.png'
             type="image" className="pieChartBtn" onClick={handlePieChartButton} 
             style={{height: '100px'}}/>
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
                <h1 style={{fontSize: '50px'}}>{trip.name} </h1>
            </div>
        <div style={{display: 'flex', justifyContent : 'flex-end', paddingTop : '50px', paddingBottom : '50px', alignItems : 'center', columnGap : '20px'}}>
        {organiser && !alreadyGenerated ? <button className="reportBtn" onClick={handleReportButton}>Generate Report</button> :
            <button className="reportBtn" onClick={handleReportButton}>View Report</button>}
            <input src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Noun_Project_pie_chart_icon_1379121_cc.svg/1024px-Noun_Project_pie_chart_icon_1379121_cc.svg.png'
             type="image" className="pieChartBtn" onClick={handlePieChartButton} 
             style={{height: '100px'}}/>
        </div>
        </div>
            {pieChartVisible ? <VisiblePieChart trip={trip}/> : null}
            {reportVisible ? <VisibleReport trip={trip} /> : null}
        </>: null }
        </>
    )
}

export default GenerateTripReport