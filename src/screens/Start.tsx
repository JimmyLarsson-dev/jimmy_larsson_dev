import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import "../style/start.css";

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
