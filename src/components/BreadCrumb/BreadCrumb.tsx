import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/navigation";

import { StyledBreadCrumb } from "./BreadCrumb.style";
import { add, home, edit } from "./BreadCrumb.data";

const Breadcrumb = (props: { actualPage: number }) => {
  const { actualPage } = props;
  const router = useRouter();

  const routes = ["/", "/access-control", "/access-control/AddNewUser"];
  const handleClickHome = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    pagina: number
  ) => {
    event.preventDefault();
    router.push(routes[pagina]);
    console.log(event);
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="0"
      href="/"
      onClick={(e) => handleClickHome(e, 0)}
    >
      <p className={`link ${actualPage === 0 && "applied"}`}>
        {home}
        {actualPage == 0 && <span>Início</span>}
      </p>
    </Link>,
    actualPage >= 1 && (
      <Link
        underline="hover"
        key="1"
        href="/material-ui/getting-started/installation/"
        onClick={(e) => handleClickHome(e, 1)}
      >
        <p className={`link ${actualPage === 1 && "applied"}`}>
          {edit}
          {actualPage == 1 && <span>Controle de acesso</span>}
        </p>
      </Link>
    ),
    actualPage === 2 && (
      <Link
        underline="hover"
        key="2"
        href="/material-ui/getting-started/installation/"
        onClick={(e) => handleClickHome(e, 2)}
      >
        <p className={`link ${actualPage === 2 && "applied"}`}>
          <span>{add}</span>
          {actualPage === 2 && <span>Adicionar integrante</span>}
        </p>
      </Link>
    ),
    ,
  ];
  return (
    <StyledBreadCrumb>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Breadcrumbs
          separator={
            <NavigateNextIcon
              style={{ fill: "#0ca37e", clipPath: "#0ca37e" }}
              fontSize="small"
            />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
    </StyledBreadCrumb>
  );
};

export { Breadcrumb };
