import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Victory Chart Components"
          onPress={() => this.props.navigation.navigate("VictoryCharts")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
