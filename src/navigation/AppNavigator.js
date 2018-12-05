import { createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import ChartsScreen from "../screens/ChartsScreen";

export default (AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Charts: ChartsScreen,
  },
  {
    initialRouteName: "Home"
  }
));
