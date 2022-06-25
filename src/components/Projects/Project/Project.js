import React from "react";
import classes from "./Project.module.css";

const project = (props) => {
  let seeMe = null;

  if (props.disabled) {
    seeMe = null;
  } else {
    seeMe = (
      <a href={props.exLink} target="_blank" rel="noopener noreferrer">
        <button className={classes.Btn}>
          <i className="fas fa-external-link-alt"></i>View Live
        </button>
      </a>
    );
  }

  return (
    <div className={classes.Column}>
      <div className={classes.Card}>
        <img
          src={props.image}
          alt={props.alt}
          style={{
            width: "100%",
            height: "200px",
          }}
        />
        <h3>{props.project}</h3>
        <p>{props.describe}</p>
        <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
          <button className={classes.Btn}>
            <i className="fab fa-github-alt"></i>Github
          </button>
        </a>
        {seeMe}
      </div>
    </div>
  );
};

export default project;
