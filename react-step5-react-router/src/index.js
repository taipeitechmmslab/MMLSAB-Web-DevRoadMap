import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import UserInfo from "./user/UserInfo";
import RouterHome from './route/RouteHome';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <RouterHome />
    <Route exact path="/users" component={App} />
    <Route path="/users/:id" component={UserInfo} />
  </BrowserRouter>,
  document.getElementById("root")
);
