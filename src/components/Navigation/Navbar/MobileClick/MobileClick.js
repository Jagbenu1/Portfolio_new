import React from 'react';
import classes from './MobileClick.module.css';

const mobileclick = (props) => (
    <div onClick={props.appear} className={classes.MobileClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default mobileclick;
