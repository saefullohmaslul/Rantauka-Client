//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// create a component
class KosDescription extends Component {
  render() {
    console.log(this.props.kostList);
    const kostList = this.props.kostList;
    return (
      <View style={styles.container}>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Luas Kamar</Text>
          <View style={styles.luasKamarContainer}>
            <Icon style={styles.icon} name="arrow-expand-all" size={28} />
            <Text style={styles.luasKamar}>
              {kostList.house_length} x {kostList.house_width} m
            </Text>
          </View>
        </View>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Fasilitas kos dan Kamar</Text>
          <View style={styles.fasilitasKos}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View style={styles.fasilitasContainer}>
                <Icon style={styles.icon} name="bed-empty" size={28} />
                <Text style={styles.fasilitasText}>Kasur</Text>
              </View>
              <View style={styles.fasilitasContainer}>
                <Icon style={styles.icon} name="water" size={28} />
                <Text style={styles.fasilitasText}>Kamar Mandi Luar</Text>
              </View>
              <View style={styles.fasilitasContainer}>
                <Icon style={styles.icon} name="weather-windy" size={28} />
                <Text style={styles.fasilitasText}>AC</Text>
              </View>
              <View style={styles.fasilitasContainer}>
                <Icon style={styles.icon} name="wifi" size={28} />
                <Text style={styles.fasilitasText}>Wifi</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Deskripsi Kos</Text>
          <Text style={styles.text}>{kostList.house_description}</Text>
        </View>
        <View style={styles.pemilikContainer}>
          <Text style={styles.infoText}>
            Data bisa berubah sewaktu-waktu, tanyakan data saat ini.
          </Text>
          <View style={styles.pemilik}>
            <Icon
              style={styles.pemilikIcon}
              name="account-card-details-outline"
              size={40}
            />
            <View style={styles.pemilikDetail}>
              <Text style={styles.pemilikText}>Pemilik Kos</Text>
              <Text style={styles.pemilikText}>{kostList.user.full_name}</Text>
              <Text style={styles.pemilikHp}>{`${kostList.user.telephone.slice(
                0,
                6
              )}xxxxxx`}</Text>
            </View>
            <View style={styles.nomorPemilik}>
              <Text
                style={styles.nomorHp}
                onPress={() => alert(kostList.user.telephone)}
              >
                Minta Nomor
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {},
  luasTitle: {},
  luasContainer: {
    padding: 20,
    paddingBottom: 0
  },
  luasKamarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  luasKamar: {
    marginLeft: 10,
    fontSize: 15,
    color: "#2c3e50"
  },
  title: {
    color: "#2c3e50",
    fontSize: 15,
    fontWeight: "500"
  },

  fasilitasKos: {
    paddingTop: 20,
    marginLeft: -20,
    justifyContent: "center"
  },
  fasilitasContainer: {
    width: 90,
    justifyContent: "center"
  },
  fasilitasText: {
    textAlign: "center",
    color: "#2c3e50"
  },
  icon: {
    textAlign: "center",
    color: "#2980b9"
  },
  text: {
    color: "#2c3e50",
    marginTop: 10,
    marginBottom: 20
  },
  pemilikContainer: {
    backgroundColor: "#ecf0f1",
    padding: 20
  },
  infoText: {
    color: "#2c3e50",
    fontSize: 15
  },
  pemilikIcon: {
    color: "#2980b9",
    marginRight: 20
  },
  pemilik: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  pemilikText: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "500"
  },
  pemilikDetail: {
    marginLeft: 20
  },
  pemilikHp: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "400"
  },
  pemilikDetail: {
    flex: 1
  },
  nomorPemilik: {
    alignItems: "flex-end"
  },
  nomorHp: {
    color: "#2980b9"
  }
});

//make this component available to the app
export default KosDescription;
