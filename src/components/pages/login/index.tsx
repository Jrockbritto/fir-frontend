"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";

import { StyledLogin } from "./Login.style";
import mypic from "../../../../public/image.png";
import { openEye, closeEye, errorIcon, personFill } from "./loginData";
import useUser from "lib/user/useUser";
import { userLogin } from "api/services/login";
import { LoginRequestData } from "models/login";

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const { mutateUser } = useUser({
    redirectTo: "/counter",
    redirectIfFound: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
    // data.
    const { email, password } = data.currentTarget.elements;

    const loginData = await userLogin({ email, password });
    console.log(loginData);
    setHasError(false);
  };
  console.log(errors);
  return (
    <StyledLogin>
      <div className="main" style={{ width: "100%" }}>
        <div className="ola">
          <div className="metade">
            <div className="imagePlaceHolder">
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={mypic}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="metade2">
            <main className="teste">
              <h1 className="mainText">
                Gerencie seu <span className="red">tempo</span>.
              </h1>
              <h1 className="submainText">Work smarter.</h1>
            </main>
            <div className="form">
              {hasError && (
                <Alert className="alert" severity="error">
                  Seu login e/ou senha estão incorretos
                </Alert>
              )}
              <form onSubmit={onSubmit}>
                <div>
                  <label className="label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className={`baseInput ${
                      errors.email?.type === "required" ? "errorInput" : ""
                    } `}
                    type="text"
                    placeholder="email"
                    {...register("email", {
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
                      <span className="errorMsg1"> Digite seu E-mail</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className="label" htmlFor="password">
                    Senha
                  </label>
                  <input
                    className={`baseInput ${
                      errors.password?.type === "required" ? "errorInput" : ""
                    } `}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
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
                  value="Entrar"
                  placeholder="Entrar"
                  className="button"
                  type="submit"
                ></input>
                {personFill}
              </form>
            </div>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
}
