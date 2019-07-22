import React, { Component } from "react";
import { Button } from "reactstrap";

export default class User extends Component {
  constructor(props) {
    super(props);
    
    // This binding is necessary to make `this` work in the callback
    this.remove = this.remove.bind(this);
  }
  remove() {
    this.props.remove(this.props.id);
  }
  render() {
    const { id, name, phone, email } = this.props.user;
    return (
      <tr key={id}>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>
          <Button color="danger" onClick={this.remove}>
            X
          </Button>
        </td>
      </tr>
    );
  }
}
