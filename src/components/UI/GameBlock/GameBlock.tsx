import React from "react";
import "./gameBlock.scss";
export interface GameBlock {
  name: string;
  value: string;
  isName?: boolean;
  isWebsite?: boolean;
  isSubGenre?:boolean;
}
function GameBlock(props: GameBlock) {
  return (
    <div className="gameBlock">
      <label id="" className="gameBlockLabel">
        {props.name}
      </label>
      <div className="gameBlockValue">
        {props.isWebsite != true && (
          <label
            id={props.name}
            className={
              props.isName ? "gameBlockValueLabel name" : "gameBlockValueLabel"
            }
          >
            {props.value}
          </label>
        )}

        {props.isWebsite && (
          <a className="gameBlockValueLabel link">{props.value}</a>
        )}
      </div>
    </div>
  );
}

export default GameBlock;
