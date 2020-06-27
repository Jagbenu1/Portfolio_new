import React, { Component } from 'react';
import Project from './Project/Project';


class Projects extends Component {
    render(){
        return this.props.project.map((project) =>{
            return(
                <Project 
                key={project.id}
                image={project.image}
                project={project.project}
                describe={project.describe}
                gitLink={project.gitLink}
                exLink={project.exLink}
                disabled={project.disabled}/>
            )
        })
    }
};

export default Projects;