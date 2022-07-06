import { useEffect, useState } from "react";
import PieChartHistory from "./PieChartHistory"
import './PieChart.css';
import { PieChart } from 'react-minimal-pie-chart';
import { animated } from "react-spring";
import axios from "axios";

import './VisiblePieChart.css'

const VisiblePieChart = ({trip}) => {

    const [pieChartPercentages, setPieChartPercentages] = useState({
        "tripID": trip.id,
        "totalSpend": 0,
        "overallPercentageOfBudget": 0,
        "foodPercentage": 0,
        "physicalPercentage": 0,
        "entertainmentPercentage": 0,
        "travelPercentage": 0,
        "otherPercentage": 0
    });

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/trips/pieChartPercentages?tripID=${trip.id}`)
        .then(response => {
            const pieChartPercentages = response.data;
            setPieChartPercentages(pieChartPercentages);
        })
        .catch(err => console.error(err));
    }, []);


    return (
        <>
        {pieChartPercentages.totalSpend != 0 ?
        <>
        <h1 style={{fontSize: "65px"}}>£{(pieChartPercentages.overallPercentageOfBudget - 1)*pieChartPercentages.totalSpend/pieChartPercentages.overallPercentageOfBudget} Over Budget</h1>
        <PieChart
         data={[
            { title: 'One', value: pieChartPercentages.foodPercentage, color: '#E38627', label:"Food" },
            { title: 'Two', value: pieChartPercentages.physicalPercentage, color: '#C13C37', label:"Physical" },
            { title: 'Three', value: pieChartPercentages.entertainmentPercentage, color: '#6A2135', label:"entertainment" },
            {title: 'Four', value: pieChartPercentages.travelPercentage, color: ' rgb(223, 214, 115)', label:"Travel" },
            {title: 'Five', value: pieChartPercentages.otherPercentage, color: 'rgb(245, 222, 14)', label:"Other" }
        ]} 
        labelStyle={{
            fontSize: "15px",
            fill: "white",
            textAlign: "center",
            textAlignVertical: "center"
          }}
        animate = {true}
        lineWidth={20}
        rounded = {true}
        label={({dataEntry}) => {
            if (dataEntry.title == 'One') {
                return '£' + pieChartPercentages.totalSpend;
            } 
            // else if (dataEntry.title == 'Two') {
            //     return 'Total expenses for activities';
            // }
        }}
        labelPosition={"50%"}
        animationDuration={"750"}
        /> 

        <h1>
            <div style={{float:'right'}}>
                Amount (£)
            </div>
            <br></br>
            <ul>
                <li style={{color: '#E38627'}}><span className="inside">Food ------------------------------------ <span className="toTheRight">{pieChartPercentages.foodPercentage*pieChartPercentages.totalSpend/pieChartPercentages.overallPercentageOfBudget}</span></span> </li>
                <li style={{color: '#C13C37'}}><span className="inside">Physical&nbsp;&nbsp;--------------------------------    <span className="toTheRight">{pieChartPercentages.physicalPercentage*pieChartPercentages.totalSpend/pieChartPercentages.overallPercentageOfBudget}</span></span></li>
                <li style={{color: '#6A2135'}}><span className="inside">Entertainment &nbsp;-------------------------- <span className="toTheRight">{pieChartPercentages.entertainmentPercentage*pieChartPercentages.totalSpend/pieChartPercentages.overallPercentageOfBudget}</span></span></li>
                <li style={{color: 'rgb(223, 214, 115)'}}><span className="inside">Travel&nbsp;&nbsp; ---------------------------------- <span className="toTheRight">{pieChartPercentages.travelPercentage*pieChartPercentages.totalSpend/pieChartPercentages.overallPercentageOfBudget}</span></span></li>
                <li style={{color: 'rgb(245, 222, 14)'}}><span className="inside">Other&nbsp;----------------------------------- <span className="toTheRight">{pieChartPercentages.otherPercentage*pieChartPercentages.totalSpend/pieChartPercentages.overallPercentageOfBudget}</span></span></li>
            </ul>
        </h1>


        </>
        : null}
        </>
    )
}

export default VisiblePieChart;