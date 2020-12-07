import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Dropdown from './Components/Dropdown';
import Search from './Components/Search';
import Translate from './Components/Translate';
import Header from './Components/Header';
import Route from './Components/Routes';

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
            content: "Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications"
        }
        
    ]

    const options = [
        {
            label: "The Color Red",
            value: "red"
        },
        {
            label: "The Color Green",
            value: "green"
        },
        {
            label: "The Shade of Blue",
            value: "blue"
        }
    ]
    const [selected, setSelected] = useState(options[0]);
    // const [toggleButton, onToggleButton] = useState(true);
    return (
        <div>
            {/* <Accordion questions = {questions} /> */}
            {/* <Search /> */}
            {/* <button 
                onClick = {() => {onToggleButton(!toggleButton)}}
            >
                Toggle Dropdown</button>
            {toggleButton ?
                <Dropdown 
                label = 'Select a Color'
                selected = {selected}
                onSelectedChange = {setSelected}
                options = {options}
                /> : ''
            } */}
            <Header />
            <Route path="/">
                <Accordion questions={questions} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label = 'Select a Color'
                    selected = {selected}
                    onSelectedChange = {setSelected}
                    options = {options}
                /> 
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}