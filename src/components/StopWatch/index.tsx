import { CounterContext } from "@contexts/counter";

import { useContext, useEffect } from "react";
import { clearInterval, setInterval } from "worker-timers";

export const StopWatch = () => {
  const { time, isStopped, setTime } = useContext(CounterContext);

  const hours = Math.floor(time / 3600);

  const minutes = Math.floor((time / 60) % 60);

  const seconds = Math.floor(time % 60);

  useEffect(() => {
    let intervalId: any;

    if (!isStopped) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
        console.log(time);
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isStopped]);

  return (
    <h1>
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </h1>
  );
};
