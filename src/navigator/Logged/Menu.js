import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import ProfileNavigator from "./Profile";
import ExploreNavigator from "./Explore";
import WishlistNavigator from "./Wishlist";
import ChatNavigator from "./Chat";

const MenuNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-outline" color={tintColor} size={25} />
        ),
        title: "Explore"
      }
    },
    Wishlist: {
      screen: WishlistNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart-outline" color={tintColor} size={25} />
        )
      }
    },
    Chat: {
      screen: ChatNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="message-outline" color={tintColor} size={25} />
        )
      }
    },
    ProfileNavigator: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-circle-outline" color={tintColor} size={25} />
        ),
        title: "Profile"
      }
    }
  },
  {
    initialRouteName: "Explore"
  }
);

export default MenuNavigator;
