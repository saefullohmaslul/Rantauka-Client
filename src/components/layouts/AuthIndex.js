import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Provider as PaperProvider } from "react-native-paper";

import Root from "./AuthRoot";
import Profile from "../layouts/Profile";
import { theme } from "../../api/constans";
import { loginAccount } from "../../api/explore";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false
    };
    this.handleIsLogin();
  }

  handleAuth = value => {
    this.setState({ isLogin: value });
  };

  handleIsLogin = async () => {
    try {
      const isLogin = await AsyncStorage.getItem("@isLogin");
      if (isLogin === "true") {
        this.setState({ isLogin: true });
        this.props.navigation.navigate("Logged");
      } else {
        this.setState({ isLogin: false });
        this.props.navigation.navigate("Guest");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let root;
    if (this.state.isLogin === true) {
      root = (
        <Profile
          handleAuth={this.handleAuth}
          navigation={this.props.navigation}
        />
      );
    } else {
      root = (
        <Root navigation={this.props.navigation} handleAuth={this.handleAuth} />
      );
    }

    return <PaperProvider theme={theme}>{root}</PaperProvider>;
  }
}

export default Main;
