"use client";

import { Header } from "@components/Header/Header";
import { StopWatch } from "@components/StopWatch";

import { handleCounter } from "@api/services/counter";

import { pause, play } from "./ConterData";
import { StyledCounter } from "./Counter.style";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/navigation";
// eslint-disable-next-line no-unused-vars
import NextNProgress from "nextjs-progressbar";
// eslint-disable-next-line no-unused-vars
import React, { useState, Suspense, createContext } from "react";
import { clearInterval, setInterval } from "worker-timers";

export const CounterContext = createContext<number[]>([]);

export default function Counter(props: any) {
  const { user } = props;
  const [isStopped, setIsStopped] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line no-unused-vars
  const router = useRouter();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
  };

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  const handleCLick = (event: any) => {
    event.preventDefault();
    handleCounter(user.token);
    setIsStopped(!isStopped);
    console.log("isStopped", isStopped);
    counter();
  };
  const handleInterval = () => {
    return setInterval(() => setTime(time + 1000), 1000);
  };

  const counter = () => {
    let intervalId;
    console.log("starting", isStopped);
    if (!isStopped) {
      intervalId = handleInterval();
    } else {
      console.log("stopping", intervalId);
      if (intervalId) return clearInterval(intervalId);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const teste = () => <div> estou carregando</div>;

  return (
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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Hoje" {...a11yProps(0)} />
          <Tab label="Histórico de registros" {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <div>
            <h2>Hey, {user.user.name} 🤙</h2>
            <h4>Designer de produto</h4>
          </div>
          <CounterContext.Provider value={[time]}>
            <div className="counter">
              <div className={`c-loader ${isStopped && "pause"}`}></div>
              <div className="inner">
                <p>Horas contabilizadas hoje</p>
                <StopWatch />
              </div>
            </div>
          </CounterContext.Provider>
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div>
            <h2>Histórico de registros</h2>
            <p>Exibindo 5 de 76 registros</p>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </div>
        </CustomTabPanel>
      </div>
    </StyledCounter>
  );
}
