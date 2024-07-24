
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
function App() {
  let apiKey = "8b3eaf4efbd0499f8119502e51e109f8"
  const [mode, setMode] = useState("light")
  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  let pageSize = 8

  return (

    <>
      <Router>

        <Navbar mode={mode} ToggleMode={ToggleMode} />

        <Routes>
          <Route exact path="/" element={<News key="general" apiKey={apiKey} mode={mode} pageSize={pageSize} country="in" category='general' />}></Route>
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} mode={mode} pageSize={pageSize} country="in" category='business' />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainmen" apiKey={apiKey} mode={mode} pageSize={pageSize} country="in" category='entertainment' />}></Route>
          <Route exact path="/general" element={<News key="general" mode={mode} apiKey={apiKey} pageSize={pageSize} country="in" category='general' />}></Route>
          <Route exact path="/health" element={<News key="health" mode={mode} apiKey={apiKey} pageSize={pageSize} country="in" category='health' />}></Route>
          <Route exact path="/science" element={<News key="science" mode={mode} apiKey={apiKey} pageSize={pageSize} country="in" category='science' />}></Route>
          <Route exact path="/sports" element={<News key="sports" mode={mode} apiKey={apiKey} pageSize={pageSize} country="in" category='sports' />}></Route>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} mode={mode} pageSize={pageSize} country="in" category='technology' />}></Route>

        </Routes>
      </Router>
    </>

  );
}

export default App;
