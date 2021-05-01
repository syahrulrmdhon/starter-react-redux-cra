import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/login"} exact component={LoginPage} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
