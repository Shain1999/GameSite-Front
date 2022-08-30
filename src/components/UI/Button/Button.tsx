import React, { ChangeEventHandler, MouseEventHandler } from "react";
import "./button.scss";
export interface IButton {
  btnValue: string;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  id?: string;
}
// this component recives title and an onclick hander
// the component returns a button element with given title and when its clicked the given on click function fires
function Button(props: IButton) {
  return (
    <div className="discoverBtnDiv">
    <button
      className="submitBtn"
      name={props.id != null ? props.id : props.btnValue}
      type="submit"
      onClick={props.onClickHandler}
    >
      {props.btnValue}
    </button>
    </div>
  );
}

export default Button;
