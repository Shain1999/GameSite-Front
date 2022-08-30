import { TextField } from "@mui/material";
import React, { ChangeEventHandler, useState } from "react";
import "./inputs.scss"
export interface IInputProps {
  labelText: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  errorMessage: string;
  name: string;
  type?:string
}
// this component recives a text to show , on change handler for he input , and err message
// this component returns a input field with desired props
function Inputs(props: IInputProps) {
  return (
    <>
      <input
        type={props.type ? props.type : "text"}
        className="inputLogIn"
        name={props.name}
        onChange={props.onChangeHandler}
        placeholder={props.labelText}
      />
    </>
  );
}

export default Inputs;
