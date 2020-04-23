import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import Player from "../Player";
import { Container, Login } from "./styles";

export default function Home() {
  const [token, setToken] = useState(null);
  const redirectUri = "http://localhost:3000/";

  useEffect(() => {
    const verifyToken = () => {
      const _token = localStorage.getItem("token");
      if (_token) {
        setToken(_token);
      }
    };

    const loginCallback = () => {
      const hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce(function (initial, item) {
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
    };

    verifyToken();
    loginCallback();
  }, []);

  const login = () => {
    setTimeout(() => {
      window.location.replace(
        `https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.REACT_APP_SPOTIFY_ID}&scope=${process.env.REACT_APP_SPOTIFY_SCOPE}&redirect_uri=${redirectUri}&show_dialog=true`
      );
    }, 300);
  };

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
        <Player />
      )}
    </Container>
  );
}
