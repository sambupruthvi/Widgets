import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
// Google translate key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Telugu',
        value: 'te'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className = 'ui form'>
                <div className = 'field'>
                    <label>Enter a text</label>
                    <input value = {text} onChange = {(e) => {setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown label = 'Select a Language' options = {options} selected = {language} onSelectedChange = {setLanguage}/>
            <hr />
            <div>
                <h3 className = 'ui header'>Output</h3>
            </div>
            <Convert language = {language} text = {text}/>
        </div>
    )
}

export default Translate;