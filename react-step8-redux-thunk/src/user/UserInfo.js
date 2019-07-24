import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { connect } from "react-redux";
import { fetchUser } from "./actions/userInfo";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    //第一次被掛載會執行
    this.props.fetchUser(this.state.id);
  }
  componentDidUpdate(preProps, prevState) {
    if (this.state.id !== prevState.id) {
      //因為props更新了state裡的id
      this.props.fetchUser(this.state.id);
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.id !== prevState.id) {
      //更新state的資料
      return {
        id: nextProps.match.params.id
      };
    }
    return null;
  }
  render() {
    const { user, loading, error } = this.props;
    const { name, phone, email } = user;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

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

const mapDispatchToProps = {
  fetchUser
};

const mapStateToProps = state => ({
  user: state.userInfoReducer.user,
  loading: state.userInfoReducer.loading,
  error: state.userInfoReducer.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
