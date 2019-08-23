import { createStackNavigator } from "react-navigation";

import Wishlist from "../components/layouts/Wishlist";

const WishlistNavigator = createStackNavigator(
  {
    Wishlist: {
      screen: Wishlist,
      navigationOptions: {
        title: "Wishlist"
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

Wishlist.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default WishlistNavigator;
