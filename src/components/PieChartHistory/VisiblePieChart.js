import { useEffect, useState } from "react";
import PieChartHistory from "./PieChartHistory"
import './PieChart.css';
import { PieChart } from 'react-minimal-pie-chart';
import { animated } from "react-spring";
import axios from "axios";


const VisiblePieChart = ({trip}) => {

    const [pieChartPercentages, setPieChartPercentages] = useState({
        "tripID": trip.id,
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
        <PieChart
         data={[
            { title: 'One', value: pieChartPercentages.foodPercentage, color: '#E38627', label:"Food" },
            { title: 'Two', value: pieChartPercentages.physicalPercentage, color: '#C13C37', label:"Physical" },
            { title: 'Three', value: pieChartPercentages.entertainmentPercentage, color: '#6A2135', label:"entertainment" },
            {title: 'Four', value: pieChartPercentages.travelPercentage, color: '#ffffff', label:"Travel" },
            {title: 'Five', value: pieChartPercentages.otherPercentage, color: '#000000', label:"Other" }
        ]} 
        labelStyle={{
            fontSize: "100px",
            color: "white",
          }}
        animate = {true}
        lineWidth={20}
        rounded = {true}
        />
        </>
    )
}

export default VisiblePieChart;