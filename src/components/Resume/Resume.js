import React from 'react';
import classes from './Resume.module.css';

const resume = (props) =>{
    return (
        <div className={classes.Container}>
            <a 
                href="./Jacques_Agbenu_Resume.pdf" 
                alt="Resume" 
                target="_blank"
                rel="noopener noreferrer"
                >
                Resume&#x2192;
            </a>
        </div>
    );
}

export default resume;