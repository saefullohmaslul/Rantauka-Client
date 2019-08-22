import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";

import { loginAccount } from "../../api/explore";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: {
        email: "",
        password: ""
      }
    };
  }

  handleChange = (text, name) => {
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [name]: text
      }
    }));
  };

  handleLogin = async data => {
    const { getParam } = this.props.navigation;
    const handleAuth = getParam("handleAuth", null);
    try {
      const response = await loginAccount(data);
      if (response) {
        await AsyncStorage.setItem("@isLogin", "true");
        await AsyncStorage.setItem("@token", response.data.token);
        handleAuth(true);
        this.props.navigation.navigate("Root");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { replace, getParam } = this.props.navigation;
    // const handleLogin = getParam("handleLogin", "false");

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.text}
            placeholderTextColor="#6eb5e5"
            placeholder="Email"
            returnKeyType="next"
            keyboardType="default"
            onChangeText={text => this.handleChange(text, "email")}
            value={this.state.login.email}
          />
          <TextInput
            style={styles.text}
            placeholderTextColor="#6eb5e5"
            placeholder="Password"
            returnKeyType="next"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={text => this.handleChange(text, "password")}
            value={this.state.login.password}
          />

          <Button
            style={styles.button}
            mode="contained"
            onPress={() => this.handleLogin(this.state.login)}
          >
            Login
          </Button>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            Don't have an account?{" "}
            <Text onPress={() => replace("Register")} style={styles.signup}>
              Signup here
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  textContainer: {
    height: 20,
    justifyContent: "center",
    flexGrow: 1
  },
  infoContainer: {
    alignItems: "center",
    paddingTop: 20
  },
  info: {
    color: "#95a5a6"
  },
  button: {
    borderColor: "#000",
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    color: "white",
    backgroundColor: "#2980b9"
  },
  text: {
    borderColor: "#3498db",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: "#3498db"
  },
  signup: {
    color: "#2980b9"
  }
});
