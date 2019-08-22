import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Provider as PaperProvider } from "react-native-paper";

import { theme, btnColor } from "../../constant";

class LoginPemilik extends Component {
  handleIklan = async () => {
    try {
      const isLogin = await AsyncStorage.getItem("@isLogin");
      console.log(isLogin);
      if (isLogin === "true") {
        this.props.navigation.navigate("Iklan");
      } else {
        this.props.navigation.navigate("Profile");
      }
    } catch (err) {
      this.props.navigation.navigate("Profile");
    }
  };

  handleLogin = async () => {
    try {
      await AsyncStorage.setItem("@isLogin", "true");
      this.props.navigation.replace("Iklan");
    } catch (err) {
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Tertarik mengiklankan kosmu?</Text>
          </View>
          <TouchableOpacity onPress={this.handleIklan}>
            <View style={[styles.button, { backgroundColor: btnColor }]}>
              <Text style={styles.link}>Pasang Iklan</Text>
            </View>
          </TouchableOpacity>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center"
  },
  textContainer: {
    flex: 1
  },
  button: {
    padding: 10,
    borderRadius: 5
  },
  text: {
    color: "#2c3e50",
    fontWeight: "400"
  },
  link: {
    color: "#fff"
  }
});

export default LoginPemilik;
