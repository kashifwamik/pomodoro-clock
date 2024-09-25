import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Timer from "./components/Timer";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionActive, setSessionActive] = useState(true);

  const timerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  const startStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            audioRef.current.play();
            if (sessionActive) {
              setSessionActive(false);
              return breakLength * 60;
            } else {
              setSessionActive(true);
              return sessionLength * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
    setSessionActive(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const breakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const breakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const sessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const sessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
    }
  };

  return (
    <center>
      <h1 style={{ fontSize: "4rem" }}>Pomodoro Clock</h1>
      <Controls
        breakLength={breakLength}
        sessionLength={sessionLength}
        breakDecrement={breakDecrement}
        breakIncrement={breakIncrement}
        sessionIncrement={sessionIncrement}
        sessionDecrement={sessionDecrement}
      />
      <Timer
        timeLeft={timeLeft}
        startStop={startStop}
        resetTimer={resetTimer}
        sessionActive={sessionActive}
        audioRef={audioRef}
      />
    </center>
  );
}

export default App;
