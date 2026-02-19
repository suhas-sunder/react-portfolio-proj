import { useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Pages/Home";
import ProjectOverview from "./components/Pages/ProjOverview";
import NavBar from "./components/Navigation/NavBar";
import { Helmet } from "react-helmet";
import Footer from "./components/Layout/Footer";

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

  const location = useLocation();

  //Scroll page to top on page transitions
  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, [location]);

  return (
    <div className="bg-slate-800">
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
        <Route path="/Projects">
          <Route
            path=""
            element={<Home handleModal={handleModal} showModal={showModal} />}
          />
          <Route
            path="alltracksystem"
            element={<ProjectOverview projName="All Track System" />}
          />
          <Route
            path="emegroupinc."
            element={<ProjectOverview projName="EME Group Inc." />}
          />
          <Route
            path="reactportfolio"
            element={<ProjectOverview projName="React Portfolio" />}
          />
          <Route
            path="capstonesparcds"
            element={<ProjectOverview projName="Capstone SPArcDS" />}
          />
          <Route
            path="dobsonpartners"
            element={<ProjectOverview projName="Dobson Partners" />}
          />
          <Route
            path="freetypingcamp"
            element={<ProjectOverview projName="Free Typing Camp" />}
          />
        </Route>
        <Route
          path="*"
          element={
            <h2 className="flex text-black w-full h-[100vh] justify-center items-center text-4xl">
              😞 404 Page Not Found !
            </h2>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
