import React from "react";
import "./App.css";
import axios from "axios";
import { Table } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    // 設定 state
    this.state = {
      userList: []
    };
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
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
