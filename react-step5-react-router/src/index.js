import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import UserInfo from "./user/userInfo";
import { BrowserRouter, Route, Link } from "react-router-dom";

class RouterHome extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">All Users</Link>
          </li>
          <li>
            <Link to="/users/1">Users 1</Link>
          </li>
          <li>
            <Link to="/users/2">Users 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <RouterHome />
    <Route exact path="/users" component={App} />
    <Route path="/users/:id" component={UserInfo} />
  </BrowserRouter>,
  document.getElementById("root")
);
