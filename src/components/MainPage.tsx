import "../style/mainPage.css";

import javaBW from "../assets/images/java_bw.png"
import reactBW from "../assets/images/React-icon_bw.png"
import typescriptBW from "../assets/images/typescript_bw.png"
import javascriptBW from "../assets/images/js_bw.png"
import postgresBW from "../assets/images/PostgreSQL_logo_bw.png"
import springbootBW from "../assets/images/springBoot_bw.png"
import gitBW from "../assets/images/Git_icon_bw.png"
import scrumBW from "../assets/images/scrum_bw.png"

export default function MainPage() {


  return (
      <div className="mainPageContainer">
        <div className="mainPageLeftSide">
          <p>left side</p>
        </div>
        <div className="mainPageRightSide">
          <div className="javaContainer" id="imageContainer">
            <img id="javaImage" src={javaBW} alt="Java"/>
          </div>
          <div className="reactContainer" id="imageContainer">
            <img id="image" src={reactBW} alt="React and React Native"/>
          </div>
          <div className="typescriptContainer" id="imageContainer">
            <img id="image" src={typescriptBW} alt="Typescript"/>
          </div>
          <div className="javascriptContainer" id="imageContainer">
            <img id="image" src={javascriptBW} alt="JavaScript"/>
          </div>
          <div className="postgresqlContainer" id="imageContainer">
            <img id="image" src={postgresBW} alt="PostgreSQL"/>
          </div>
          <div className="springbootContainer" id="imageContainer">
            <img id="image" src={springbootBW} alt="Spring Boot"/>
          </div>
          <div className="gitContainer" id="imageContainer">
            <img id="image" src={gitBW} alt="Git"/>
          </div>
          <div className="scrumContainer" id="imageContainer">
            <img id="image" src={scrumBW} alt="Scrum"/>
          </div>


        </div>

      </div>
  );
}
