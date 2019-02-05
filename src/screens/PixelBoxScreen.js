import React from 'react';
import { View, Button, Text } from 'react-native';
import PixelBox from '../components/PixelBox';
import Panel from '../components/Panel';
import PixelRow from '../components/PixelRow';

const mockData = [
  {
    mood_rating: 1,
    favorite: false,
    comment: "Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed or est ac dolor auctor vehicula. Sed iaculis pharetra pharetra. Nam eleifend efficitur lacus id congue. Nullam et nunc urna.",
    feelings: ["happy", "sad", "utopian"],
    date: "2019-01-31"
  },
  {
    mood_rating: 3,
    favorite: true,
    comment: "Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed or est ac dolor auctor vehicula. Sed iaculis pharetra pharetra. Nam eleifend efficitur lacus id congue. Nullam et nunc urna.",
    feelings: ["happy", "sad", "utopian"],
    date: "2019-02-02"
  },
  {
    mood_rating: 2,
    favorite: false,
    comment: "Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed or est ac dolor auctor vehicula. Sed iaculis pharetra pharetra. Nam eleifend efficitur lacus id congue. Nullam et nunc urna.",
    feelings: ["happy", "sad", "utopian"],
    date: "2019-02-03"
  },
  {
    mood_rating: 1,
    favorite: false,
    comment: "Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed or est ac dolor auctor vehicula. Sed iaculis pharetra pharetra. Nam eleifend efficitur lacus id congue. Nullam et nunc urna.",
    feelings: ["happy", "sad", "utopian"],
    date: "2019-02-05"
  }
];

class PixelBoxScreen extends React.Component {
  render() {
    console.log(mockData);

    // [x] create mock data
    // [ ] create an array of PixelBoxes based off data
    // [ ] 

    return (
      <View>
        <Button
          title='Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <PixelRow />
        <PixelRow />
        <PixelRow />
      </View>
    );
  }
}

export default PixelBoxScreen;
