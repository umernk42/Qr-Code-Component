import React from "react";
import "./App.css";
import QrCode from "./assets/images/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="Qr-Image">
        <img src={QrCode} alt="Qr Code" />
      </div>
      <h1>
        Improve your front-end skills by building projects
      </h1>
      <p>
        Scan the QR code to visit Front End Mentor and take your
        coding skills to the next level
      </p>
    </div>
  );
}

export default App;
