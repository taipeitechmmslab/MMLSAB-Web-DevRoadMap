import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import "./Users.css";
import User from "./User.js";
import { fetchUsers,removeUser } from "./actions/users";

class Users extends React.Component {
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
    this.props.removeUser(id);
  }
  componentDidMount() {
    //第一次掛載執行
    this.props.fetchUsers();
  }
  render() {
    // 從 state 取出資料    
    const { error, loading, users } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

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
            {users.map(user => {
              // 傳回 jsx
              return <User user={user} id={user.id} remove={this.removeUser} />;
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapDispatchToProps = {
  fetchUsers,
  removeUser
};

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  loading: state.usersReducer.loading,
  error: state.usersReducer.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
