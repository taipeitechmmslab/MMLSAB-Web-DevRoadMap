import React from "react";
import "./App.css";
import axios from "axios";
import { Table } from "reactstrap";
import User from "./user/User.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    // 設定 state
    this.state = {
      userList: []
    };
    // This binding is necessary to make `this` work in the callback
    this.removeUser = this.removeUser.bind(this);
  }
  removeUser(id) {
    const { userList } = this.state;
    // 直接用 filter 來把資料砍掉
    let newUsers = userList.filter(user => user.id !== id);
    this.setState({
      userList: newUsers
    });
  }
  componentDidMount() {
    //指定網址，並執行axios的GET方法
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({ userList: response.data });
    });
  }
  render() {
    // 從 state 取出資料
    let userList = this.state.userList;

    return (
      <div>
        <h1 id="title">使用者查詢example1</h1>
        <Table striped id="personList">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">phone</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => {
              // 傳回 jsx
              return <User user={user} id={user.id} remove={this.removeUser} />;
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
