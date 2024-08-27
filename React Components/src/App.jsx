import { useEffect, useState } from "react";
import "./App.scss";
import { LandingPage } from "./pages/LandingPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  const [currentPage, setCurrentPage] = useState("front-page");

  useEffect(() => {
    document.title = currentPage;
  })

  if (currentPage == "front-page") {
    return (
      <>
        <LandingPage />
      </>
    )
  }

  if (currentPage == "about-page") {
    return (
      <>
        <AboutPage />
      </>
    )
  }

  else {
    <h4>Page not found</h4>
  }
  // return (
  //   <>
  //     <Nav theme="dark">
  //       <Burgermenu theme="light" />
  //     </Nav>
  //     <Main theme="light">
  //       <Modal theme="darkMode"></Modal>
  //     </Main>
  //   </>
  // );
}

export default App;
