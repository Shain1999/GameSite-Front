import { Radio } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Inputs from "../UI/Inputs/Inputs";
import LogInButton from "../UI/LogInButton/LogInButton";
import Title from "../UI/Title/Title";
import "./logIn.scss";
import jwt from "jwt-decode";
import { ActionType } from "../../redux/action-type";
import { useNavigate } from "react-router-dom";
import bgImg from "../../assests/img/BG_img2.jpg";

axios.defaults.withCredentials = true;
export interface userData {
  userName: string;
  password: string;
}

const LogIn = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [userData, setUserData] = useState<userData>(null);
  const [errMessage, setErrMessage] = useState<string>("");

  useEffect(() => {
    dispatch({ type: ActionType.ChangeBgImg, payload: bgImg });
  }, []);

  const onChangeHandlerUserData = (e: any) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onLoginClicked = async () => {
    await axios
      .post(`http://localhost:3001/users/login`, userData, {
        withCredentials: true,
      })
      .then((serverResponse: any) => {
        if (!serverResponse) {
          alert("failed to login");
        }
        let sucessfulResponse = serverResponse.data;
        console.log(sucessfulResponse);

        let token = "Bearer " + sucessfulResponse.token;
        let decodedToken = jwt(sucessfulResponse.token);
        console.log(decodedToken);

        axios.defaults.headers.common["Authorization"] = token;
        dispatch({ type: ActionType.Login, payload: decodedToken });
        navigate("/discover");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="tempLogIn">
      <div className="logInContainer">
        <Title name="Log In" />
        <Inputs
          errorMessage={errMessage}
          onChangeHandler={onChangeHandlerUserData}
          labelText="Username"
          name="userName"
        ></Inputs>
        <Inputs
          errorMessage={errMessage}
          onChangeHandler={onChangeHandlerUserData}
          labelText="Password"
          name="password"
          type="password"
        ></Inputs>
        <LogInButton name="Log In" onClickHandler={onLoginClicked} />
      </div>
    </div>
  );
};

export default LogIn;
