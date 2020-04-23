import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import Player from "../Player";
import { Container, Login } from "./styles";

export default function Home() {
  const [token, setToken] = useState(null);
  const clientId = "84292ed427ca4fb88b847b7814917e48";
  const redirectUri = "http://localhost:3000/";
  const scopes =
    "user-read-private user-read-email user-read-currently-playing user-read-playback-state playlist-read-private";

  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);

  const login = () => {
    setTimeout(() => {
      window.location.replace(
        `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}&show_dialog=true`
      );
    }, 300);
  };

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    window.location.hash = "";
    if (hash.access_token) {
      setToken(hash.access_token);
      localStorage.setItem("token", hash.access_token);
    }
  }, []);

  return (
    <Container>
      {!token ? (
        <Login>
          <FaSpotify color="#1dd15d" size={80} alt="logo" />
          <button className="btn btn--loginApp-link" onClick={login}>
            <div></div>
            Login to Spotify
          </button>
        </Login>
      ) : (
        <Player token={token} />
      )}
    </Container>
  );
}
