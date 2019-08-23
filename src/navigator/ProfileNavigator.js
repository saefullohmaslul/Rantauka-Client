import { createStackNavigator } from "react-navigation";

import Root from "../components/layouts/AuthIndex";
import Login from "../components/layouts/Login";
import Register from "../components/layouts/Register";
import Profile from "../components/layouts/Profile";
import BookingList from "../components/layouts/BookingList";
import Setting from "../components/layouts/Setting";

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
