"use client";
import styles from "../page.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { StyledCounter } from "./Counter.style";

export default function Counter() {
  const [isStopped, setIsStopped] = useState<boolean>(false);
  return (
    <StyledCounter>
      <div className={styles.main} style={{ width: "100%" }}>
        <div className={`c-loader ${isStopped && "pause"}`}>
          <div className="inner"> </div>
        </div>
        <div className="inner">teste</div> teste
        <button onClick={() => setIsStopped(!isStopped)} className="button">
          {isStopped ? "iniciar contador" : "pausar contador"}
        </button>
      </div>
    </StyledCounter>
  );
}
