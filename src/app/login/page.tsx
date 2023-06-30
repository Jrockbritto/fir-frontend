"use client";
import styles from "../page.module.css";
import { StyledLogin } from "./Login.style";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const errorIcon = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.793 15.9089L13.5701 7.36232C13.0056 6.43871 12.6473 5.85705 12.3441 5.47327C12.182 5.26814 12.0879 5.18932 12.0519 5.16364C12.0175 5.15913 11.9826 5.15913 11.9481 5.16364C11.9122 5.18932 11.818 5.26814 11.656 5.47327C11.3527 5.85705 10.9944 6.4387 10.43 7.36231L5.2071 15.9089C4.60014 16.9021 4.21444 17.5379 3.99412 18.0204C3.87552 18.2801 3.8461 18.411 3.83906 18.4592C3.8516 18.49 3.86792 18.5191 3.88765 18.5458C3.93241 18.5649 4.05949 18.6081 4.34292 18.6423C4.86947 18.7059 5.61314 18.7083 6.77714 18.7083H17.2229C18.3869 18.7083 19.1306 18.7059 19.6571 18.6423C19.9406 18.6081 20.0677 18.5649 20.1124 18.5458C20.1322 18.5191 20.1485 18.49 20.161 18.4592C20.154 18.411 20.1245 18.2801 20.006 18.0204C19.7856 17.5379 19.3999 16.9021 18.793 15.9089ZM20.1631 18.4815C20.163 18.4814 20.1629 18.48 20.163 18.4772C20.1632 18.4802 20.1631 18.4815 20.1631 18.4815ZM20.1325 18.5359C20.1326 18.536 20.1314 18.5367 20.1288 18.5381C20.1312 18.5366 20.1325 18.5359 20.1325 18.5359ZM3.86754 18.5359C3.86761 18.5359 3.86892 18.5366 3.87123 18.5381C3.86862 18.5367 3.86746 18.536 3.86754 18.5359ZM3.83701 18.4815C3.83694 18.4815 3.83689 18.4802 3.83707 18.4772C3.83716 18.48 3.83708 18.4814 3.83701 18.4815ZM11.9651 5.1529C11.9651 5.15303 11.9634 5.15407 11.9601 5.15562C11.9635 5.15355 11.9651 5.15277 11.9651 5.1529ZM12.035 5.1529C12.0349 5.15277 12.0366 5.15355 12.04 5.15562C12.0367 5.15407 12.035 5.15303 12.035 5.1529ZM11.6346 3.79774C10.8708 3.9561 10.3257 4.84816 9.2354 6.63228L4.0125 15.1788C2.83757 17.1015 2.25011 18.0628 2.4895 18.8389C2.56474 19.0828 2.69101 19.308 2.85992 19.4994C3.39734 20.1083 4.52394 20.1083 6.77714 20.1083H17.2229C19.4761 20.1083 20.6027 20.1083 21.1401 19.4994C21.3091 19.308 21.4353 19.0828 21.5106 18.8389C21.75 18.0628 21.1625 17.1015 19.9876 15.1788L14.7647 6.63229C13.6744 4.84816 13.1292 3.9561 12.3655 3.79774C12.1244 3.74776 11.8757 3.74776 11.6346 3.79774Z"
      fill="#882525"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0001 9.40833C12.3867 9.40833 12.7001 9.72173 12.7001 10.1083V14.1083C12.7001 14.4949 12.3867 14.8083 12.0001 14.8083C11.6135 14.8083 11.3001 14.4949 11.3001 14.1083V10.1083C11.3001 9.72173 11.6135 9.40833 12.0001 9.40833Z"
      fill="#882525"
    />
    <path
      d="M12.7 16.4084C12.7 16.795 12.3866 17.1084 12 17.1084C11.6134 17.1084 11.3 16.795 11.3 16.4084C11.3 16.0218 11.6134 15.7084 12 15.7084C12.3866 15.7084 12.7 16.0218 12.7 16.4084Z"
      fill="#882525"
    />
  </svg>
);

export default function Home() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  type User = {
    email: string;
    senha: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown): unknown => console.log(data);
  console.log(errors);

  return (
    <StyledLogin>
      <main className={styles.main}>
        <div className="teste">
          <h1 className="mainText">
            Gerencie seu <span className="red">tempo</span>.
          </h1>
          <h1 className="mainText">work smarter</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                className="baseInput"
                type="text"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p className="error" role="alert">
                  {errorIcon} Digite seu E-mail
                </p>
              )}
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input
                className="baseInput"
                type={showPassword ? "text" : "password"}
                placeholder="senha"
                {...register("senha", { required: true })}
              />
              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.1084C8 5.1084 5 8.1084 2.5 12.1084C5 16.1084 8 19.1084 12 19.1084C16 19.1084 19 16.1084 21.5 12.1084C19 8.1084 16 5.1084 12 5.1084Z"
                      stroke="#272727"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12.1084"
                      r="3"
                      stroke="#272727"
                      strokeWidth="1.4"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 6.86702C15.0174 5.76247 13.3677 5.1084 11.5 5.1084C7.5 5.1084 4.5 8.1084 2 12.1084C3.33267 14.2407 4.80743 16.0888 6.5 17.3498"
                      stroke="#272727"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 19.1084C15 19.6084 19 16.1084 21.5 12.1084C20.1673 9.97609 19 9.10838 19 9.10838"
                      stroke="#272727"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.87871 14.2297C9.60014 13.9511 9.37916 13.6204 9.2284 13.2564C9.07763 12.8925 9.00004 12.5024 9.00004 12.1084C9.00004 11.7144 9.07763 11.3243 9.2284 10.9603C9.37916 10.5964 9.60014 10.2657 9.87871 9.98708C10.1573 9.7085 10.488 9.48752 10.852 9.33676C11.216 9.186 11.6061 9.1084 12 9.1084C12.394 9.1084 12.7841 9.186 13.1481 9.33676C13.5121 9.48752 13.8428 9.7085 14.1214 9.98708L12 12.1084L9.87871 14.2297Z"
                      stroke="#272727"
                      strokeWidth="1.4"
                    />
                    <line
                      x1="19"
                      y1="5.09835"
                      x2="4.98995"
                      y2="19.1084"
                      stroke="#272727"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15.3633 12.7452C15.3633 12.7452 15.4266 13.6819 14.5532 14.5553C13.6799 15.4287 12.7432 15.3653 12.7432 15.3653"
                      stroke="#272727"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>

              {errors.senha?.type === "required" && (
                <p className="error" role="alert">
                  {errorIcon}Digite sua senha
                </p>
              )}
            </div>
            <input
              value="Entrar"
              placeholder="Entrar"
              className="button"
              type="submit"
            ></input>
          </form>
        </div>
      </main>
    </StyledLogin>
  );
}
