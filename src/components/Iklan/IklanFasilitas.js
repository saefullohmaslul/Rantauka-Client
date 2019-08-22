import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { primaryColor, secondaryColor, thirdColor } from "../../api/constans";

export default class IklanFasilitas extends Component {
  constructor() {
    super();
    this.state = {
      fasilitas: [
        {
          id: 1,
          nama: "AC",
          status: false
        },
        {
          id: 2,
          nama: "Kasur",
          status: false
        },
        {
          id: 3,
          nama: "Kamar Mandi Dalam",
          status: false
        },
        {
          id: 4,
          nama: "Wifi",
          status: false
        },
        {
          id: 5,
          nama: "Dapur",
          status: false
        },
        {
          id: 6,
          nama: "Parkiran",
          status: false
        },
        {
          id: 7,
          nama: "TV",
          status: false
        },
        {
          id: 8,
          nama: "Almari Pakaian",
          status: false
        },
        {
          id: 9,
          nama: "Internet",
          status: false
        },
        {
          id: 10,
          nama: "Parkir Mobil",
          status: false
        },
        {
          id: 11,
          nama: "Parkir Motor",
          status: false
        },
        {
          id: 12,
          nama: "Kamar Kosongan",
          status: false
        },
        {
          id: 13,
          nama: "Security",
          status: false
        },
        {
          id: 14,
          nama: "Sekamar Berdua",
          status: false
        },
        {
          id: 15,
          nama: "Pembantu",
          status: false
        }
      ]
    };
  }

  changeStatus = async id => {
    const arrIndex = this.state.fasilitas.findIndex(
      fasilitas => fasilitas.id === id
    );
    let fasilitas = this.state.fasilitas;
    fasilitas[arrIndex].status = !fasilitas[arrIndex].status;

    await this.setState({
      fasilitas
    });
    this.props.changeKost(this.state.fasilitas);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Fasilitas</Text>
        <FlatList
          data={this.state.fasilitas}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={
                  item.status
                    ? [
                        styles.fasilitasContainer,
                        { backgroundColor: secondaryColor }
                      ]
                    : styles.fasilitasContainer
                }
                activeOpacity={0.7}
                onPress={() => this.changeStatus(item.id)}
              >
                <Text
                  style={
                    item.status
                      ? [styles.fasilitasText, { color: "#fff" }]
                      : styles.fasilitasText
                  }
                >
                  {item.nama}
                </Text>
              </TouchableOpacity>
            );
          }}
          extraData={this.state}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  h2: {
    color: "#2c3e50",
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 10
  },
  fasilitasContainer: {
    padding: 7,
    flex: 1,

    borderWidth: 1,
    borderColor: thirdColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    height: 53
  },
  fasilitasText: {
    textAlign: "center",
    color: thirdColor
  }
});
