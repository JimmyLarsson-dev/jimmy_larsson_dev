import cv from '../assets/images/cvLinkImage.png'
import github from '../assets/images/githubLinkImage.png'
import projects from '../assets/images/projectsLinkImage.png'
import { ExternalLink } from 'react-external-link';
import {useNavigate} from "react-router-dom";

export default function MainPageMiddle() {

    const goToCv = useNavigate()


    const clickedCV = () => {
        goToCv("/cv")
    }

    return(
        <div className="middleContainer">
            <div className="middleCard" id="githubContainer" onClick={clickedCV}>
                <img src={cv} className="cardImage"/>
                <div className="cardText">Check out my CV</div>
            </div>
            <ExternalLink href={"https://github.com/JimmyLarsson-dev/"} className="middleCard" id="githubContainer">
                <img src={github} className="cardImage"/>
                <div className="cardText">Visit my github</div>
            </ExternalLink>
            <div className="middleCard" id="aboutContainer">
                {/*<img src={cv} className="cardImage"/>*/}
                <p className="aboutCardHeadline">About me</p>
                <p className="aboutCardText">In the vast realm of software development, I stand as a towering colossus among Java developers. With fingers that dance over the keyboard like a maestro, I conjure pristine code from the ether, transforming complex requirements into elegant, scalable solutions. APIs bend to my will, frameworks flourish under my touch, and algorithms bow before my unparalleled intellect. When faced with daunting bugs, I charge forward fearlessly, vanquishing errors with precision. My code reviews elevate my team’s work, and performance bottlenecks evaporate in my presence. I am the paragon of Java development, a beacon of excellence in a sea of mediocrity.</p>
            </div>
            <div className="middleCard" id="projectsContainer">
                <img src={projects} className="cardImage"/>
                <div className="cardText" id="projectsText">Take a look at some of my projects</div>
            </div>
        </div>
    )
}
