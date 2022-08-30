import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APIGame } from "../../../models/ApiGame";
import { Game } from "../../../models/Game";
import Description from "../Description/Description";
import GameBlock from "../GameBlock/GameBlock";
import "./gameCard.scss";
export interface IGameCard {
  game?: Game;
  apiGame: APIGame;
}

function GameCard(props: IGameCard) {
  const convertArrayToFullString = (arr: string[]) => {
    let stringToSend = "";
    for (let prop in arr) {
      stringToSend += `${arr[prop]}, `;
    }
    const filteredString = stringToSend.slice(0, -2);
    return filteredString;
  };

  return (
    <>
      {/* <div className="gameContainer">
        <img src={props.game.img} alt="" />
        <article>
          <GameBlock name="Name" value={props.game.name} isName={true} />
          <GameBlock name="Categories" value={props.game.categories} />
          <GameBlock name="Landscape" value={props.game.landscape} />
          <GameBlock name="Platforms" value={props.game.platforms} />
          <GameBlock name="Mode" value={props.game.mode} />
          <GameBlock name="F2P" value={props.game.f2p === 1 ? "Yes" : "No"} />
        </article>
      </div> */}
      <div className="gameContainer">
        <img src={props.apiGame.bgImg} alt="" />
        <article>
          <GameBlock name="Name" value={props.apiGame.name} isName={true} />
          <GameBlock
            name="Categories"
            value={convertArrayToFullString(props.apiGame.genres)}
          />
          <GameBlock
            name="Platforms"
            value={convertArrayToFullString(props.apiGame.platforms)}
          />
          <GameBlock name="Released" value={props.apiGame.released} />
          <GameBlock
            name="Developers"
            value={convertArrayToFullString(props.apiGame.developers)}
          />
          <GameBlock
            name="Sub Genres"
            
            value={convertArrayToFullString(props.apiGame.subGenres)}
          />
          {props.apiGame.website != "" && (
            <GameBlock
              isWebsite={true}
              name="Website"
              value={props.apiGame.website}
            />
          )}
        </article>
      </div>
        <Description
          imgSrc={props.apiGame.secondaryImg}
          desc={props.apiGame.description}
        />
    </>
  );
}

export default GameCard;
