import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import AppDesign from "./routes/AppDesign";
import Contact from "./routes/Contact";
import GraphicDesign from "./routes/GraphicDesign";
import Home from "./routes/Home";
import Locations from "./routes/Locations";
import WebDesign from "./routes/WebDesign";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="appdesign" element={<AppDesign></AppDesign>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route
          path="graphicdesign"
          element={<GraphicDesign></GraphicDesign>}
        ></Route>
        <Route path="locations" element={<Locations></Locations>}></Route>
        <Route path="webdesign" element={<WebDesign></WebDesign>}></Route>
      </Routes>
    </div>
  );
}

export default App;
