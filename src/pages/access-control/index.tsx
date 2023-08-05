"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { StyledAccessControl } from "./AccessControl.style";
import { Header } from "components/Header/Header";
import { Breadcrumb } from "components/BreadCrumb/BreadCrumb";

export default function AccessControl() {
  const router = useRouter();
  const tamanho = 6;

  const schema = z.object({
    name: z.string().min(1, { message: "Required" }),
    age: z.number().min(10),
  });

  type ValidationSchema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
  });

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
        <button onClick={() => router.push("/AccessControl/AddNewUser")}>
          Adicionar novo integrante
        </button>
      </div>
    </StyledAccessControl>
  );
}
