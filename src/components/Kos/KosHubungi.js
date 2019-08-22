import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class KosHubungi extends Component {
  convertRupiah = nominal => {
    const reverse = nominal
      .toString()
      .split("")
      .reverse()
      .join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const hasil = ribuan
      .join(".")
      .split("")
      .reverse()
      .join("");
    return hasil;
  };
  render() {
    const kostList = this.props.kostList;
    return (
      <View style={styles.container}>
        <View style={styles.hargaContainer}>
          <Text style={styles.harga}>
            Rp {this.convertRupiah(kostList.house_price)} / bulan
          </Text>
          <Text style={styles.listHarga}>Lihat semua harga</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text style={styles.btnHubungiKos}>Hubungi Kos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Booking")}
          >
            <Text style={styles.btnBooking}>Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderTopColor: "#bdc3c7",
    borderTopWidth: 1
  },
  btnContainer: { flexDirection: "row", justifyContent: "flex-end" },
  hargaContainer: {
    flex: 1
  },
  harga: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "500"
  },
  btnHubungiKos: {
    padding: 4,
    borderColor: "#2980b9",
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    textAlign: "center"
  },
  btnBooking: {
    padding: 5,

    width: 80,
    color: "#fff",
    textAlign: "center"
  },
  btn: {
    borderRadius: 5,
    height: 45,
    backgroundColor: "#2980b9",
    justifyContent: "center",
    marginLeft: 5
  },
  listHarga: { color: "#2980b9" }
});

export default KosHubungi;
