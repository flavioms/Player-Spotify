import React from "react";
import {
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeDown,
  FaVolumeUp
} from "react-icons/fa";
import { Container, Input } from "./styles";

export default function VolumeControl(props) {
  return (
    <Container>
      <button>
        {props.volume < 0.1 && <FaVolumeMute />}
        {props.volume >= 0.1 && props.volume <= 0.2 && <FaVolumeOff />}
        {props.volume >= 0.3 && props.volume <= 0.5 && <FaVolumeDown />}
        {props.volume >= 0.6 && <FaVolumeUp />}
      </button>
      <Input
        type="range"
        name="volume"
        id="volume"
        value={props.volume}
        onChange={e => props.volumeChange(e.target.value)}
        min="0"
        max="1"
        step="0.1"
      />
    </Container>
  );
}
