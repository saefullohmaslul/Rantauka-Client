//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Message from "../Message/Message";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: [
        {
          id: "1",
          nama: "Saefulloh Maslul",
          pesan: "Saya mau pesan kos sekarang"
        },
        {
          id: "2",
          nama: "Suci Indah Lestari",
          pesan: "Saya mau pesan kos sekarang"
        }
      ]
    };
  }
  render() {
    const { message } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={message}
          renderItem={({ item }) => <Message message={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 20
  }
});

//make this component available to the app
export default Chat;
