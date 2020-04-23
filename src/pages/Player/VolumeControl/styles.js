import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > button {
    background: none;
    border: none;
    color: #1dd15d;
    font-size: 22px;
    margin-top: 5px;

    svg {
      animation: wave 0.3s;
    }

    @keyframes wave {
      0% {
        clip-path: polygon(60% 0, 60% 50%, 60% 100%, 0 100%, 0% 50%, 0 0);
        transform: translate3d(-1px, 0, 0);
      }
      25% {
        clip-path: polygon(80% 0, 60% 50%, 80% 100%, 0 100%, 0% 50%, 0 0);
        transform: translate3d(2px, 0, 0);
      }

      50% {
        clip-path: polygon(100% 0, 60% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
        transform: translate3d(-4px, 0, 0);
      }

      75% {
        clip-path: polygon(100% 0, 78% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
        transform: translate3d(2px, 0, 0);
      }

      100% {
        clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
        transform: translate3d(-1px, 0, 0);
      }
    }
  }
`;

export const Input = styled.input.attrs({
  type: "range"
})`
  -webkit-appearance: none;
  height: 5px;
  width: 100%;
  background: ${props =>
    `linear-gradient(90deg, #1dd15d ${props.value * 100}%, #333 ${props.value *
      100}%);`};
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 12px;
  box-shadow: inset 0px 1px 2px 1px #000;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    background: #1dd15d;
    transition: transform 0.1s;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.4);
    border: 1px solid #fff;
  }
`;
