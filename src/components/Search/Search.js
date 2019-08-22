//import liraries
import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

import SearchInput from "./SearchInput";

// create a component
class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <Title style={styles.searchText}>Mau cari kos dimana?</Title>
            <SearchInput
              onFocus={() =>
                this.props.navigation.navigate("KosList", {
                  autoFocus: true
                })
              }
              icon="ios-search"
              navigation={this.props.navigation}
              size={25}
            />
          </Card.Content>
        </Card>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 25
  },
  searchText: {
    fontSize: 18
  },
  inputContainer: {
    backgroundColor: "#d9ebf7",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 13,
    flex: 1
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  searchIcon: {
    padding: 12,
    paddingRight: 0,
    backgroundColor: "#d9ebf7",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  }
});

//make this component available to the app
export default Search;
