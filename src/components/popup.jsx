import React from "react";
import NewPage from "./newpage";
const PopUp = (props) => {
  const { setbuttonToTriggerPopUp, buttonToTriggerPopUp, triggerConditionals } =
    props;
  const INNER_POPUP_STYLE = {
    width: "650px",
    color: "#000000",
    background: "white",
    padding: "50px",
    textAlign: "center",
  };
  const MAIN_POP = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(0,0,0,0.7)",
    zIndex: 999,
  };
  return triggerConditionals ? (
    <div className="main-pop" style={MAIN_POP}>
      <div className="inner-popup" style={INNER_POPUP_STYLE} id="popup">
        <h1>Hello</h1>
        <p>
          This is a pop up. <br /> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A fuga eum sapiente ratione tempora veniam odio
          corrupti, praesentium natus optio consequatur dignissimos deserunt
          voluptas nihil quam amet distinctio maiores voluptatibus.
        </p>
        <p
          className="closepop"
          style={{ cursor: "pointer" }}
          onClick={() => setbuttonToTriggerPopUp(!buttonToTriggerPopUp)}
        >
          Close
        </p>
      </div>
    </div>
  ) : (
    ""
  );
};
export default PopUp;
