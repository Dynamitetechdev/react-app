import "./App.css";
import AboutUs from "./components/aboutus";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import PopUp from "./components/popup";
import Services from "./components/services";
import WhatWeDo from "./components/whatwedo";
import { useState } from "react";
function App() {
  const [buttonToTriggerPopUp, setbuttonToTriggerPopUp] = useState(false);
  return (
    <div className="App">
      <Navbar
        buttonToTriggerPopUp={buttonToTriggerPopUp}
        setbuttonToTriggerPopUp={setbuttonToTriggerPopUp}
      />
      <PopUp
        triggerConditionals={buttonToTriggerPopUp}
        buttonToTriggerPopUp={buttonToTriggerPopUp}
        setbuttonToTriggerPopUp={setbuttonToTriggerPopUp}
      />
      <Banner />
      <WhatWeDo />
      <Services />
      <AboutUs />
      <Footer
        buttonToTriggerPopUp={buttonToTriggerPopUp}
        setbuttonToTriggerPopUp={setbuttonToTriggerPopUp}
      />
    </div>
  );
}

export default App;
