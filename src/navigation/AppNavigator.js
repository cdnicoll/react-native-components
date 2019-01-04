import { createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import ChartsScreen from "../screens/ChartsScreen";
import PixelBoxScreen from "../screens/PixelBoxScreen";


export default (AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Charts: ChartsScreen,
    PixelBox: PixelBoxScreen,
  },
  {
    initialRouteName: "Home"
  }
));
