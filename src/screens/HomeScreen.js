import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Victory Chart Components"
          onPress={() => this.props.navigation.navigate("Charts")}
        />
        <Button
          title="Go to Pixel Box"
          onPress={() => this.props.navigation.navigate("PixelBox")}
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
