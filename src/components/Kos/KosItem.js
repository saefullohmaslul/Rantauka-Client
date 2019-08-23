import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import { BASE_URL } from "../../api/explore";

class KosItem extends Component {
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
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: `${BASE_URL}/${this.props.data.images[0].uri}`
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.jenis}>{this.props.data.house_type}</Text>
            <Text style={styles.separated}>•</Text>
            <Text style={styles.alamat}>{this.props.data.kecamatan}</Text>
          </View>
          <View>
            <Text style={styles.harga}>
              Rp. {this.convertRupiah(this.props.data.house_price)} / bulan
            </Text>
          </View>
          <View style={styles.namaContainer}>
            <Text style={styles.nama}>{this.props.data.house_name}</Text>
          </View>
          <View
            style={[
              styles.bookingContainer,
              {
                marginBottom: this.props.id == this.props.max ? 50 : 0
              }
            ]}
          >
            <Text style={styles.booking}>
              {this.props.data.booking ? `Bisa Booking` : `Ditempat`}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default KosItem;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  },
  textContainer: {
    marginHorizontal: 20
  },
  descriptionContainer: {
    paddingTop: 10,
    flexDirection: "row"
  },
  bookingContainer: {
    marginTop: 2,
    padding: 5,
    backgroundColor: "#2980b9",
    width: 100,
    borderRadius: 20
  },
  booking: {
    alignSelf: "center",
    color: "#ecf0f1",
    fontWeight: "600"
  },
  jenis: {
    color: "#2980b9",
    fontWeight: "bold",
    fontSize: 16
  },
  alamat: {
    color: "#7f8c8d",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 16
  },
  separated: {
    color: "#bdc3c7",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 20,
    top: -2
  },
  image: {
    resizeMode: "cover",
    marginHorizontal: 17,
    borderRadius: 5,
    height: 170
  },
  harga: {
    fontSize: 18,
    color: "#2d3436",
    fontWeight: "700"
  },
  namaContainer: {
    paddingVertical: 5
  },
  nama: {
    color: "#2d3436",
    fontSize: 18,
    fontWeight: "400"
  }
});
