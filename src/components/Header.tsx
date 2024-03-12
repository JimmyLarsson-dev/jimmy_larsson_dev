import "../style/header.css";
import ContactsButton from "./ContactsButton";


const clickedContactButton = () => {

}


export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLeftSide">
        <p>Jimmy Larsson</p>
      </div>
      <div className="headerRightSide">
        <ContactsButton />
      </div>
    </div>
  );
}
