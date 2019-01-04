import React from 'react';
import {
  Animated,
  Easing,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';

class PixelBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
  }

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      },
    ).start(); // Starts the animation
  }

  _onPressButton = () => {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton} underlayColor='black'>
        <Animated.View
          style={[this.state.isToggled ? styles.squareFilled : styles.square]}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    margin: 5,
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
  },
  squareFilled: {
    margin: 5,
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default PixelBox;
