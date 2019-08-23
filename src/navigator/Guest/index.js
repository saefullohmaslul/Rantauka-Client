import { createStackNavigator } from "react-navigation";

import {
  Login,
  Register,
  KosList,
  KosDetail,
  AuthIndex,
  AuthRoot
} from "../../components/layouts";
import MenuNavigator from "./Menu";
import { primaryColor } from "../../api/constans";

const GuestNavigator = createStackNavigator(
  {
    Menu: {
      screen: MenuNavigator
    },
    AuthIndex: {
      screen: AuthIndex
    }
  },
  {
    defaultNavigationOptions: {
      header: null,
      headerTintColor: primaryColor
    }
  }
);

export default GuestNavigator;
