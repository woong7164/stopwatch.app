import React from "react";
import { List, Item } from "./List";

const Laps = ({ laps }) => {
  const bestLap = Math.min(...laps);
  const worstLap = Math.max(...laps);

  return (
    <List>
      {laps.map((lap, i) => {
        const isBestLap = lap === bestLap;
        const isWorstLap = lap === worstLap;
        const getLapStatus = () => {
          if (isBestLap && isWorstLap) return;
          if (isBestLap) {
            return "best";
          } else if (isWorstLap) {
            return "worst";
          }
          return null;
        };
        return (
          <Item key={i} status={getLapStatus()}>
            Lap {i + 1}
            <span>{+lap.toFixed(1)}s</span>
          </Item>
        );
      })}
    </List>
  );
};

export default Laps;
