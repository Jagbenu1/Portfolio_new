import Project from './Project/Project';

const Projects = (props) => {
        return props.project.map((project) =>{
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
        });
};

export default Projects;