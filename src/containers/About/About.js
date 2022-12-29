import { useState } from "react";
import classes from "./About.module.css";
import Layout from "../../hoc/Layout/Layout";
import Skills from "../../components/Skills/Skills";
import Resume from "../../components/Resume/Resume";

const About = () => {
  const [skillList, setSkillList] = useState([
    { id: 1, image: "./css3.png", alt: "CSS_logo", name: "CSS3" },
    { id: 2, image: "./git.png", alt: "GIT_logo", name: "Git" },
    { id: 3, image: "./html.png", alt: "HTML_logo", name: "HTML5" },
    {
      id: 4,
      image: "./javascript.png",
      alt: "JavaScript_logo",
      name: "JavaScript",
    },
    { id: 5, image: "./logo512.png", alt: "REACT_logo", name: "React.js" },
    { id: 6, image: "./MySQL.png", alt: "MySQL_logo", name: "MySQL" },
    { id: 7, image: "./php.png", alt: "PHP_logo", name: "PHP" },
    { id: 8, image: "./sass.png", alt: "SASS_logo", name: "Sass" },
    { id: 9, image: "./node.png", alt: "Node_logo", name: "Node.js" },
    { id: 10, image: "./MongoDB.png", alt: "MondgoDB_logo", name: "MongoDB" },
    {
      id: 11,
      image: "./postgresql.png",
      alt: "PostgreSQL_logo",
      name: "PostgreSQL",
    },
    { id: 12, image: "./express.png", alt: "Express_logo", name: "Express.js" },
  ]);

  return (
    <Layout>
      <div className={classes.About}>
        
        <div className={classes.Octo}>
          <div className={classes.Octo1}>
            <img
              src="./me.jpeg"
              alt="Jacques Agbenu"
            />
          </div>
        </div>

        <div className={classes.Headline}>
          <h1>Who Am I?</h1>
          <p>
            I am a Full Stack Web Developer who specializes in Front-End web
            technologies. Technology has been a passion of mine since I was
            little but I started my journey in the world of Coding and Web
            Development when I entered college in the fall of 2015.
          </p>
        </div>

        <Resume />

        <h1>Skills</h1>
        <div className={classes.Grid_container}>
          <Skills skill={skillList} />
        </div>
      </div>
    </Layout>
  );
};

export default About;
