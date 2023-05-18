import { React, useState } from "react";
import Home from "./components/Pages/Home";
import ProjectOverview from "./components/Pages/ProjectOverview";
import About from "./components/Pages/About";

function App() {
  const [page, setPage] = useState("home");

  const handlePage = routeName => {
    setPage(routeName);
  };

  return (
    <>
      {page === "home" && <Home routePage={handlePage} />}
      {page === "project" && <ProjectOverview routePage={handlePage} />}
      {page === "about" && <About routePage={handlePage} />}
    </>
  );
}

export default App;
