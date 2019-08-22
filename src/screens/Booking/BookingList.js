import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Icon } from "react-native";
import { Card, Appbar } from "react-native-paper";
import { HeaderBackButton } from "react-navigation";
import { btnColor } from "../../constant";

export default class Bookinglist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  static navigationOptions = ({ navigation }) => {
    const handleBack = navigation.getParam("handleBack", () =>
      navigation.goBack()
    );
    return {
      headerLeft: (
        <HeaderBackButton tintColor={btnColor} onPress={handleBack} />
      ),
      title: "Booking"
    };
  };

  render() {
    return (
      <View>
        <Card style={styles.container}>
          <Card.Content style={{ paddingHorizontal: 0, paddingVertical: 0 }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  source={{
                    uri:
                      "https://static.mamikos.com/uploads/cache/data/style/2018-12-05/MI1iyNrc-540x720.jpg"
                  }}
                  style={{
                    width: 100,
                    height: 120,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5
                  }}
                />
              </View>
              <View style={{ flex: 1, marginHorizontal: 5 }}>
                <View style={{ marginVertical: 10 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Permata Bintaro Residence
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginRight: 15 }}>
                    <Text>Booking</Text>
                    <Text>Tanggal Booking</Text>
                  </View>
                  <View>
                    <Text>Durasi Sewa</Text>
                    <Text>1 bulan</Text>
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ fontSize: 15, color: btnColor }}>
                    Tunggu Konfirmasi
                  </Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  },
  header: {
    backgroundColor: "#2980b9"
  }
});
