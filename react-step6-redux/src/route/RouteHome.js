import React from "react";
import { Link } from "react-router-dom";
import Users from "../user/Users";
import UserInfo from "../user/UserInfo";
import TodoApp from "../todo/components/TodoApp";
import { Route } from "react-router-dom";

export default class RouterHome extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">All Users</Link></li>
          <li><Link to="/users/1">Users 1</Link></li>
          <li><Link to="/users/2">Users 2</Link></li>
          <li><Link to="/todo/">Todo</Link></li>
        </ul>
        <Route exact path="/users" component={Users} />
        <Route path="/users/:id" component={UserInfo} />
        <Route path="/todo" component={TodoApp} />
      </div>
    );
  }
}