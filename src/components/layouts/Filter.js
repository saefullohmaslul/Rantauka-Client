import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import InputText from "../../components/Input/InputText";
import InputCheckbox from "../../components/Input/InputCheckbox";
import SubmitBottom from "../../components/Button/SubmitBottom";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      fasilitas: [
        { id: 1, status: false, title: "AC" },
        { id: 2, status: false, title: "TV" },
        { id: 3, status: false, title: "Almari Pakaian" },
        { id: 4, status: false, title: "Kamar Md Dalam" },
        { id: 5, status: false, title: "Internet" },
        { id: 6, status: false, title: "Parkir Mobil" },
        { id: 7, status: false, title: "Tempat Tidur" },
        { id: 8, status: false, title: "Meja dan Kursi" },
        { id: 9, status: false, title: "Hewan Peliharaan" },
        { id: 10, status: false, title: "Sekamar Berdua" },
        { id: 11, status: false, title: "Kamar Kosongan" },
        { id: 12, status: false, title: "Security" },
        { id: 13, status: false, title: "Air Panas" }
      ],
      lainnya: [
        { id: 1, status: false, title: "Pasutri" },
        { id: 2, status: false, title: "Akses 24 Jam" },
        { id: 3, status: false, title: "Khusus Karyawan" }
      ]
    };
  }

  handleFasilitas = id => {
    const fasilitasIndex = this.state.fasilitas.findIndex(val => val.id === id);
    const { fasilitas } = this.state;
    fasilitas[fasilitasIndex].status = !fasilitas[fasilitasIndex].status;

    this.setState({
      fasilitas
    });
  };

  handleLainnya = id => {
    const fasilitasIndex = this.state.lainnya.findIndex(val => val.id === id);
    const { lainnya } = this.state;
    lainnya[fasilitasIndex].status = !lainnya[fasilitasIndex].status;

    this.setState({
      lainnya
    });
  };

  handleIconRight = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <InputText h2="Gender" placeholder="Masukkan gender" />
          <InputText h2="Jangka Waktu" placeholder="Jangka waktu kos" />
          <InputText h2="Minimal Pembayaran" placeholder="Optional" />
          <View style={styles.inputContainer}>
            <Text style={styles.h2}>Fasilitas</Text>
            <View>
              {this.state.fasilitas.map(fasilitas => (
                <InputCheckbox
                  key={fasilitas.id}
                  status={fasilitas.status ? "checked" : "unchecked"}
                  handleFasilitas={this.handleFasilitas}
                  fasilitas={fasilitas}
                  title={fasilitas.title}
                />
              ))}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.h2}>Lainnya</Text>
            <View>
              {this.state.lainnya.map(lainnya => (
                <InputCheckbox
                  key={lainnya.id}
                  status={lainnya.status ? "checked" : "unchecked"}
                  handleFasilitas={this.handleLainnya}
                  fasilitas={lainnya}
                  title={lainnya.title}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <SubmitBottom title="SIMPAN" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: { paddingHorizontal: 20, marginBottom: 45 },
  h2: {
    color: "#2c3e50",
    fontWeight: "500",
    fontSize: 15
  },
  inputContainer: { paddingTop: 10 },
  inputText: {
    borderBottomColor: "#b6daf2",
    borderBottomWidth: 2,
    paddingHorizontal: 5
  },
  fasilitasItem: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonSubmitContainer: {
    padding: 20,
    alignContent: "center",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    flex: 1,
    flexDirection: "row"
  },
  btnSubmit: { flex: 1 }
});

//make this component available to the app
export default Filter;
