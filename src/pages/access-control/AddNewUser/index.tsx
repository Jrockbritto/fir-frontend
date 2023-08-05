"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Header } from "components/Header/Header";
import { Breadcrumb } from "components/BreadCrumb/BreadCrumb";
import { StyledAddNewUser } from "./AddNewUser.style";
import {
  openEye,
  closeEye,
  errorIcon,
  personFill,
} from "./../../../components/pages/login/loginData";

export default function AccessControl() {
  const router = useRouter();
  const tamanho = 6;
  const [showPassword, setShowPassword] = useState(false);
  const [isAddingNewUser, setIsAddingNewUser] = useState(true);

  const schema = z.object({
    post: z.string(),
    name: z.string(),
    surname: z.string(),
    email: z.string().min(1, { message: "Required" }),
    password: z.number().min(10),
  });

  type ValidationSchema = z.infer<typeof schema>;

  const onSubmit = (e: any) => {
    console.log(typeof e);
    e.preventDefault();
    setIsAddingNewUser(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledAddNewUser>
      <Header />
      <div
        className={"main"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#F7F8F9",
        }}
      >
        {/* <Breadcrumb actualPage={2}></Breadcrumb> */}

        <div className="content">
          <Breadcrumb actualPage={2}></Breadcrumb>
          {isAddingNewUser ? (
            <>
              <h3 className="title">Cadastro de novo usuário</h3>
              <form onSubmit={onSubmit}>
                <div className="">
                  <label className="label" htmlFor="email">
                    Nome
                  </label>
                  <input
                    className={`baseInput ${
                      errors.email?.type === "required" ? "errorInput" : ""
                    } `}
                    type="text"
                    placeholder="Nome do integrante"
                    {...register("name")}
                    aria-invalid={
                      errors.email?.type === "required" ? "true" : "false"
                    }
                  />
                  <label className="label" htmlFor="email">
                    Sobrenome
                  </label>
                  <input
                    className={`baseInput ${
                      errors.email?.type === "required" ? "errorInput" : ""
                    } `}
                    type="text"
                    placeholder="Sobrenome do integrante"
                    {...register("surname", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    aria-invalid={
                      errors.email?.type === "required" ? "true" : "false"
                    }
                  />
                  <label className="label" htmlFor="email">
                    Cargo
                  </label>
                  <input
                    className={`baseInput ${
                      errors.email?.type === "required" ? "errorInput" : ""
                    } `}
                    type="text"
                    placeholder="Cargo do integrante"
                    {...register("post", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    aria-invalid={
                      errors.email?.type === "required" ? "true" : "false"
                    }
                  />
                  {errors.email?.type === "required" && (
                    <p className="error" role="alert">
                      {errorIcon}
                      <span className="errorMsg1"> E-mail</span>
                    </p>
                  )}

                  <label className="label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className={`baseInput ${
                      errors.email?.type === "required" ? "errorInput" : ""
                    } `}
                    type="text"
                    placeholder="E-mail  do integrante"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    aria-invalid={
                      errors.email?.type === "required" ? "true" : "false"
                    }
                  />
                  <label className="label" htmlFor="password">
                    Senha
                  </label>
                  <input
                    className={`baseInput ${
                      errors.password?.type === "required" ? "errorInput" : ""
                    } `}
                    type={showPassword ? "text" : "password"}
                    placeholder="Crie uma senha"
                    {...register("password", { required: true })}
                  />
                  <span
                    className="eye"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? openEye : closeEye}
                  </span>

                  {errors.password?.type === "required" && (
                    <div className="error top" role="alert">
                      {errorIcon}
                      <p>Digite sua senha</p>
                    </div>
                  )}
                </div>
                <input
                  value="Cadastrar"
                  placeholder="Cadastrar"
                  className="button"
                  type="submit"
                ></input>
              </form>
            </>
          ) : (
            <div>
              <div className="card-content">
                <div className="card"></div>
                <div className="card green">{personFill}</div>
                <div className="card"></div>
              </div>
              <p className="message">Integrante cadastrado com sucesso!</p>
              <h5>
                Elizabeth Soares foi cadastrada e uma mensagem foi enviada para
                o e-mail dele(a) com suas credenciais.
              </h5>
              <div>
                <button
                  className="button-active"
                  onClick={() => setIsAddingNewUser(true)}
                >
                  Cadastrar outro
                </button>
                <button className="button" onClick={() => router.push("./")}>
                  {" "}
                  Voltar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledAddNewUser>
  );
}
