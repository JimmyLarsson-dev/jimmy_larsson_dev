import "../style/mainPage.css";
import MainPageTop from "./MainPageTop";
import MainPageBottom from "./MainPageBottom";
import MainPageMiddle from "./MainPageMiddle";

export default function MainPage() {

    return (
        <div className="mainPageContainer">
            <div className="mainPageTop">
                <MainPageTop/>
            </div>
            <MainPageMiddle/>
            <MainPageBottom/>
        </div>
    );
}
