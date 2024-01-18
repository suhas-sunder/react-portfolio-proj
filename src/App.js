import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import ProjectOverview from "./components/Pages/ProjOverview";
import About from "./components/Pages/About";
import NavBar from "./components/Navigation/NavBar";
import { Helmet } from "react-helmet";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    const elements = [
      document.getElementsByTagName("html"),
      document.getElementsByTagName("body"),
    ];

    // Lock scroll when modal is active
    elements.forEach(
      (element) =>
        (element[0].style.overflow = `${showModal ? "auto" : "hidden"}`)
    );

    // Hide/show modal
    setShowModal(!showModal);
  };

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Suhas Sunder</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio! Here you will find a showcase of my skills, list of projects and work done, link to resume, and contact information."
        />
      </Helmet>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home handleModal={handleModal} showModal={showModal} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Projects">
          <Route
            path="AllTrackSystem"
            element={
              <ProjectOverview
                projName="All Track System"
                handleModal={handleModal}
                showModal={showModal}
              />
            }
          />
          <Route
            path="EMEGroupInc"
            element={
              <ProjectOverview
                projName="EME Group Inc."
                handleModal={handleModal}
                showModal={showModal}
              />
            }
          />
          <Route
            path="Portfolio"
            element={
              <ProjectOverview
                projName="React Portfolio"
                handleModal={handleModal}
                showModal={showModal}
              />
            }
          />
          <Route
            path="Capstone"
            element={
              <ProjectOverview
                projName="Capstone SPArcDS"
                handleModal={handleModal}
                showModal={showModal}
              />
            }
          />
        </Route>
        <Route path="*" element={<h2>404 Not Found!</h2>} />
      </Routes>
    </>
  );
}

export default App;
