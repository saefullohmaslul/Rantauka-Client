import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SearchComponent from "../../components/Search/Search";
import PromoComponent from "../../components/Promo/Promo";
import PasangIklan from "../../components/Iklan/PasangIklan";
import KotaPopuler from "../../components/KotaPopuler/KotaPopuler";
import KosList from "../../screens/Kos/KosList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      promoImage: [
        "https://mamikos.com/info/wp-content/uploads/2019/07/Banner-App-Beasiswa-Ngekos-New-830x356.jpg",
        "https://mamikos.com/uploads/cache/data/user/2019-01-28/I9kswUvH-360x480.jpg",
        "https://mamikos.com/uploads/cache/data/user/2019-02-06/tYYKBgjd-360x480.jpg",
        "https://mamikos.com/info/wp-content/uploads/2017/12/promo-kost-jabodetabek.jpg",
        "https://static.mamikos.com/uploads/cache/data/user/2019-07-31/z2algAvh-360x480.jpg",
        "https://mamikos.com/uploads/cache/data/user/2019-05-03/odhbQ7NP-360x480.jpg"
      ]
    };
  }

  render() {
    const { promoImage } = this.state;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SearchComponent navigation={this.props.navigation} />
        <View style={styles.separator} />
        <PromoComponent promoImage={promoImage} />
        <PasangIklan navigation={this.props.navigation} />
        <KotaPopuler navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  separator: {
    backgroundColor: "#ecf0f1",
    padding: 5
  }
});
