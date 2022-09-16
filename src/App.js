// import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import CharacterList from "./components/CharacterList/CharacterList"
import Welcome from "./components/Welcome/Welcome"
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import SearchResuts from "./components/SearchResults";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/characters/:selection" element={<CharacterList />}></Route>
          <Route path="/character/:id" element={<CharacterDetails/>}></Route>
          <Route path="/search/:param" element={<SearchResuts/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
