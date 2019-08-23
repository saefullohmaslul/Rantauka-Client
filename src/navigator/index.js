import { createSwitchNavigator } from "react-navigation";

import GuestNavigator from "./Guest";
import LoggedNavigator from "./Logged";

const AppNavigator = createSwitchNavigator({
  Guest: {
    screen: GuestNavigator
  },
  Logged: {
    screen: LoggedNavigator
  }
});

export default AppNavigator;
