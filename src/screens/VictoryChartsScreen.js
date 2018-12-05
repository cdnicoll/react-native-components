import React from "react";
import {
    View,
    Button,
    Text
} from "react-native";

class VictoryChartScreen extends React.Component {
    render() {
        return(
            <View>
                <Text>Victory Chart Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate("Home")}
                />
            </View>
        );
    }
}

export default VictoryChartScreen;
