import "./styles/allStyles.scss"

import React from "react";
import Navbar from "./components/Navbar";
import SearchLine from "./components/SearchLine";
import MainContent from "./components/MainContent";

function App() {
  
  return (
    <div className="App">
      <div className="main">
        <Navbar></Navbar>
        <div className="main_content">
          <SearchLine></SearchLine>
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  );
} 

export default App;
