import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import VolumeControl from "./VolumeControl";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaStopCircle,
  FaVolumeUp,
  FaSearch,
  FaChevronDown
} from "react-icons/fa";
import {
  Container,
  Box,
  ListMusic,
  ItemMusic,
  Controller,
  Progress,
  Range,
  BtnGroup,
  Button,
  Find
} from "./styles";

export default function Player({ token }) {
  const [songs, setSongs] = useState(null);
  const [page, setPage] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [busca, setBusca] = useState("");
  const [music, setMusic] = useState({
    preview_url: PropTypes.string,
    name: PropTypes.string,
    duration_ms: PropTypes.string
  });

  const myAudio = useRef(new Audio());
  const myBox = useRef();

  const playMusic = music => {
    setMusic(music);
    myAudio.current.src = music.preview_url;
    myAudio.current.title = music.name;
    myAudio.current.play();
    myAudio.current.addEventListener("timeupdate", function(e) {
      setCurrentTime(e.target.currentTime);
    });
    myAudio.current.addEventListener("ended", function(e) {
      myAudio.current.load();
      setMusic({});
    });
  };

  const volumeChange = audio => {
    myAudio.current.volume = audio;
  };

  const formatTime = time => {
    let date = new Date(0);
    date.setSeconds(time);
    return date.toISOString().substr(11, 8);
  };

  const realizaBusca = () => {
    busca !== "" &&
      axios
        .get(
          `https://api.spotify.com/v1/search?q=${busca}&type=track&limit=20`,
          {
            headers: { Authorization: "Bearer " + token }
          }
        )
        .then(result => {
          setPage(result.data.tracks.next);
          setSongs(result.data.tracks.items);
        });
  };

  const nextPage = () => {
    axios
      .get(page, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(result => {
        setPage(result.data.tracks.next);
        setSongs([...songs, ...result.data.tracks.items]);
      });
  };

  return (
    <Container>
      <Find>
        <input
          type="text"
          placeholder="Busque sua musica ou artista"
          onChange={e => setBusca(e.target.value)}
        />
        <button onClick={realizaBusca}>
          <FaSearch />
        </button>
      </Find>
      <Box ref={myBox}>
        <ListMusic>
          {songs &&
            songs.map(song => (
              <ItemMusic
                key={song.id}
                selected={song.id === music.id ? true : false}
              >
                <img src={song.album.images[2].url} alt="" />
                <h1>{song.name}</h1>
                <button onClick={() => playMusic(song)}>
                  {song.id === music.id ? <FaVolumeUp /> : <FaPlayCircle />}
                </button>
              </ItemMusic>
            ))}
          {page && (
            <button onClick={() => nextPage(songs.next)}>
              <FaChevronDown />
            </button>
          )}
        </ListMusic>
      </Box>

      <Controller>
        <BtnGroup>
          {!myAudio.current.paused ? (
            <Button name="pause" onClick={() => myAudio.current.pause()}>
              <FaPauseCircle />
            </Button>
          ) : (
            <Button name="play" onClick={() => myAudio.current.play()}>
              <FaPlayCircle />
            </Button>
          )}
          <Button name="stop" onClick={() => myAudio.current.load()}>
            <FaStopCircle />
          </Button>
          <VolumeControl
            volume={myAudio.current.volume}
            volumeChange={volumeChange}
          />
        </BtnGroup>

        <Progress>
          <p>{formatTime(currentTime || 0)}</p>
          <Range
            value={currentTime}
            percent={((currentTime - 0) * 100) / (myAudio.current.duration - 0)}
            max={Math.round(myAudio.current.duration || 0)}
          />
          <p>{formatTime(myAudio.current.duration || 0)}</p>
        </Progress>
      </Controller>
    </Container>
  );
}
