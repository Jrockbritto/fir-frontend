"use client";
import styled from "styled-components";

const StyledCounter = styled.div`
  .c-loader {
    border-radius: 50%;
    height: 500px;
    width: 500px;
    background: conic-gradient(#0fba91, #0fba9100);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: is-rotating 4s infinite;
  }

  .inner {
    border-radius: 50%;
    height: 480px;
    width: 480px;
    margin: 10px;
    background: white;
  }

  .button {
    display: flex;
    width: 22.5rem;
    height: 3.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }

  .pause {
    animation-play-state: paused;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

export { StyledCounter };
