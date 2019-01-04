import React from 'react';
import { View } from 'react-native';
import PixelBox from '../components/PixelBox';

class PixelBoxScreen extends React.Component {
  render() {
    return (
      <View>
        <PixelBox />
        <PixelBox />
        <PixelBox />
        <PixelBox />
        <PixelBox />
      </View>
    );
  }
}

export default PixelBoxScreen;
