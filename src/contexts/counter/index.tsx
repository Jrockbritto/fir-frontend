import React, { createContext, useEffect, useState } from "react";
import { clearInterval, setInterval } from "worker-timers";

type CounterIndexContext = {
  start: number;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  elapsed: number;
  setElapsed: React.Dispatch<React.SetStateAction<number>>;
  now: number;
  setNow: React.Dispatch<React.SetStateAction<number>>;
  isStopped: boolean;
  setIsStopped: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CounterContext = createContext<CounterIndexContext>(
  {} as CounterIndexContext,
);

export function CounterContextFunction(props: { children: React.ReactNode }) {
  const [now, setNow] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [elapsed, setElapsed] = useState<number>(0);
  const [isStopped, setIsStopped] = useState<boolean>(true);

  const { children } = props;

  const time = now - start + elapsed;

  useEffect(() => {
    let intervalId: any;

    if (!isStopped) {
      setElapsed(() => time);
      setStart(Date.now());
      intervalId = setInterval(() => {
        setNow(() => Date.now());
        setElapsed(() => time);
      }, 10);
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
        start,
        setStart,
        now,
        setNow,
        elapsed,
        setElapsed,
        isStopped,
        setIsStopped,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
