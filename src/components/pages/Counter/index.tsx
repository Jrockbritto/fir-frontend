"use client";

import { Header } from "@components/Header/Header";
import { StopWatch } from "@components/StopWatch";
import { CustomTabPanel } from "@components/TabPanels";

import useUser from "@lib/user/useUser";

import { handleCounter } from "@api/services/counter";

import { CounterContext } from "@contexts/counter";

import { pause, play } from "./ConterData";
import { StyledCounter } from "./Counter.style";

import { Pagination, Tab, Tabs } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";

export default function Counter(props: any) {
  const { user } = props;

  useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });

  const { isStopped, setIsStopped } = useContext(CounterContext);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  const handleCLick = (event: any) => {
    event.preventDefault();
    handleCounter(user.token);
    setIsStopped(!isStopped);
  };

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
          <h2>Hey, {user.user.name} 🤙</h2>
          <h4>Designer de produto</h4>
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <h2>Histórico de registros</h2>
          <p>Exibindo 5 de 76 registros</p>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </CustomTabPanel>
      </div>
    </StyledCounter>
  );
}
