import { createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import VictoryChartsScreen from "../screens/VictoryChartsScreen";

export default (AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    VictoryCharts: VictoryChartsScreen,
  },
  {
    initialRouteName: "Home"
  }
));
