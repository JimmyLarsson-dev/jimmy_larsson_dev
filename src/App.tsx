import Start from "./screens/Start";
import LeftMenu from "./components/LeftMenu";
import "./style/app.css";

function App() {
  return (
    <div className="appContainer">
      <div className="leftContainer">
        <LeftMenu />
      </div>
      <div className="startDiv">
        <Start />
      </div>
    </div>
  );
}

export default App;
