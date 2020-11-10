import React, { useState } from 'react';

const Accordion= (props) => {
    const [ activeIndex, setActiveIndex ] = useState(null);

    const titleClicked = (index) =>{
        setActiveIndex(index);
    }

    const renderedItem = props.questions.map((question, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key = {question.title}>
                <div className={`${active} title`} onClick = {() => titleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {question.title}
                </div>
                <div className={`${active} content`}>
                    <p>{question.content}</p>
                </div>
            </React.Fragment> 
        )
    })
    return (
        <div className="ui styled accordion">{renderedItem}</div>
    );
}

export default Accordion;