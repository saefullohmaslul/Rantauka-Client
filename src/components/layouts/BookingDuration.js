import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { Button } from "react-native-paper";

import { primaryColor } from "../../api/constans";

export default class Duration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        mount: "pilih durasi"
      }
    };
  }
  updateMount = mount => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        mount: mount
      }
    }));
  };

  render() {
    return (
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Mulai kost berapa lama?
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{}}>Durasi sewa</Text>
          <Picker
            style={{ alignItems: "flex-end" }}
            selectedValue={this.state.user.mount}
            mode="dialog"
            style={{ height: 30, width: 150, fontSize: 15 }}
            onValueChange={this.updateMount}
          >
            <Picker.Item label="1 bulan" value="1 bulan" />
            <Picker.Item label="2 bulan" value="2 bulan" />
            <Picker.Item label="3 bulan" value="3 bulan" />
            <Picker.Item label="4 bulan" value="4 bulan" />
            <Picker.Item label="5 bulan" value="5 bulan" />
            <Picker.Item label="6 bulan" value="6 bulan" />
            <Picker.Item label="7 bulan" value="7 bulan" />
            <Picker.Item label="8 bulan" value="8 bulan" />
            <Picker.Item label="9 bulan" value="9 bulan" />
            <Picker.Item label="10 bulan" value="10 bulan" />
            <Picker.Item label="11 bulan" value="11 bulan" />
            <Picker.Item label="12 bulan" value="12 bulan" />
          </Picker>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Button
            color={primaryColor}
            mode="contained"
            onPress={() => {
              this.props.navigation.navigate("Booking", {
                durationtime: this.state.user.mount
              });
            }}
          >
            save
          </Button>
        </View>
      </View>
    );
  }
}
