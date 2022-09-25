import { Link, Router, Routes, Route } from "react-router-dom";
import CameraPage from "./CameraPage";
import Introduce from "./Introduce";
import Main from "./Main";
import ViewA from "./viewA/ViewA";
import ViewA2 from "./viewA/ViewA2";
import GuideQuit from "./viewA/GuideQuit";
import GuideStop from "./viewA/GuideStop";
import AutoComeback from "./viewA/AutoComeback";
import Restart from "./viewA/Restart";
import Distance from "./viewA/Distance";
import ViewS from "./ViewS";
import "../styles/main.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="ViewA" element={<ViewA />} />
        <Route path="ViewA2" element={<ViewA2 />} />
        <Route path="GuideQuit" element={<GuideQuit />} />
        <Route path="GuideStop" element={<GuideStop />} />
        <Route path="AutoComeback" element={<AutoComeback />} />
        <Route path="Restart" element={<Restart />} />
        <Route path="Distance" element={<Distance />} />

        <Route path="ViewS" element={<ViewS />} />
        <Route path="Introduce" element={<Introduce />} />
        <Route path="CameraPage" element={<CameraPage />} />
      </Routes>
    </div>
  );
}

export default App;
