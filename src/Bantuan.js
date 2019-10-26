//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class Bantuan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={{flex: 1, alignItems: 'center', paddingTop: 60}}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
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
                }}>
                Ceritanono
              </Text>
            </View>

            <View style={{paddingTop: HEIGHT - 650}}>
              <View
                style={{
                  width: WIDTH - 100,
                  height: 300,
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  paddingTop: 15,
                }}>
                <View
                  style={{
                    paddingTop: 10,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', width: 60}}>
                    Bantuan
                  </Text>
                </View>
                <View style={{paddingTop: 20}}>
                  <View style={{paddingHorizontal: 10}}>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>
                      Baca Cerita
                    </Text>
                  </View>
                  <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                    <Text style={{fontSize: 13, fontWeight: '600'}}>
                      1. Klik tombol “Cerita”
                    </Text>
                    <Text style={{fontSize: 13, fontWeight: '600'}}>
                      2. Pilih dan klik cerita pada daftar cerita
                    </Text>
                    <Text style={{fontSize: 13, fontWeight: '600'}}>
                      3. Pilih “Baca”
                    </Text>
                  </View>
                </View>
                <View style={{paddingTop: 20}}>
                  <View style={{paddingHorizontal: 10}}>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>
                      Lihat Animasi Cerita
                    </Text>
                  </View>
                  <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                    <Text style={{fontSize: 13, fontWeight: '600'}}>
                      1. Klik tombol “Cerita”
                    </Text>
                    <Text style={{fontSize: 13, fontWeight: '600'}}>
                      2. Pilih dan klik cerita pada daftar cerita
                    </Text>
                    <Text style={{fontSize: 13, fontWeight: '600'}}>
                      3. Pilih “Animasi”
                    </Text>
                  </View>
                </View>
              </View>
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
  },
});

//make this component available to the app
export default Bantuan;
