"use client";
import styled from "styled-components";

const StyledCounter = styled.div`
  .c-loader {
    border-radius: 50%;
    max-height: 500px;
    height:85vw;
    max-width: 500px;
    width: 85vw;
    background: conic-gradient(#0fba91, #0fba9100);
    box-shadow: 0px 0px 40px 0px rgba(15, 186, 145, 0.2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: is-rotating 4s infinite;
  }

  .inner {
    position: relative;
    top: -31.2rem;
    border-radius: 50%;
    max-height: 480px;
    height:81vw;
    max-width: 480px;
    width: 81vw;
    margin: 10px;
    background: #f7f8f9;
    z-index: 1;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 40px 0px rgba(15, 186, 145, 0.2);
  }

  .stopped {
    background: var(--main-main-01, #0fba91);
    border: none;
  }

  .active {
    background: var(--neutrals-neutral-01, #272727);
  }

.playIcon{
  margin-left: .62rem;
}

  .button {
    cursor:pointer;
    margin-top: 1.88rem;
    display: flex;
    max-width: 22.5rem;
    width: 81vw;
    height: 3.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    border:none !important;
    color: var(--neutrals-neutral-04, #F7F8F9);
    ${"" /* font-family: Mulish; */}
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /
  }

  h1 {
    color: var(--dark, #1e232c);
    text-align: center;
    /* h1 */
    ${"" /* font-family: Inter; */}
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 4.55rem */
    letter-spacing: -0.035rem;
  }

  span {
    text-justify: center;
  }

  p {
    color: var(--neutrals-neutral-02, #8391a1);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
  .pause {
    animation-play-state: paused;
  }

  .counter {
    height: 85vw;
    width: 85vw;
    max-width: 500px;
    max-height: 500px;
  }
  h4 {
    color: var(--dark, #1e232c);
    text-align: center;
    /* p */
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 1.25rem */

    margin: 0.5rem 0 1.88rem 0;
  }
  h2 {
    color: var(--dark, #1e232c);
    text-align: center;
    ${"" /* font-family: Inter; */}
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 2.6rem */
    letter-spacing: -0.02rem;
  }
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  @media (max-width: 600px) {
    .inner{ 
      width: 340px;
      height: 340px; 
      top:-360px;
    }

    .c-loader{
      width: 360px;
      height: 360px;
    }

    .counter{
      width: 360px;
      height: 360px;
    }
  }
`;

export { StyledCounter };
