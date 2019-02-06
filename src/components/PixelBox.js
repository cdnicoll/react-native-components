import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class PixelBox extends React.Component {
  constructor(props) {
    super(props);
    const isToggled = this.props.pixelData ? true : false;
    console.log(isToggled);
    this.state = {
      isToggled
    }
  }

  _onPress = () => {
    this.setState({
      isToggled: !this.state.isToggled,
    });
    console.log(!this.state.isToggled);
    this.props.onPress('poke!');
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPress} underlayColor='white'>
        <Animated.View
          style={[this.state.isToggled ? styles.squareFilled : styles.square]}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    margin: 2,
    width: 25,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
  },
  squareFilled: {
    margin: 2,
    width: 25,
    height: 25,
    backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default PixelBox;
