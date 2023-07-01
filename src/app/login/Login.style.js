import styled from "styled-components";
import { Inter } from "next/font/google";
const StyledLogin = styled.div`
  background: #f7f8f9;
  display: flex;
  justify-content: center;
  padding: 0.94rem;

  .button {
    font-family: "Urbanist", sans-serif;
    display: flex;
    width: 22.5rem;
    height: 3.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: var(--neutrals-neutral-01, #272727);
    color: #f7f8f9;
  }

  .button:hover {
    display: flex;
    width: 22.5rem;
    height: 3.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background: var(--neutrals-black, #1c1c1c);
  }

  .button:disable {
    display: flex;
    width: 22.5rem;
    height: 3.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    opacity: 0.6000000238418579;
    background: var(--neutrals-neutral-02, #8391a1);
  }

  .baseInput {
    display: flex;
    width: 100%;
    height: 56px;
    padding: 16px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--neutrals-neutral-03, #e8ecf4);
    background: var(--neutrals-neutral-04, #f7f8f9);
    margin-bottom: 1rem;
    margin-top: 0.62rem;
  }

  .baseInput:focus {
    outline-color: #0fba91;
  }
  .errorInput {
    outline-color: #882525 !important;
    border: 1px solid #882525;
  }

  .eye {
    position: relative;
    bottom: 3.5rem;
    left: 320px;
    cursor: pointer;
  }

  .mainText {
    color: #1e232c;
    font-size: 36px;
    font-style: normal;
    font-family: "Inter", sans-serif;

    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.36px;
    text-align: left;
    margin: 1.875rem 0;
    width: 100%;
  }
  .red {
    color: #e44a4a;
  }
  .input {
    color: var(--neutrals-neutral-01, #272727);
    font-size: 16px;
    font-family: "Urbanist", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    margin-bottom: 1;
  }

  .error {
    color: var(--semantics-error, #882525);
    font-size: 14px;
    font-family: "Urbanist", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
  }

  .imagePlaceholder {
    width: 80%;
    height: 10px;
    display: block;
    position: relative;
  }

  .ola {
    max-width: 360px;
  }

  .top {
    margin-top: -2.2rem;
  }
`;

export { StyledLogin };