import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import UserInfo from "./user/userInfo";
import RouterHome from './route/routeHome';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <RouterHome />
    <Route exact path="/users" component={App} />
    <Route path="/users/:id" component={UserInfo} />
  </BrowserRouter>,
  document.getElementById("root")
);
