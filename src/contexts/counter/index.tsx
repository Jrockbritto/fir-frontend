import React, { createContext, useState } from "react";

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
