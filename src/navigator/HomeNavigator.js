import React from "react";
import { createStackNavigator } from "react-navigation";
import { TextInput } from "react-native";

import Home from "../screens/Home/index";
import Kos from "../screens/Kos/KosList";
import KosDetail from "../screens/Kos/KosDetail";
import Login from "../screens/Auth/Login";
import Iklan from "../screens/Iklan/Iklan";
import Filter from "../screens/Filter/Filter";
import Urutkan from "../screens/Urutkan/Urutkan";
import Booking from "../screens/Booking/Booking";
import BookingCalender from "../screens/Booking/BookingCalender";
import BookingList from "../screens/Booking/BookingList";
import BookingDuration from "../screens/Booking/BookingDuration";

const KosList = createStackNavigator(
  {
    Kos: {
      screen: Kos,
      navigationOptions: {
        header: null
      }
    },
    KosDetail: {
      screen: KosDetail
    },
    Filter: {
      screen: Filter,
      navigationOptions: {
        title: "Filter"
      }
    },
    Urutkan: {
      screen: Urutkan,
      navigationOptions: {
        header: null
      }
    },
    Booking: {
      screen: Booking,
      navigationOptions: {
        title: "Booking"
      }
    },
    BookingCalender: {
      screen: BookingCalender,
      navigationOptions: {
        header: null
      }
    },
    BookingDuration: {
      screen: BookingDuration,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#2980b9"
    }
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Rantauka"
      }
    },
    KosList: {
      screen: KosList,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Iklan: {
      screen: Iklan
    },
    BookingList: {
      screen: BookingList
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#2980b9"
    }
  }
);

HomeNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default HomeNavigator;
