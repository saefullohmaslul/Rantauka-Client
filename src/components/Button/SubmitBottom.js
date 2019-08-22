import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { btnColor } from "../../constant";

class SubmitBottom extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.submit, { backgroundColor: btnColor }]}
      >
        <Text style={styles.btnSubmit}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  submit: {
    flexDirection: "row",
    padding: 12,
    position: "absolute",
    bottom: 0
  },
  btnSubmit: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "500"
  }
});

export default SubmitBottom;
