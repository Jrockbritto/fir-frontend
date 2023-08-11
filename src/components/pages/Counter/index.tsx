"use client";

import { CounterComponent } from "@components/CounterComponent";
import { CustomTabPanel } from "@components/TabPanels";
import { TimeListing } from "@components/TimeListing";

import useUser from "@lib/user/useUser";

import { StyledTab } from "@styles/tab";

import { StyledCounter, TabsWrapper } from "./Counter.style";
import { CounterPageProps } from "./typings";

import { Tabs } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Counter(props: CounterPageProps) {
  const { user } = props;

  console.log("user", user);

  useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  return (
    <StyledCounter>
      <TabsWrapper>
        <div>
          <h2>Hey, {user.userData.name} 🤙</h2>
          <h4>Designer de produto</h4>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              color: "#272727",
              backgroundColor: "#0fba91",
            },
          }}
        >
          <StyledTab label="Hoje" {...a11yProps(0)} />
          <StyledTab label="Histórico de registros" {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <CounterComponent user={user} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TimeListing user={user} />
        </CustomTabPanel>
      </TabsWrapper>
    </StyledCounter>
  );
}
