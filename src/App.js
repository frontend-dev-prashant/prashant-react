// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  // By default dark mode in react app
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar
        aboutname="About"
        mode={mode}
        toggleMode={toggleMode}
        contactname="Contact"
      />
      <Form mode={mode} />
      {/* <About /> */}
    </>
  );
}
export default App;
