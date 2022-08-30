import React, { useEffect, useState } from "react";
import Discover from "../discover/Discover";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ShowGames from "../showGames/ShowGames";
import NavBar from "../navbar/NavBar";
import LogIn from "../logIn/LogIn";
import { createTheme, ThemeProvider } from "@mui/material";
import "./layout.scss";
import AppState from "../../redux/app-state";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ActionType } from "../../redux/action-type";
import jwt from "jwt-decode";
import Footer from "../footer/Footer";
import bgImg from "../../assests/img/backgroundLayout4.png";

// const theme = createTheme({
//   palette: { primary: { main: "#" } },
// });
function Layout() {
  let dispatch = useDispatch();
  let imgToShow = useSelector((appState: AppState) => appState.currentBgImg);
  useEffect(()=>{
    
  },[])
  return (
    <div className="Layout">
      <div
        className="parallax"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="showGames" element={<ShowGames />} />
          <Route path="discover" element={<Discover />} />
          <Route path="/" element={<Discover />} />
          <Route path="/logIn" element={<LogIn />} />
          {/* <Route path="*" element={<ErrPage/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default Layout;
