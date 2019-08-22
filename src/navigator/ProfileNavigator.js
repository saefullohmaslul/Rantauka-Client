import { createStackNavigator } from "react-navigation";

import Root from "../screens/Auth/index";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import Profile from "../screens/Auth/Profile";
import BookingList from "../screens/Booking/BookingList";
import Setting from "../screens/Auth/Profile/Setting";

const ProfileNavigator = createStackNavigator(
  {
    Root: {
      screen: Root,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null
      }
    },
    BookingList: {
      screen: BookingList
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        title: "Pengaturan"
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

ProfileNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
export default ProfileNavigator;
