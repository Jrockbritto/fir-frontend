import React, { createContext, useEffect, useState } from "react";
import { clearInterval, setInterval } from "worker-timers";

type CounterIndexContext = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isStopped: boolean;
  setIsStopped: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CounterContext = createContext<CounterIndexContext>(
  {} as CounterIndexContext,
);

export function CounterContextFunction(props: { children: React.ReactNode }) {
  const [time, setTime] = useState<number>(0);
  const [isStopped, setIsStopped] = useState<boolean>(true);

  const { children } = props;

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
    <CounterContext.Provider
      value={{
        time,
        setTime,
        isStopped,
        setIsStopped,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
