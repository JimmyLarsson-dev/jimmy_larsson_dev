import Start from "./screens/Start";
import "./style/app.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cv from "./components/Cv";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>} />
                <Route path="/cv" element={<Cv/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
