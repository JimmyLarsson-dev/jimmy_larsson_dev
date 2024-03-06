import "../style/leftMenu.css";
import { projectColors } from "../values/projectColors";

Object.entries(projectColors).forEach(([key, value]) => {
  document.documentElement.style.setProperty(`--${key}`, `#${value}`);
});

export default function LeftMenu() {
  return (
    <div className="leftContainer">
      <p>left</p>
    </div>
  );
}
