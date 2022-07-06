import React from "react";
import "./Report.css";

const Report = () => {


    return (
        <>
            <div id="report-page-container">
            <div id="report-header-container">
            <h1 id="report-title">Report User</h1>
            <div id="line-report"></div>
            </div>
            <div id="report-main-container">
            <h2 id="report-h">We stand with you</h2>
            <p id="report-p">Here at Go-Split we are commited to delivering the best experiences to our users. That is why we are here from helping you set up the trip of a lifetime, to sorting out those not so great situations. Trust me, we’ve all been there.</p>
            <p id="report-p">But we need your help! </p>
            <p id="report-p">Experienced anything suspicious?  We are here to hear it 24 hrs a day  7 days a week. Report it, and make this a fun space for all. </p>
            </div>
            <div id="report-form-container">
                <input id="input-report" placeholder="Nature of Report"></input>
                <input id="input-report" placeholder="Report Username"></input>
                <textarea id="text-area-report" placeholder="Report Text"></textarea>
                <button id="report-btn" type="submit">Report</button>
            </div>
                
            </div>
        </>
    );

}

export default Report;
