import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

function Test() {
  const [ratings, setOnRating] = useState(0);
  return (
    <div>
      <StarRating color="Blue" onSetRating={(e) => setOnRating(e)}></StarRating>
      <p>This movie was rated {ratings} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={"3"}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    ></StarRating>
    <StarRating maxRating={10} color="red" size={24}></StarRating>
    <StarRating color="green" defaultRating="4"></StarRating>
    <Test></Test> */}
  </React.StrictMode>
);
