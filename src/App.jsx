import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <h2>Hello, I'm Jun Jie</h2>
      <p style={{ textAlign: "center", margin: 10, maxWidth: 400 }}>
        As a teenager, I was always intrigued by people using their technical
        ability in information technology to do amazing things but didn’t have
        the courage to try it out myself. Hence, I proceeded to do my Diploma in
        Marine Science and Aquaculture. After my internship, I am more affirmed
        that I want to be in the tech industry hence I took a leap of faith to
        try out programming and immediately fell in love.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 32,
        }}
      >
        <a href="https://www.linkedin.com/in/cheo-jun-jie/">Linkedin</a>
        <a href="https://www.canva.com/design/DAFVLAOSWVU/xXqZNdYVQwhW7Y6YsZgVTA/view?utm_content=DAFVLAOSWVU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          Resume
        </a>
        <a href="https://github.com/applecheo">Github</a>
      </div>
    </>
  );
}

export default App;
