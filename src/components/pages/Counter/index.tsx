"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import NextNProgress from "nextjs-progressbar";

import { StyledCounter } from "./Counter.style";
import { pause, play } from "./ConterData";
import { Header } from "components/Header/Header";
import { handleCounter } from "api/services/counter";

export default function Counter(props: any) {
  const { user } = props;
  const [isStopped, setIsStopped] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line no-unused-vars
  const router = useRouter();

  const handleCLick = async (event: any) => {
    event.preventDefault();
    setIsStopped(!isStopped);
    await handleCounter(user.token);
    return;
  };
  // eslint-disable-next-line no-unused-vars
  const teste = () => <div> estou carregando</div>;

  useEffect(() => {
    let intervalId: any;
    if (!isStopped) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isStopped, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <NextNProgress />
      <StyledCounter>
        <Header />
        <div
          className="main"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            background: "#F7F8F9",
          }}
        >
          <div>
            <h2>Hey, {user.user.name as String} 🤙</h2>
            <h4>Designer de produto</h4>
          </div>
          <div className="counter">
            <div className={`c-loader ${isStopped && "pause"}`}></div>
            <div className="inner">
              <p>Horas contabilizadas hoje</p>
              <h1>
                {hours.toString().padStart(2, "0")}:
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </h1>
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </StyledCounter>
    </Suspense>
  );
}
