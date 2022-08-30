import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AppState from "../../redux/app-state";
import "./navBar.scss";

function NavBar() {
  let userTypeRedux = useSelector((appState: AppState) => appState.userType);
  const [userType, setUserType] = useState<string>("");
  console.log(userType);
  let navigate = useNavigate();

  useEffect(() => {
    setUserType(userTypeRedux);
    if (userTypeRedux == null) {
      navigate("/");
    }
  }, [userTypeRedux]);

  return (
    <>
      {userType == null && (
        <nav>
          <div>
            <Link to="/">Home</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/logIn">Log In</Link>
          </div>
        </nav>
      )}
      {userType == "customer" && (
        <nav>
          <div>
            <Link to="/discover">Discover</Link>
            <Link to="/rate">Rate</Link>
            <Link to="/myGames">My Games</Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;
