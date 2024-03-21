import Header from "../components/Header";
import MainPage from "../components/MainPage";
import "../style/start.css";
import {projectColors} from "../values/projectColors";
import {projectFont, projectFontSize} from "../values/fonts";
import {sizes} from "../values/sizes";
import 'bootstrap/dist/css/bootstrap.min.css';

Object.entries(projectColors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, `#${value}`);
});

Object.entries(projectFont).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--font-${key}`, value);
});

Object.entries(projectFontSize).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--font-size-${key}`, `${value}rem`);
});

Object.entries(sizes).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--image-size-${key}`, `${value}px`);
});


export default function Start() {
  return (
    <div className="startContainer">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="mainContainer">
        <MainPage />
      </div>
    </div>
  );
}
