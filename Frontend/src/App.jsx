import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
