import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = `#042743`;
      showAlert("! Dark mode has been enabled", "success");
    }
    else {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("! Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* **IMPORTANT **
      For React Router Dom, in React v6 and above:
      Anshika Paliwal
      3 months ago (edited)(May 2022)
      For who so ever has made it till here, might find a blank screen appearing when compiling, so help yourself by making the changes as indicated below:
      First import:
      import {
        BrowserRouter,
        Routes,
        Route,
        Link
      } from "react-router-dom";

      Then,
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          < Route path="/"
            element={<TextForm heading="Enter the text to analyse: " mode={mode} />} />
        </Routes>
      </BrowserRouter>

      The issue is due to upgradation of React from v5 to v6. */}
      <BrowserRouter>
        {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
            /users/home --> Component 2 */}
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, LowerCase to UpperCase, Remove Extra Spaces" mode={mode} />} />
            {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
