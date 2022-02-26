import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import classes from './Home.module.css';
import 'react-typist/dist/Typist.css';
import Typist from 'react-typist';
import WarpSpeed from '../../components/UI/Warpspeed/warpspeed';



const Home = (props) => {
    let navigate = useNavigate();

    useEffect(()=> {
        let x = new WarpSpeed("canvas");
        x.TARGET_SPEED=5;
        // x.STAR_R=235;
        // x.STAR_G=101;
        // x.STAR_B=52;
        // x.BACKGROUND_COLOR="#35CE8D";
        // x.STAR_SCALE="3";
    }, []);
        
        const warpStyle = {
            postion: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
        }
        return(
                <div className={classes.Banner}>
                   <canvas id="canvas" style={warpStyle}></canvas>
                   <Typist className={classes.Text} cursor={{show: false,
                     blink: true,
                     element: '|',
                     hideWhenDone: true,
                     hideWhenDoneDelay: 0
                    }}>
                        <h1>Hi, I'm Jacques Agbenu</h1>
                        <Typist.Delay ms={500} />
                        <p>Full Stack Web Developer</p>
                        <Typist.Delay ms={600} />
                        <button className={classes.Button}
                        onClick={()=>navigate('/about')}>
                            Let's Begin...
                        </button>
                   </Typist> 
                </div>
        );
};

export default Home;