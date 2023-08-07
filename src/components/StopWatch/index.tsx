import { CounterContext } from "@components/pages/Counter";

import { useContext, useEffect } from "react";

export const StopWatch = () => {
  const [time] = useContext(CounterContext);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 3600) / 60000);

  const seconds = Math.floor((time % 100) / 1000);

  useEffect(() => console.log("time", time), [time]);

  return (
    <h1>
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </h1>
  );
};
