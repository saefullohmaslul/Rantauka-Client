import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import ProfileNavigator from "./src/navigator/ProfileNavigator";
import HomeNavigator from "./src/navigator/HomeNavigator";
import ChatNavigator from "./src/navigator/ChatNavigator";
import WishlistNavigator from "./src/navigator/WishlistNavigator";
import { btnColor } from "./src/constant";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-outline" color={tintColor} size={25} />
        )
      }
    },
    Wishlist: {
      screen: WishlistNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart-outline" color={tintColor} size={25} />
        ),
        title: "Wishlist"
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
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-circle-outline" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#2980b9"
    },
    tabBarOptions: {
      activeTintColor: btnColor,
      inactiveTintColor: "grey"
    }
  }
);

export default createAppContainer(TabNavigator);
