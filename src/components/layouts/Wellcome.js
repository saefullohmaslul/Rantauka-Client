import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icons from "react-native-vector-icons/Ionicons";

import { primaryColor } from "../../api/constans";

export default class Wellcome extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("@token");

    this.props.navigation.navigate(userToken ? "Logged" : "Guest");
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
        <View style={styles.iconContainer}>
          <Icons name={"md-rocket"} size={130} style={styles.icon} />
          <Text style={styles.brand}>Rantauka</Text>
          <ActivityIndicator size={50} color={"#fff"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: "#fff"
  },
  brand: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 20
  }
});
