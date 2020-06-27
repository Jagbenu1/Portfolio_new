import React from 'react';
import classes from './Resume.module.css';

const resume = (props) =>{
    return (
        <div className={classes.Container}>
            <a 
                href="./JacquesAgbenu_Resume_2020.pdf" 
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