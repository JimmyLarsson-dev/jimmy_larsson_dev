import "../style/header.css";
import ContactsButton from "./ContactsButton";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLeftSide">
        <p>header</p>
      </div>
      <div className="headerRightSide">
        <ContactsButton />
      </div>
    </div>
  );
}
