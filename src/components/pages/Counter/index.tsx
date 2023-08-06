"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import NextNProgress from "nextjs-progressbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import

import { StyledCounter } from "./Counter.style";
import { pause, play } from "./ConterData";
import { Header } from "components/Header/Header";
import { handleCounter } from "api/services/counter";

export default function Counter(props: any) {
  const { user } = props;
  const [isStopped, setIsStopped] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
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
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  const handleCLick = async (event: any) => {
    event.preventDefault();
    setIsStopped(!isStopped);
    await handleCounter(user.token);
    return;
  };
  

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
  );
}
