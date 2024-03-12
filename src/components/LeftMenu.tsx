import "../style/leftMenu.css";
import linkedin from "../assets/images/LI-In-Bug.png"
import mail from "../assets/images/mail.png"
import phone from "../assets/images/phone.png"


export default function LeftMenu() {
    return (
        <>
            <div>
                <img className="phoneImage" src={phone} alt="Phone"></img>
            </div>
            <div>
                <img className="emailImage" src={mail} alt="Email"></img>
            </div>
            <div>
                <img className="linkedinImage" src={linkedin} alt="Linkedin"></img>
            </div>

        </>
    );
}
