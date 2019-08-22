import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import axios from "axios";

import { signupAccount } from "../../api/explore";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      telephone: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = (text, name) => {
    this.setState({
      [name]: text
    });
  };

  onSignup = async state => {
    try {
      const { replace } = this.props.navigation;
      const handleLogin = this.props.navigation.getParam(
        "handleLogin",
        "false"
      );

      const response = await signupAccount(state);
      if (response) {
        replace("Login", { handleLogin: handleLogin });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { replace } = this.props.navigation;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.registerContainer}>
              <Text style={styles.register}>Signup</Text>
            </View>
            <TextInput
              style={styles.text}
              placeholderTextColor="#6eb5e5"
              placeholder="Nama Lengkap"
              returnKeyType="next"
              keyboardType="default"
              onChangeText={text => this.handleChange(text, "fullName")}
              value={this.state.fullName}
            />
            <TextInput
              style={styles.text}
              placeholderTextColor="#6eb5e5"
              placeholder="Telephone"
              returnKeyType="next"
              keyboardType="number-pad"
              onChangeText={text => this.handleChange(text, "telephone")}
              value={this.state.telephone}
            />
            <TextInput
              style={styles.text}
              placeholderTextColor="#6eb5e5"
              placeholder="Email"
              returnKeyType="next"
              keyboardType="email-address"
              onChangeText={text => this.handleChange(text, "email")}
              value={this.state.email}
            />
            <TextInput
              style={styles.text}
              placeholderTextColor="#6eb5e5"
              placeholder="Password"
              secureTextEntry
              returnKeyType="next"
              onChangeText={text => this.handleChange(text, "password")}
              value={this.state.password}
            />
            <TextInput
              style={styles.text}
              placeholderTextColor="#6eb5e5"
              placeholder="Confirm Password"
              secureTextEntry
              returnKeyType="go"
              onChangeText={text => this.handleChange(text, "confirmPassword")}
              value={this.state.confirmPassword}
            />

            <Button
              style={styles.buttonSignup}
              mode="contained"
              onPress={() => {
                this.onSignup(this.state);
              }}
            >
              Sign up
            </Button>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Ready have account?{" "}
              <Text onPress={() => replace("Login")} style={styles.login}>
                Login
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
    marginVertical: 20
  },
  registerContainer: {
    paddingBottom: 20
  },
  formContainer: {
    flexGrow: 1,
    flex: 1
  },
  infoContainer: {
    alignItems: "center",
    paddingTop: 30
  },
  info: {
    color: "#95a5a6"
  },
  login: {
    color: "#2980b9"
  },
  register: {
    alignSelf: "center",
    fontSize: 25,
    color: "#2487c9",
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  text: {
    borderColor: "#3498db",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: "#3498db"
  },
  status: {
    color: "#3498db",
    marginBottom: 10,
    paddingHorizontal: 15,
    borderColor: "#3498db",
    borderWidth: 1,
    borderRadius: 10
  },
  buttonSignup: {
    backgroundColor: "#2980b9",
    marginTop: 10
  }
});
