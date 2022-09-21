import { Link, Router, Routes, Route } from "react-router-dom";
import Camera from "./Camera";
import Introduce from "./Introduce";
import Main from "./Main";
import ViewA from "./viewA/ViewA";
import ViewA2 from "./viewA/ViewA2";
import GuideQuit from "./viewA/GuideQuit";

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
        <Route path="ViewS" element={<ViewS />} />
        <Route path="Introduce" element={<Introduce />} />
        <Route path="Camera" element={<Camera />} />
      </Routes>
    </div>
  );
}

export default App;
