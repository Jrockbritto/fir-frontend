import React from "react";
import { StyledButtons, StyledHeader } from "./Header.style";
import Avatar from "@mui/material/Avatar";
import { Logout } from "components/pages/Logout";

const Header = () => (
  <StyledHeader>
    <header>
      <div>logo</div>
      <StyledButtons>
        <Avatar sx={{ bgcolor: "#E44A4A" }}>E</Avatar>
        <Logout />
      </StyledButtons>
    </header>
  </StyledHeader>
);

export { Header };
