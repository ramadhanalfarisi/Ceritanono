//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class MainMenu extends Component {
  goCerita() {
    this.props.navigation.navigate('MenuCerita');
  }
  goBantuan() {
    this.props.navigation.navigate('Bantuan');
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={{flex: 1, paddingTop: 60}}>
          <ScrollView>
            <View style={{alignItems: 'center', paddingTop: 20}}>
              <View style={{width: 100, height: 100}}>
                <Image
                  source={require('../assets/reading.png')}
                  style={{
                    height: null,
                    width: null,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  fontWeight: '700',
                  paddingTop: 10,
                  width: 100,
                }}>
                Ceritanono
              </Text>
            </View>

            <View style={{paddingTop: HEIGHT - 450, alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: WIDTH - 120,
                  backgroundColor: '#3C6382',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}
                onPress={() => this.goCerita()}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                    width: 63,
                  }}>
                  CERITA
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: WIDTH - 120,
                  backgroundColor: '#3C6382',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginTop: 10,
                }}
                onPress={() => this.goBantuan()}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                    width: 85,
                  }}>
                  BANTUAN
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
  },
});

//make this component available to the app
export default MainMenu;
