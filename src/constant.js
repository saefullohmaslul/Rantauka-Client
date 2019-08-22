import { DefaultTheme } from "react-native-paper";

const bgColor = "#ecf0f1";
const btnColor = "#2980b9";
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2980b9",
    accent: "#f1c40f"
  }
};

export { bgColor, theme, btnColor };
