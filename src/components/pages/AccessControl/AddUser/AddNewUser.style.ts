import styled from "styled-components";

const StyledAddNewUser = styled.div`
  .button {
    font-family: "Urbanist", sans-serif;
    display: flex;
    width: 100%;
    height: 3.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: var(--neutrals-neutral-01, #272727);
    color: #f7f8f9;
    cursor: pointer;
  }

  .button:hover {
    background: var(--neutrals-black, #1c1c1c);
  }

  .button:disable {
    opacity: 0.6000000238418579;
    background: var(--neutrals-neutral-02, #8391a1);
  }

  .alert {
    margin: 30px 0;
    height: 72px;
    display: flex;
    align-items: center;
    padding: 0 24px;

    color: var(--semantics-error, #882525);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  .baseInput {
    display: flex;
    width: 100%;
    height: 56px;
    padding: 16px 4rem 16px 16px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--neutrals-neutral-03, #e8ecf4);
    background: var(--neutrals-neutral-04, #f7f8f9);
    margin-bottom: 1rem;
    margin-top: 0.62rem;
    background: #e8ecf4;
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
    left: 90%;
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
    margin: 1.875rem 0 0;
    width: 100%;
  }
  .red {
    color: #e44a4a;
  }
  .label {
    color: var(--neutrals-neutral-01, #272727);
    font-size: 16px;
    font-family: "Urbanist", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    margin-bottom: 1;
  }
  .submainText {
    color: var(--dark, #1e232c);
    font-size: 36px;
    font-family: "Inter", sans-serif;
    font-style: italic;
    font-weight: 200;
    line-height: 130%;
    letter-spacing: -0.36px;
    margin-bottom: 1.875rem;
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

  .title {
    color: var(--dark, #1e232c);
    /* subtitle */
    font-family: Mulish;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 1.5625rem */
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .ola {
    max-width: 360px;
  }

  .content {
    margin-top: -2.5rem;
    width: 50%;
  }

  .top {
    margin-top: -2.2rem;
  }

  .card {
    width: 8.6875rem;
    height: 8.6875rem;
    flex-shrink: 0;
    border-radius: 1rem;
    background: grey;

    display: grid;
    place-items: center;
  }
  .card-content {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  .message {
    color: var(--dark, #1e232c);
    text-align: center;
    /* h3 */
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 2.6rem */
    letter-spacing: -0.02rem;
    margin-bottom: 1.5rem;
  }
  .green {
    background: var(--main-main-03, #c4efe5);
  }

  h5 {
    color: var(--dark, #1e232c);
    text-align: center;
    /* p */
    font-family: Mulish;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 1.25rem */
  }

  .button-active {
    width: 100%;
    background: #0fba91;
    cursor: pointer;
    margin-top: 1.88rem;
    display: flex;
    ${"" /* max-width: 22.5rem; */}
    height: 3.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    border: none !important;
    color: var(--neutrals-neutral-04, #f7f8f9);
    ${"" /* font-family: Mulish; */}
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    margin-bottom: 1rem;
  }

  .card-content {
    margin-top: 12rem;
    margin-bottom: 1.5rem;
  }
`;

export { StyledAddNewUser };
