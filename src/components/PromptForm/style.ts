import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid #007bff; /* Cor do spinner */
  animation: ${spin} 1s linear infinite;
`;