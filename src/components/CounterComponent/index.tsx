import { pause, play } from "@components/pages/Counter/ConterData";
import { StopWatch } from "@components/StopWatch";

import { handleCounter } from "@api/services/counter";

import { CounterContext } from "@contexts/counter";

import { useContext } from "react";

export function CounterComponent(props: any) {
  const { isStopped, setIsStopped } = useContext(CounterContext);
  const { user } = props;

  const handleCLick = (event: any) => {
    event.preventDefault();
    handleCounter(user.token);
    setIsStopped(!isStopped);
  };

  return (
    <>
      <div className="counter">
        <div className={`c-loader ${isStopped && "pause"}`}></div>
        <div className="inner">
          <p>Horas contabilizadas hoje</p>
          <StopWatch />
        </div>
      </div>
      <>
        <button
          onClick={(e) => handleCLick(e)}
          className={`button ${isStopped ? "stopped" : "active"}`}
        >
          {isStopped ? (
            <>
              <span>Iniciar contador </span>
              <span className="playIcon">{play}</span>
            </>
          ) : (
            <>
              <span> Pausar contador</span>
              <span className="pauseIcon"> {pause}</span>
            </>
          )}
        </button>
      </>
    </>
  );
}
