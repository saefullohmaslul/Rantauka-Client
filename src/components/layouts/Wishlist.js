import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { primaryColor, bgColor } from "../../api/constans";

class Wishlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="heart-multiple"
          size={100}
          style={{ color: primaryColor }}
        />
        <Text style={styles.info}>Kamu belum memiliki wishlist</Text>
      </View>
    );
  }
}

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: bgColor
  },
  info: {
    textAlign: "center",
    lineHeight: 20
  }
});
