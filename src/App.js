import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";

import "../src/styles/App.scss"
import "../src/styles/Header.scss"
import "../src/styles/Home.scss"



function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        {/* <Footer/> */}
      </Router>

    </div>
  );
}

export default App;
