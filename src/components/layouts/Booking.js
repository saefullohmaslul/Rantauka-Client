import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { Button, Checkbox } from "react-native-paper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { primaryColor, bgColor } from "../../api/constans";

const { width } = Dimensions.get("screen");
export default class Booking extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      booking: {
        rentalDate: undefined,
        rentalDuration: undefined,
        userId: undefined,
        houseId: undefined
      },
      house: {
        houseImage:
          "https://static.mamikos.com/uploads/cache/data/style/2018-12-05/MI1iyNrc-540x720.jpg",
        houseName: undefined,
        housePrice: undefined
      },
      user: {
        fullName: undefined,
        telephone: undefined
      }
    };
  }

  render() {
    const { checked } = this.state;
    const isEnable = checked == !false;
    const time = this.props.navigation.getParam("bookingDate");
    const duration = this.props.navigation.getParam("durationtime");

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.time}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("BookingCalender");
                }}
              >
                <Text>Tanggal Masuk </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <EvilIcons name="calendar" size={18} />
                  <Text>{time}</Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  alignItems: "flex-end",
                  flex: 1
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("BookingDuration");
                  }}
                >
                  <Text>Durasi Sewa</Text>
                  <Text>{duration}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line} />
            <View style={{ flex: 1, flexDirection: "row", marginVertical: 10 }}>
              <View style={{ alignItems: "flex-start", marginRight: 15 }}>
                <Image
                  source={{
                    uri: this.state.house.houseImage
                  }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text>Nama Kos</Text>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <EvilIcons name="calendar" size={25} />
                    <EvilIcons name="share-google" size={25} />
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>
                      Rp. 1.750.000 / bulan
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.line} />
            <View style={{ flex: 1, marginVertical: 10 }}>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text style={styles.header}>Data Penghuni</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text>Ubah</Text>
                </View>
              </View>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text>Nama Lengkap</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text>Lol</Text>
                </View>
              </View>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text>Jenis Kelamin</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text>Laki-laki</Text>
                </View>
              </View>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text>No. Handphone</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text>08384028732</Text>
                </View>
              </View>
              <View style={styles.residance}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text>Pekerjaan</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text>Karyawan</Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  alignItems: "flex-end",
                  marginTop: 10
                }}
              >
                Keterangan Biaya Lain
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.submitContainer}>
          <View style={styles.submitText}>
            <Checkbox
              color={primaryColor}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                this.setState({ checked: !checked });
              }}
            />
            <Text style={{ flex: 1 }}>
              Saya menyetujui syarat dan ketentuan berlaku dan memastikan data
              di atas benar.
            </Text>
          </View>
          <View>
            <Button
              color={primaryColor}
              disabled={!isEnable}
              mode="contained"
              onPress={() => {
                this.props.navigation.navigate("BookingList", {
                  handleBack: () => this.props.navigation.navigate("Index")
                });
              }}
            >
              Book
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  header: {
    fontWeight: "bold"
  },
  submitContainer: {
    position: "absolute",
    bottom: 0,
    width: width,
    borderTopWidth: 1,
    borderTopColor: bgColor
  },
  submitText: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 10
  },
  time: {
    flexDirection: "row",
    marginBottom: 15,
    flex: 1
  },
  residance: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5
  },
  line: {
    padding: 0,
    backgroundColor: "#f2f0f0",
    width: width - 20,
    height: 5
  }
});
