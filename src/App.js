// import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharacterList from "./components/CharacterList"
import Welcome from "./components/Welcome"
import CharacterDetails from "./components/CharacterDetails";
import SearchResuts from "./components/SearchResults";
import Header from "./components/Header";
import "animate.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      

      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route
          path="/characters/:selection"
          element={<CharacterList />}
        ></Route>
        <Route path="/character/:id" element={<CharacterDetails />}></Route>
        <Route path="/search/:param" element={<SearchResuts />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
