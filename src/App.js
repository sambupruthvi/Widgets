import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';

export default () => {
    const questions = [
        {
            title: "What is react?",
            content: "React is an open-source, front end, JavaScript library for building user interfaces or UI components."
        },
        {
            title: "What is Angular?",
            content: "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google"
        },
        {
            title: "What is Vue js?",
            content: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications"
        }
        
    ]
    return (
        <div>
            {/* <Accordion questions = {questions} /> */}
            <Search />
        </div>
    );
}