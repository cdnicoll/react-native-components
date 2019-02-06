import React from 'react';
import { ScrollView, View, Button, Text } from 'react-native';
import PixelBox from '../components/PixelBox';
import Panel from '../components/Panel';

const mockData = [
  {
    mood_rating: 1,
    favorite: false,
    comment:
      'Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed or est ac dolor auctor vehicula. Sed iaculis pharetra pharetra. Nam eleifend efficitur lacus id congue. Nullam et nunc urna.',
    feelings: ['happy', 'sad', 'utopian'],
    date: '2019-01-01',
  },
  {
    mood_rating: 3,
    favorite: true,
    comment:
      'Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed or est ac dolor auctor vehicula. Sed iaculis pharetra pharetra. Nam eleifend efficitur lacus id congue. Nullam et nunc urna.',
    feelings: ['happy', 'sad', 'utopian'],
    date: '2019-01-03',
  },
  {
    mood_rating: 2,
    favorite: false,
    comment:
      'Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed or est ac dolor auctor vehicula. Sed iaculis pharetra pharetra. Nam eleifend efficitur lacus id congue. Nullam et nunc urna.',
    feelings: ['happy', 'sad', 'utopian'],
    date: '2019-02-04',
  },
  {
    mood_rating: 1,
    favorite: false,
    comment:
      'Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed or est ac dolor auctor vehicula. Sed iaculis pharetra pharetra. Nam eleifend efficitur lacus id congue. Nullam et nunc urna.',
    feelings: ['happy', 'sad', 'utopian'],
    date: '2019-02-05',
  },
];

class PixelBoxScreen extends React.Component {
  state = { pixelData: mockData };

/**
 * Ugly little helper function that will convert a number into an array
 * eg: 5 = [0,1,2,3]
 *
 * @param { int } number to turn into array
 * @returns { Array } of numbers
 */
  convertToArray = number => {
    const numArray = [];
    for (let i = 0; i < number; i++) {
      numArray.push(i);
    }

    return numArray;
  };

  /**
   * Gets a pixelLocation from an array of pixelData objects
   * The location is generated based off the date.
   * row = day
   * column = month
   * 
   * TODO:
   * [ ] I may need to add in year too
   * 
   * @param { Array } PixelData an array of objects
   * @returns { Object|undefined } PixelData Object
   */
  getPixelLocation = pixelData => {
    const date = new Date(pixelData.date);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    return { row: day, col: month };
  };

  /**
   * Gets a pixel object based off the row and column passed in
   * 
   * @param { int } row
   * @param { col } column
   * 
   * @returns {Object|undefined} PixelData object
   */
  getPixelObjectBasedOffRowCol = (row, col) => {
    for (let i = 0; i < mockData.length; i++) {
      if (
        this.getPixelLocation(mockData[i]).row == row &&
        this.getPixelLocation(mockData[i]).col == col
      ) {
        return mockData[i];
      }
    }
  };

  /**
   * Run when a pixel is pressed. Passed in through the PixelBox component
   * 
   * @param {  } action that is returned from the Component
   */
  pixelPress = action => {
    console.log(action);
    console.log('hit!');
  };

  /**
   * Renders the pixel boxes my creating a multidimentional array.
   * The row is <View> the columns are <PixelBox>
   * 
   * @returns { Array } Array of objects containing PixelBox components
   */
  renderPixels = () => {
    const max_rows = this.convertToArray(31);
    const max_cols = this.convertToArray(12);

    return max_rows.map(row => {
      return (
        <View key={"wrapper_"+row}>
          <View key={"row_"+row} style={{ flexDirection: 'row' }}>
            {max_cols.map(col => {
              return (
                <PixelBox 
                  key={col} 
                  pixelData={this.getPixelObjectBasedOffRowCol(row, col)} 
                  onPress={this.pixelPress} 
                />
              );
            })}
          </View>
          <Panel key={"panel_"+row}><Text>this is a test</Text></Panel>
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView>
        <Button
          title='Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        {this.renderPixels()}
      </ScrollView>
    );
  }
}

export default PixelBoxScreen;
