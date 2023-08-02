"use client";
import styles from "../../page.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Header } from "../../components/header/Header";
import { Breadcrumb } from "../../components/BreadCrumb/BreadCrumb";
import { StyledAddNewUser } from "./AddNewUser.style";

export default function AccessControl() {
  const router = useRouter();
  const tamanho = 6;

  return (
    <StyledAddNewUser>
      <Header />
      <div
        className={styles.main}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#F7F8F9",
        }}
      >
        <Breadcrumb actualPage={2}></Breadcrumb>

        <div>
          <form></form>
          <button>Cadastrar</button>
        </div>
      </div>
    </StyledAddNewUser>
  );
}
