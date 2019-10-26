//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class ImageScroll extends Component {
  render() {
    return (
      <View style={{paddingRight: 20}}>
        <Image
          source={this.props.image}
          style={{width: WIDTH - 270, height: 120, borderRadius: 10}}
        />
      </View>
    );
  }
}

//make this component available to the app
export default ImageScroll;
