import React, { ChangeEventHandler } from "react";
import "./logInButton.scss";
export interface logInBtnProps {
  name: string;
  onClickHandler: any;
}

function LogInButton(props: logInBtnProps) {
  return (
    <>
      <input
      className="logInBtn"
        type="button"
        value={props.name}
        onClick={props.onClickHandler}
      />
    </>
  );
}

export default LogInButton;
