import React from 'react';
import './resulttext.css';

function ResultText(props) {
    const data = props.text;
    const text = Object.values(data)[0];
    const title = Object.keys(data);
    

    return (
        <>
            <h4 className="result-paragraph-subtitle">{title}</h4>
            <ul className="result-text-list">
                {text.map((paragraph, index) => {
                    return (
                        <li className="result-text-item" key={index}>
                            <p className="result-text">{paragraph}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default ResultText;
