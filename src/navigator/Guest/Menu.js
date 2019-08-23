import { createBottomTabNavigator } from "react-navigation";
import { Explore, AuthIndex } from "../../components/layouts";

const MenuNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore
  },
  Wishlist: {
    screen: AuthIndex
  },
  Chat: {
    screen: AuthIndex
  },
  Login: {
    screen: AuthIndex
  }
});

export default MenuNavigator;
