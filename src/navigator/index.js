import { createSwitchNavigator } from "react-navigation";

import GuestNavigator from "./Guest";

const AppNavigator = createSwitchNavigator({
  Guest: {
    screen: GuestNavigator
  }
  // Logged: {
  //   screen:
  // }
});

export default AppNavigator;
