import { TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";

const Controls = ({
  breaklength,
  sessionlength,
  breakDecrement,
  breakIncrement,
  sessionIncrement,
  sessionDecrement,
}) => {
  return (
    <div id="controls">
      <div id="break-control">
        <h2 id="break-label">Break Length</h2>
        <TiArrowDownThick className="arrow" id="break-decrement" onClick={breakDecrement} />
        <span id="break-length">{breaklength}</span>
        <TiArrowUpThick  className="arrow" id="break-increment" onClick={breakIncrement} />
      </div>
      <div id="session-control">
        <h2 id="session-label">Session Length</h2>
        <TiArrowDownThick className="arrow" id="session-decrement" onClick={sessionDecrement}  />

        <span id="session-length">{sessionlength}</span>
        <TiArrowUpThick className="arrow" id="session-increment" onClick={sessionIncrement} />
      </div>
    </div>
  );
};
export default Controls;
