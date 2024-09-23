import { useState } from "react";
import "./App.css";
import Controls from "./components/Controls";

function App() {
  const [breaklength, setBreakLength] = useState(5);
  const [sessionlength, setSessionLength] = useState(25);
  const breakDecrement = () => {
    if (breaklength < 60) setBreakLength(breaklength - 1);
  };
  const breakIncrement = () => {
    if (breaklength > 1) setBreakLength(breaklength + 1);
  };
  const sessionIncrement = () => {
    if (sessionlength > 1) setSessionLength(sessionlength + 1);
  };
  const sessionDecrement = () => {
    if (sessionlength < 60) setSessionLength(sessionlength - 1);
  };
  return (
    <center>
      <h1 style={{ fontSize: "4rem" }}>Pomodoro Clock</h1>
      <Controls
        breaklength={breaklength}
        sessionlength={sessionlength}
        breakDecrement={breakDecrement}
        breakIncrement={breakIncrement}
        sessionIncrement={sessionIncrement}
        sessionDecrement={sessionDecrement}
      />
    </center>
  );
}

export default App;
