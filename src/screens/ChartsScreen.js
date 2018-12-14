import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryZoomContainer,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
  VictoryLabel,
} from "victory-native";

// note month is zero indexed
const data = [
  { date: new Date(2018, 10, 17), score: 39 },
  { date: new Date(2018, 10, 23), score: 35 },
  { date: new Date(2018, 10, 29), score: 32 },
  { date: new Date(2018, 11, 1), score: 31 },
  { date: new Date(2018, 11, 6), score: 41 },
  { date: new Date(2018, 11, 13), score: 46 },
  { date: new Date(2018, 11, 22), score: 15 },
  { date: new Date(2018, 12, 4), score: 15 },
  { date: new Date(2018, 12, 11), score: 21 },
];

class ChartScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: {
        x: [new Date(2018, 10, 17), new Date(2018, 11, 11)],
      },
    };
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }
  render() {
    console.log(data);
    return (
      <View>
        <VictoryChart
          domain={{ y: [0, 100] }}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension='x'
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          {/* <VictoryAxis dependentAxis crossAxis tickLabelComponent={<VictoryLabel angle={90} />} /> */}
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
            }}
            data={data}
            x='date'
            y='score'
          />
          <VictoryScatter
            style={{
              parent: {
                border: "1px solid #ccc",
              },
              data: {
                fill: "#c43a31",
                fillOpacity: 0.6,
                stroke: "#c43a31",
                strokeWidth: 3,
              },
              labels: {
                fontSize: 15,
                fill: "#c43a31",
                padding: 15,
              },
            }}
            size={9}
            data={data}
            x='date'
            y='score'
            // labels={d => d.score}
          />
        </VictoryChart>
      </View>
    );
  }
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

export default ChartScreen;
