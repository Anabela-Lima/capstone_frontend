import React from "react";
import "./Support.css";
import { ReactComponent as SearchIcon } from '../../components/assets/images/search.svg';
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";


const Support = () => {


    const searchFAQs = () => {
        console.log('hello world');
    }


    return (
        <>
        <div id="support-page-container">
            <h1 id="faq-page-title">FAQs</h1>
            <div id="support-search-container">
                <div id="search-faq-searchbox-icon-container">
                    <SearchIcon id="search-users-search-icon"/>
                </div>
                <div id="search-users-searchbox-background"></div>
                    <input 
                        type="text" 
                        id="search-users-searchbox" 
                        onChange={searchFAQs}
                        placeholder="Search FAQ's..."
                    />
            </div>
            <div id="about-container">
                <div id="line1"></div>
                <h1 id="about-heading-1">About</h1>
                <h2 id="about-heading-2">What is Go-Split?</h2>
                <p id="about-p-1">Go split is the easiest way to share expenses with friends and family and stop stressing about “who owes who”.</p>
                <p id="about-p-2">Create your dream trip, top it up with days of activities, invite friends, work colleagues or family, and enjoy a stress free holiday. Split costs? We’ve got it covered- split bills, not friendships. </p>
                <div id="line2"></div>
            </div>
            <div id="faq-list">

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandCircleDown id="expand-circle"/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionHeader">How does it work?</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Simples. You create an account, find a nice trip with yo mates, and we book you in bud.
                    </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandCircleDown id="expand-circle"/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionHeader">Can I request payment?</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        You bascially give us your card details and we put you six feet under
                    </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandCircleDown id="expand-circle"/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionHeader">What if I don't recieve my split?</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Don't worry. We have a great system in place for those who don't cough up. They tend to go missing.
                    </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandCircleDown id="expand-circle"/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionHeader">Can I share a trip report?</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Abso-diddly-lootely! Just ping it through our trip share feature to your friend. You must have them added first though!
                    </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            
            </div>


        </div>
        </>
    );

}

export default Support;