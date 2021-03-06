import React, { Component } from 'react';
import classes from './About.module.css';
import Layout from '../../hoc/Layout/Layout';
import Skills from '../../components/Skills/Skills';
import Resume from "../../components/Resume/Resume";

class About extends Component {

    state={
        skill:[
            {id:1, image: './css3.png', alt:'CSS_logo', name: 'CSS3'},
            {id:2, image: './git.png', alt:'GIT_logo', name: 'Git'},
            {id:3, image: './html.png', alt:'HTML_logo', name: 'HTML5'},
            {id:4, image: './javascript.png', alt:'JavaScript_logo', name: 'JavaScript'},
            {id:5, image: './logo512.png', alt:'REACT_logo', name: 'React.js'},
            {id:6, image: './MySQL.png', alt:'MySQL_logo', name: 'MySQL'},
            {id:7, image: './php.png', alt:'PHP_logo', name: 'PHP'},
            {id:8, image: './sass.png', alt:'SASS_logo', name: 'Sass'}
        ]
    }


    render(){

        let skills = null;

        skills=(
            <Skills 
                skill={this.state.skill}
            />
        )

        return(
            <Layout>
                <div className={classes.About}>
                    <div className={classes.Octo}>
                        <div className={classes.Octo1}>
                            <img src="./me.jpeg" alt="Jacques Agbenu" style={{
                                width: "300px",
                                height: "300px",
                                margin: "0 auto",
                                textAlign: "center",
                                display: 'block'
                            }}/>
                        </div>
                    </div>
                    
                    <div className={classes.Content}>
                        <h1>Who Am I?</h1>
                        <p>I am a Full Stack Web Developer who specializes in Front-End web technologies. Technology has been a passion of mine since I was little but I started my journey in the world of Coding and Web Development when I entered college in the fall of 2015.</p>
                    </div>
                    <br />

                    <Resume />
                    <br />
                    <br />

                    <h1>Skills</h1>

                    <div className={classes.Centered}> 
                        <section className={classes.Cards}>
                            {skills}
                        </section>
                    </div>
                </div>
            </Layout>   
        );
    }
}

export default About;