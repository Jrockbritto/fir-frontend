"use client";
import styles from "../page.module.css";
import Image from "next/image";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import NextNProgress from "nextjs-progressbar";

import { StyledCounter } from "./Counter.style";
import { pause, play } from "./ConterData";
import { Header } from "../components/header/Header";

export default function Counter() {
  const [isStopped, setIsStopped] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const handleCLick = (event: any) => {
    event.preventDefault();
    setIsStopped(!isStopped);
    const res = fetch("http://localhost:3001/time", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    return;
  };
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
          className={styles.main}
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
            <h2>Hey, Elizabeth 🤙</h2>
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
