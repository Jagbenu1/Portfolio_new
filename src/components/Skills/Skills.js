import React, { Component } from 'react';
import Skill from './Skill/Skill';

class Skills extends Component {
    render(){
        return this.props.skill.map((skill) =>{
            return (
                <Skill 
                    key={skill.id}
                    image={skill.image}
                    alt={skill.alt}
                    name={skill.name}
                />
            )
        })
    }
}

export default Skills;