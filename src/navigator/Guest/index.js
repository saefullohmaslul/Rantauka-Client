import { createStackNavigator } from "react-navigation";

import {
  Login,
  Register,
  KosList,
  KosDetail,
  AuthIndex
} from "../../components/layouts";
import MenuNavigator from "./Menu";

const GuestNavigator = createStackNavigator({
  Menu: {
    screen: MenuNavigator
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  HomeList: {
    screen: KosList
  },
  HomeDetail: {
    screen: KosDetail
  },
  AuthIndex: {
    screen: AuthIndex
  }
});

export default GuestNavigator;
