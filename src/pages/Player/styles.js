import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MusicTitle = styled.div`
  width: 80%;
  box-sizing: border-box;
  overflow: hidden;

  & > p {
    color: #fff;
    font-weight: 800;
    font-size: 1.2em;
    animation: continuos 10s linear infinite;
  }

  @keyframes continuos {
    0% {
      transform: translatex(0);
    }
    100% {
      transform: translatex(100%);
    }
  }
`;

export const Box = styled.div`
  width: 80%;
  height: 70%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1dd15d;
    width: 15px;
    outline: 1px solid slategrey;
    border-radius: 6px;
  }
`;
export const ListMusic = styled.ul`
  text-align: center;
  & > button {
    background: none;
    border: none;
    color: #1dd15d;
    font-size: 3em;
    animation: jump 1s infinite;
    cursor: pointer;
  }

  @keyframes jump {
    0%,
    100% {
      transform: translate3d(0, -1px, 0);
    }
    25%,
    75% {
      transform: translate3d(0, 2px, 0);
    }

    50% {
      transform: translate3d(0, -4px, 0);
    }
  }
`;

export const ItemMusic = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  background: ${(props) =>
    props.selected ? "rgba(255, 255, 255, 0.3)" : "transparent"};
  & > h1 {
    margin-left: 12px;
    color: #fff;

    small {
      color: #ccc;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  & > button {
    background: none;
    border: none;
    color: #1dd15d;
    font-size: 18px;
    margin: 0 12px;
    cursor: pointer;
    animation: ${(props) => (props.selected ? "shake 0.4s infinite" : "")};
  }

  @keyframes shake {
    0% {
      transform: translate3d(-1px, 0, 0);
    }
    25% {
      transform: translate3d(2px, 0, 0);
    }

    50% {
      transform: translate3d(-4px, 0, 0);
    }

    75% {
      transform: translate3d(2px, 0, 0);
    }

    100% {
      transform: translate3d(-1px, 0, 0);
    }
  }
`;

export const Controller = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 15%;
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;

  p {
    color: #fff;
    margin: 0 12px;
  }
`;

export const Range = styled.input.attrs({
  type: "range",
})`
  & {
    -webkit-appearance: none;
    height: 10px;
    width: 100%;
    background: ${(props) =>
      `linear-gradient(90deg, #1dd15d ${props.percent}%, #333 ${props.percent}%);`};
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 12px;
    box-shadow: inset 0px 1px 6px 1px #000;
  }

  & :hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;

    cursor: pointer;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 3px 0;
  line-height: 1.428571429;
  border-radius: 100%;
  border: none;
  color: #1dd15d;
  background: #252525;
  box-shadow: 4px 4px 8px #1f1f1f, -4px -4px 8px #2b2b2b;
  margin: 0 6px;
`;

export const Find = styled.form`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 2em;

  & > input {
    width: 100%;
    border: none;
    border-radius: 50px;
    background: #252525;
    box-shadow: 4px 4px 8px #1f1f1f, -4px -4px 8px #2b2b2b;
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    padding: 1em;
  }

  & > button {
    position: absolute;
    right: 1em;
    top: 0.5em;
    background: none;
    border: none;
    color: #1dd15d;
    font-size: 1.4em;
    cursor: pointer;
  }
`;
