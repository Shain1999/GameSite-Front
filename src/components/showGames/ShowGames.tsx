import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "../../models/Game";
import AppState from "../../redux/app-state";
import GameCard from "../UI/GameCard/GameCard";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Title from "../UI/Title/Title";
import "./showGames.scss";
import { APIGame } from "../../models/ApiGame";

function ShowGames() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  let dispatch = useDispatch();
  let gamesToShow = useSelector((appState: AppState) => appState.discoverGames);
  const length = gamesToShow.length;

  return (
    <div className="ShowGames">
      <Title name="My Games" />
      <div
        className="gamesSlider"
      >
        <ArrowCircleLeftIcon className="left-arrow" onClick={prevSlide} />
        <div className="gamesContainer">
          {gamesToShow.map((game: APIGame, idx) => {
            return (
              
              <div
                className={idx === current ? "slide active" : "slide"}
                key={idx}
              >
                {idx === current && <GameCard key={game.id} apiGame={game} /> }
              </div>
            );
          })}
        </div>
        <ArrowCircleRightIcon className="right-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}

export default ShowGames;
