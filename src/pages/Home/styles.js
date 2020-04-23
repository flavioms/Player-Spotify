import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  & > button {
    margin: 2em;
    padding: 1em;
    background: none;
    border: 1px solid #1dd15d;
    border-radius: 2em;
    color: #1dd15d;
    transition: 0.5s;

    &:focus div {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: -1;
      background: #1dd15d;
      animation: zoomp 0.5s;
    }
    @keyframes zoomp {
      0% {
        clip-path: circle(0 at 50% 45%);
      }

      33% {
        clip-path: circle(50% at 50% 50%);
      }

      66% {
        clip-path: circle(20% at 50% 50%);
      }

      100% {
        clip-path: circle(100% at 50% 50%);
      }
    }
  }
`;
