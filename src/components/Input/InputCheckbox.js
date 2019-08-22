import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { btnColor } from "../../constant";

class Filter extends Component {
  render() {
    const { status, title } = this.props;
    return (
      <View>
        <View style={styles.fasilitasItem}>
          <Checkbox
            onPress={() => this.props.handleFasilitas(this.props.fasilitas.id)}
            status={status}
            color={btnColor}
          />
          <Text>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fasilitasItem: {
    flexDirection: "row",
    alignItems: "center"
  }
});

//make this component available to the app
export default Filter;
