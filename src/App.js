import React from "react";
import "./App.css";
import HomeContainer from "./container/HomeContainer";
import NavbarContainer from "./container/NavbarContainer";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavbarContainer />
        <HomeContainer />
      </div>
    </React.Fragment>
  );
}

export default App;
