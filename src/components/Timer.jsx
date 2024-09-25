import { useEffect } from "react";

const Timer = ({
  sessionActive,
  timeLeft,
  startStop,
  resetTimer,
  audioRef,
}) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  useEffect(() => {
    if (timeLeft === 0 && audioRef.current) {
      audioRef.current.play();
    }
  }, [timeLeft, audioRef]);

  return (
    <div id="timer">
      <h2 id="timer-label">{sessionActive ? "Session" : "Break"}</h2>
      <span id="time-left">{formatTime(timeLeft)}</span>
      <button id="start_stop" onClick={startStop}>
        Start/Stop
      </button>
      <button id="reset" onClick={resetTimer}>
        Reset
      </button>
      <audio
        id="beep"
        ref={audioRef}
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
};

export default Timer;
