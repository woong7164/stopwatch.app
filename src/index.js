import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Laps from "./Laps";
import { useStopwatch } from "./customHooks";
import styled from "styled-components";
import "./styles.css";

const StopWatch = () => {
  const {
    laps,
    addLap,
    isRunning,
    elapsedTime,
    startTimer,
    stopTimer,
    resetTimer
  } = useStopwatch();

  const handleStartStop = () => {
    isRunning ? stopTimer() : startTimer();
  };

  const handleLapOrReset = () => {
    isRunning ? addLap() : resetTimer();
  };

  return (
    <Wrap>
      <Timer>{elapsedTime}s</Timer>
      <ButtonWrap>
        <Button disabled={elapsedTime === "0.0"} onClick={handleLapOrReset}>
          {isRunning ? "+Lap" : "Reset"}
        </Button>
        <Button
          onClick={handleStartStop}
          status={isRunning ? "running" : "stopped"}
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
      </ButtonWrap>
      {laps.length > 0 && <Laps laps={laps} />}
    </Wrap>
  );
};

const Timer = styled.h1`
  font-size: 5em;
  font-weight: normal;
`;

const Wrap = styled.div`
  flex: 1;
  color: #fff;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2em;
  font-family: sans-serif;
  font-size: 18px;
`;

const ButtonWrap = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
`;

const StopWatchWrap = styled.div`
  display: flex;
`;

const App = () => (
  <StopWatchWrap>
    <StopWatch />
    {/* 
    <StopWatch />
    */}
  </StopWatchWrap>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
