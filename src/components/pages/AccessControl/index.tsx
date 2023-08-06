"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { StyledAccessControl } from "./AccessControl.style";
import { Header } from "components/Header/Header";
import { Breadcrumb } from "components/BreadCrumb/BreadCrumb";

export default function AccessControl() {
  const router = useRouter();
  const tamanho = 6;

  return (
    <StyledAccessControl>
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
        <Breadcrumb actualPage={1}></Breadcrumb>

        <div>
          <h4> Controle de acesso</h4>
          <p>Exibindo {tamanho} Integrantes cadastrados</p>
        </div>
        <button onClick={() => router.push("/access-control/add-user")}>
          Adicionar novo integrante
        </button>
      </div>
    </StyledAccessControl>
  );
}
