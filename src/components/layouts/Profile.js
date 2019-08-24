import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Produk from "../../components/Produk/Produk";
import ProdukMenuItem from "../../components/Produk/ProdukMenuItem";

class Profile extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Ionicons style={styles.icon} name="ios-person" size={23} />
          <Text style={styles.userName}>Saefulloh Maslul</Text>
          <View style={styles.header} />
        </View>
        <View style={styles.container}>
          <Produk />
          <ProdukMenuItem
            icon="ios-bookmarks"
            nama="Booking List"
            handlePress={() => this.props.navigation.navigate("BookingList")}
          />
          <ProdukMenuItem icon="ios-home" nama="Barang dan Jasa" />
          <ProdukMenuItem icon="ios-key" nama="Verifikasi Akun" />
          <ProdukMenuItem
            icon="ios-build"
            nama="Pengaturan"
            marginBottom={0.5}
            handlePress={() => this.props.navigation.navigate("Setting")}
          />
          <ProdukMenuItem
            icon="ios-call"
            nama="Hubungi Cs"
            marginBottom={0.5}
          />
          <ProdukMenuItem icon="ios-list" nama="Syarat dan Ketentuan" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    position: "relative",
    backgroundColor: "#ecf0f1"
  },
  container: {
    marginTop: 50
  },
  headerContainer: {
    padding: 80,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "#2980b9",
    position: "absolute",
    flexDirection: "row",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    alignItems: "center"
  },
  header: {
    flex: 1
  },
  userName: {
    color: "#fff",
    fontSize: 17,
    paddingLeft: 10
  },
  icon: {
    color: "#fff"
  }
});

export default Profile;
