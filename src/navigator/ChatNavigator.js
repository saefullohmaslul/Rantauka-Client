import { createStackNavigator } from "react-navigation";

import Chat from "../screens/Chat/Chat";
import ChatDetail from "../screens/Chat/ChatDetail";

const ChatNavigator = createStackNavigator(
  {
    Chat: {
      screen: Chat,
      navigationOptions: {
        title: "Chat"
      }
    },
    ChatDetail: {
      screen: ChatDetail
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

ChatNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default ChatNavigator;
