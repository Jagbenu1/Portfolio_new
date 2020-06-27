import React, { Component } from 'react';
import Projects from './Projects/Projects';
import Layout from '../../hoc/Layout/Layout';
import classes from './Portfolio.module.css';

class Portfolio extends Component {
    state={
        projects:[
            {id: 1, image:"./Shopping_List.png", project: "Shopping List", describe: "Shopping list app created with es5 JavaScript, HTML and CSS. You can create, delete and update items in the list.", gitLink: "https://github.com/Jagbenu1/Shopping-List", exLink:"/", disabled: false},
            {id: 2, image:"./15_Puzzle.png", project: "15 Puzzle", describe: "15 puzzle game created using React.js, and CSS modules. It has all the workings of a normal 15 puzzle game.", gitLink: "https://github.com/Jagbenu1/15-Puzzle", exLink:"/"},
            {id: 3, image:"./Forkify.png", project: "Forkify", describe: "This is a recipe finder SPA created using es6 JavaScript, webpack and Babel. It uses axios to obtain data from a third-party API.", gitLink: "https://github.com/Jagbenu1/forkify", exLink:"/", disabled: false},
            {id: 4, image:"./Pig-game.png", project: "Pig-Game", describe: "This is a simple game created using es5 Javascript, HTML and CSS. Two players are able to play this game without issue.", gitLink: "https://github.com/Jagbenu1/Pig-Game", exLink:"/", disabled: false},
            {id: 5, image:"./Budgety.png", project: "Budgety", describe: "This is a budget app created using HTML, CSS, and es5 Javascript. The user can accurately balance their budget with ease.  ", gitLink: "https://github.com/Jagbenu1/Budgety", exLink:"/", disabled: false},
            {id: 6, image:"./Storm_Gazer.png", project: "Storm-Gazer", describe: "This is a weather SPA made with es6 Javascript, webpack, Babel, HTML, and Sass. The darksky APi is used to obtain weather data for a desired region.", gitLink: "https://github.com/Jagbenu1/Storm-Gazer", exLink:"/", disabled: false},
            {id: 7, image: "./Rent-a-Car.png", project: "Rent-a-Car", describe: "This is a simple CRUD application that me and my group  created during my web programming course. It is created with PHP, MySql, CSS, and Javascript.", gitLink: "https://github.com/Jagbenu1/Rent-a-car", exLink: "/", disabled: true},
            {id: 8, image: "./ListVid.jpg", project: "ListVid", describe: "A videop player that was created in android studio for perting system course. The app gets permission from teh viewer to list the videos on their SD-cards and internal storage.", gitLink: "https://github.com/Jagbenu1/ListVid", exLink: "/", disabled: true}
        ]
    }

    render(){

        let projects = null;

        projects = (
            <Projects 
                project={this.state.projects}
            />
        );

        return(
            <Layout>
            <div className={classes.Container}>
                <h1>Projects</h1>
                <div className={classes.Row}>
                    {projects}
                </div>
            </div>

                
            </Layout>

        );
    };
};

export default Portfolio;