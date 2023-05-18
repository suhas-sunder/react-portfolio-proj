import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import ProjectOverview from "./components/Pages/ProjectOverview";
import About from "./components/Pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects">
        <Route
          path="AllTrackSystem"
          element={<ProjectOverview projName="ATS" />}
        />
        <Route
          path="EMEGroupInc"
          element={<ProjectOverview projName="EME" />}
        />
        <Route
          path="Portfolio"
          element={<ProjectOverview projName="Portfolio" />}
        />
        <Route
          path="Capstone"
          element={<ProjectOverview projName="Capstone" />}
        />
      </Route>
      <Route path="*" element={<h2>404 Not Found!</h2>} />
    </Routes>
  );
}

export default App;
