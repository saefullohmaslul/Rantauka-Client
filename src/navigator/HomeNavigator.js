import React from "react";
import { createStackNavigator } from "react-navigation";
import { TextInput } from "react-native";

import Home from "../components/layouts/Explore";
import Kos from "../components/layouts/KosList";
import KosDetail from "../components/layouts/KosDetail";
import Login from "../components/layouts/Login";
import Iklan from "../components/layouts/Iklan";
import Filter from "../components/layouts/Filter";
import Urutkan from "../components/layouts/Urutkan";
import Booking from "../components/layouts/Booking";
import BookingCalender from "../components/layouts/BookingCalender";
import BookingList from "../components/layouts/BookingList";
import BookingDuration from "../components/layouts/BookingDuration";

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
