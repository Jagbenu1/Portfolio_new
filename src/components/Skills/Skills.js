import Skill from './Skill/Skill';

const Skills = (props) => {
    
        return props.skill.map((skill) =>{
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

export default Skills;