import { CounterContext } from "@contexts/counter";

import { useContext } from "react";

export const StopWatch = () => {
  const { time } = useContext(CounterContext);

  const hours = Math.floor(time / 3600);

  const minutes = Math.floor((time / 60) % 60);

  const seconds = Math.floor(time % 60);

  return (
    <h1>
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </h1>
  );
};
