import { createStackNavigator } from "react-navigation";

import {
  Login,
  Register,
  KosList,
  KosDetail,
  AuthIndex
} from "../../components/layouts";
import MenuNavigator from "./Menu";

const LoggedNavigator = createStackNavigator({
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      header: null
    }
  }
});

export default LoggedNavigator;
