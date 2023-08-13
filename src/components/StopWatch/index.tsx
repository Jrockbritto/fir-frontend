import { CounterContext } from "@contexts/counter";

import { useContext } from "react";

export const StopWatch = () => {
  const { elapsed, start, now } = useContext(CounterContext);

  const value = now - start + elapsed;
  console.log("elapsed", elapsed, "now", now, "start", start, value);

  const time = value >= elapsed ? value : elapsed;

  const hours = Math.floor(time / 3600000);

  const minutes = Math.floor((time / 60000) % 60);

  const seconds = Math.floor((time / 1000) % 60);

  return (
    <h1>
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </h1>
  );
};
