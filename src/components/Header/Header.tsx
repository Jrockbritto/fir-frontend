import { LogoutComponent } from "@components/pages/Logout";

import { StyledButtons, StyledHeader } from "./Header.style";

import Avatar from "@mui/material/Avatar";
import React from "react";

const Header = (props: { token?: string }) => {
  const { token } = props;

  if (!token) return <></>;

  return (
    <StyledHeader>
      <header>
        <div>logo</div>
        <StyledButtons>
          <Avatar sx={{ bgcolor: "#E44A4A" }}>E</Avatar>
          <LogoutComponent />
        </StyledButtons>
      </header>
    </StyledHeader>
  );
};

export { Header };
