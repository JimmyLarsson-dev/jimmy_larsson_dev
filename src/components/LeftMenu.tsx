import "../style/leftMenu.css";
import linkedin from "../assets/images/LI-In-Bug.png"
import mail from "../assets/images/mail.png"
import phone from "../assets/images/phone.png"


export default function LeftMenu() {
    return (
        <div className="leftContactOptionsContainer">
            <div className="phoneContainer">
                <img className="phoneImage" src={phone} alt="Phone"></img>
            </div>
            <div className="emailContainer">
                <img className="emailImage" src={mail} alt="Email"></img>
            </div>
            <div className="linkedinContainer">
                <img className="linkedinImage" src={linkedin} alt="Linkedin"></img>
            </div>

        </div>
    );
}
