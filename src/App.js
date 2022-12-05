import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether the dark mode is enabled or not
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert("");
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About us"/> */}
        {/* <Navbar/> */}
        <Navbar
          title="TextAnalyzer"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <Alert alert={alert} />
        <div className="container w-75 my-4">
          <Switch>
              <Route path="/" element={ <TextForm heading="Try TextAnalyzer - Word Counter, Character Counter, Remove Extra Spaces with some other features" mode={mode} showAlert={showAlert}/>}/>
              <Route path="/About" element={<About mode={mode}/>}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
