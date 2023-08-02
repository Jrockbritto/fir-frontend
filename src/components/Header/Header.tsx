import React from "react";
import { StyledHeader } from "./Header.style";
import Avatar from "@mui/material/Avatar";

const Header = () => (
  <StyledHeader>
    <header>
      <div>logo</div>
      <div>
        <Avatar sx={{ bgcolor: "#E44A4A" }}>E</Avatar>
      </div>
    </header>
  </StyledHeader>
);

export { Header };
