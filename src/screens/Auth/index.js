import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Provider as PaperProvider } from "react-native-paper";

import Root from "./Root";
import Profile from "./Profile";
import { theme } from "../../constant";
import { loginAccount } from "../../api/explore";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: ""
      },
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
      } else {
        this.props.navigation.navigate("Root");
      }
    } catch (err) {
      this.props.navigation.navigate("Root");
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
