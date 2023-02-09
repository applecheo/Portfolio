import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Project from "./Project";
import BasicInfo from "./BasicInfo";
import Progress from "./Progress";

function App() {
  return (
    <div>
      <BasicInfo />
      <Project />
      <Progress />
    </div>
  );
}

export default App;
