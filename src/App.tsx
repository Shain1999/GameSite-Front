import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout
         
        />
      </Provider>
    </div>
  );
}

export default App;
