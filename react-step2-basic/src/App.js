import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // 設定 state
    this.state = {
      userList: [
        {
          id: 1,
          name: "Leanne Graham",
          email: "Sincere@april.biz",
          phone: "1-770-736-8031 x56442"
        },
        {
          id: 2,
          name: "Ervin Howell",
          email: "Sincere@april.biz",
          phone: "010-692-6593 x09125"
        },
        {
          id: 3,
          name: "Clementine Bauch",
          email: "Nathan@yesenia.net",
          phone: "1-463-123-4447"
        }
      ]
    };
  }
  render() {
    // 從 state 取出資料
    let userList = this.state.userList;

    return (
      <div>
        <h1 id="title">使用者查詢example1</h1>
        <table id="personList" class="table table-striped">
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
        </table>
      </div>
    );
  }
}

export default App;
