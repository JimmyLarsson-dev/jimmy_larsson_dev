import javaBW from "../assets/images/java_bw.png";
import reactBW from "../assets/images/React-icon_bw.png";
import typescriptBW from "../assets/images/typescript_bw.png";
import javascriptBW from "../assets/images/js_bw.png";
import postgresBW from "../assets/images/PostgreSQL_logo_bw.png";
import springbootBW from "../assets/images/springBoot_bw.png";
import gitBW from "../assets/images/Git_icon_bw.png";
import scrumBW from "../assets/images/scrum_bw.png";
import typeScriptC from "../assets/images/typescript.png"
import javaC from "../assets/images/java.png"
import reactC from "../assets/images/React-icon.svg.png"
import "../style/mainPage.css"
import {useState} from "react";
import javaScriptC from "../assets/images/js_color.png"
import postgresC from "../assets/images/PostgreSQL_logo.3colors.540x557.png"
import springbootC from "../assets/images/springBoot.png"
import gitC from "../assets/images/Git_icon.svg.png"
import scrumC from "../assets/images/scrum.png"

export default function MainPageBottom() {

    const [typeScriptColor, setTypeScriptColor] = useState(false);
    const [javaColor, setJavaColor] = useState(false);
    const [reactColor, setReactColor] = useState(false);
    const [javaScriptColor, setJavaScriptColor] = useState(false);
    const [postgresColor, setPostgresColor] = useState(false);
    const [springbootColor, setSpringbootColor] = useState(false);
    const [gitColor, setGitColor] = useState(false);
    const [scrumColor, setScrumColor] = useState(false);

    return (
        <div className="mainPageBottom">
            <div className="javaContainer" id="imageContainer">
                <img
                    onMouseOver={() => setJavaColor(true)}
                    onMouseLeave={() => setJavaColor(false)}
                    id="javaImage"
                    src={javaColor? javaC : javaBW}
                    alt="Java"/>
            </div>
            <div className="reactContainer" id="imageContainer">
                <img
                    onMouseOver={() => setReactColor(true)}
                    onMouseLeave={() => setReactColor(false)}
                    id="image"
                    src={reactColor? reactC : reactBW}
                    alt="React and React Native"/>
            </div>
            <div className="typescriptContainer" id="imageContainer">
                <img
                    onMouseOver={() => setTypeScriptColor(true)}
                    onMouseLeave={() => setTypeScriptColor(false)}
                    id="image"
                    src={typeScriptColor? typeScriptC : typescriptBW} alt="Typescript"/>
            </div>
            <div className="javascriptContainer" id="imageContainer">
                <img
                    onMouseOver={() => setJavaScriptColor(true)}
                    onMouseLeave={() => setJavaScriptColor(false)}
                    id="image"
                    src={javaScriptColor ? javaScriptC : javascriptBW}
                    alt="JavaScript"/>
            </div>
            <div className="postgresqlContainer" id="imageContainer">
                <img
                    onMouseOver={() => setPostgresColor(true)}
                    onMouseLeave={() => setPostgresColor(false)}
                    id="image"
                    src={postgresColor? postgresC : postgresBW}
                    alt="PostgreSQL"/>
            </div>
            <div className="springbootContainer" id="imageContainer">
                <img
                    onMouseOver={() => setSpringbootColor(true)}
                    onMouseLeave={() => setSpringbootColor(false)}
                    id="image"
                    src={springbootColor? springbootC : springbootBW}
                    alt="Spring Boot"/>
            </div>
            <div className="gitContainer" id="imageContainer">
                <img
                    onMouseOver={() => setGitColor(true)}
                    onMouseLeave={() => setGitColor(false)}
                    id="image"
                    src={gitColor? gitC : gitBW}
                    alt="Git"/>
            </div>
            <div className="scrumContainer" id="imageContainer">
                <img
                    onMouseOver={() => setScrumColor(true)}
                    onMouseLeave={() => setScrumColor(false)}
                    id="image"
                    src={scrumColor? scrumC : scrumBW}
                    alt="Scrum"/>
            </div>


        </div>
    )
}
