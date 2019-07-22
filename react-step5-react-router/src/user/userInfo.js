import React, { Component } from "react";
import axios from "axios";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      id: this.props.match.params.id,
      userInfo: { id: "", name: "", phone: "", email: "" }
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    //指定網址，並執行axios的GET方法
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + this.state.id)
      .then(response => {
        this.setState({
          userInfo: response.data
        });
      });
  }
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(preProps, prevState) {    
    if (this.state.id !== prevState.id) {
      //因為props更新了state裡的id
      this.getData();
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.id !== prevState.id) {
      return {
        id: nextProps.match.params.id
      };
    }
    return null;
  }
  render() {
    const { name, phone, email } = this.state.userInfo;
    return (
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>Phone: {phone}</CardSubtitle>
          <CardText>Email: {email}</CardText>
        </CardBody>
      </Card>
    );
  }
}
