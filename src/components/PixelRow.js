import React from 'react';
import { View, Text } from 'react-native';
import PixelBox from './PixelBox';
import Panel from './Panel';

class PixelRow extends React.Component {
    pixelPress = (action) => {
        console.log(action);
        console.log("hit!");
    }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <PixelBox onPress={ this.pixelPress } />
        <PixelBox onPress={ this.pixelPress } />
        <PixelBox onPress={ this.pixelPress } />
        <PixelBox onPress={ this.pixelPress } />
        <PixelBox onPress={ this.pixelPress } />
        <Panel />
      </View>
    );
  }
}

export default PixelRow;
