//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class Evaluasi extends Component {
  constructor() {
    super();
    this.scrolling = this.scrolling.bind(this);
  }

  state = {
    content: [
      {
        question: '1.	Siapa tokoh utama dari cerita tersebut ?',
        answer: [
          {
            opsi: 'A',
            content: 'Raja Prabu Siliwangi',
            jawaban: false,
          },
          {
            opsi: 'B',
            content: 'Putri Kandita',
            jawaban: true,
          },
          {
            opsi: 'C',
            content: 'Penyihir',
            jawaban: false,
          },
          {
            opsi: 'D',
            content: 'Klenting Kuning',
            jawaban: false,
          },
        ],
      },
      {
        question: '2.	Mengapa saudara putri Kandita tidak suka kepadanya ?',
        answer: [
          {
            opsi: 'A',
            content: 'Karena Putri Kandita buruk rupa',
            jawaban: false,
          },
          {
            opsi: 'B',
            content: 'Karena menderita sakit-sakitan',
            jawaban: false,
          },
          {
            opsi: 'C',
            content:
              'Karena putri Kandita menjadi calon pewaris tahta raja Prabu Siliwangi',
            jawaban: true,
          },
          {
            opsi: 'D',
            content:
              'Karena Putri Kandita memiliki wajah cantik sehingga mereka iri',
            jawaban: false,
          },
        ],
      },
      {
        question: '3.	Mengapa Putri Kandita kabur dari istana ?',
        answer: [
          {
            opsi: 'A',
            content:
              'Putri Kandita merasa kecewa terhadap saudara dan sang raja',
            jawaban: true,
          },
          {
            opsi: 'B',
            content: 'Putri kandita telah membunuh ibundanya',
            jawaban: false,
          },
          {
            opsi: 'C',
            content: 'Diusir oleh saudara dan sang raja karena penyakitnya',
            jawaban: false,
          },
          {
            opsi: 'D',
            content: 'Jawaban a dan c benar',
            jawaban: false,
          },
        ],
      },
      {
        question: '4.	Apa yang terjadi saat Putri Kandita tertidur di pantai ?',
        answer: [
          {
            opsi: 'A',
            content:
              'Bermimpi mendengar suara gaib yang menyuruhnya menyebur ke lautan',
            jawaban: true,
          },
          {
            opsi: 'B',
            content: 'Bertemu sang pangeran yang bisa menyembuhkan penyakitnya',
            jawaban: false,
          },
          {
            opsi: 'C',
            content: 'Terbawa ombak besar saat hendak pulang',
            jawaban: false,
          },
          {
            opsi: 'D',
            content:
              'Bertemu makhluk gaib yang bisa menyembuhkan penyakitnya serta membawanya pulang',
            jawaban: false,
          },
        ],
      },
      {
        question:
          '5.	Apa amat atau pesan moral yang dapat diambil dari cerita tersebut ?',
        answer: [
          {
            opsi: 'A',
            content: 'Tetaplah semangat untuk menjalani hidup',
            jawaban: false,
          },
          {
            opsi: 'B',
            content: 'Jagalah tali persaudaraan',
            jawaban: false,
          },
          {
            opsi: 'C',
            content: 'Selalu rukun terhadap saudara-saudara kita',
            jawaban: false,
          },
          {
            opsi: 'D',
            content: 'Janganlah iri hati terhadap apa yang dimiliki orang lain',
            jawaban: true,
          },
        ],
      },
    ],
    currentPosition: 0,
    score: 0,
    warna: '#3C6382',
  };

  scrolling() {
    const position = (this.state.currentPosition += 360);
    this.ticker.scrollTo({x: position, animated: true});
  }

  notif(status) {
    let total = this.state.score;
    if (status === true) {
      this.setState({score: total + 20});
    }
    ToastAndroid.show('Jawaban Tersimpan !', ToastAndroid.SHORT);
    this.scrolling();
  }

  notifTerakhir(status) {
    if (status === true) {
      this.props.navigation.navigate('KomponenEvaluasi', {
        score: this.state.score + 20,
      });
    } else {
      this.props.navigation.navigate('KomponenEvaluasi', {
        score: this.state.score,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', paddingTop: 30}}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: '600',
              flexWrap: 'wrap',
            }}>
            Legenda Nyi Roro Kidul
          </Text>
        </View>
        <View style={{paddingTop: 25, alignItems: 'center'}}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false}
            ref={ref => (this.ticker = ref)}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={this.setSelectedIndex}
            style={{zIndex: 1}}
            contentContainerStyle={{justifyContent: 'space-between'}}>
            {this.state.content.map((item, index) => {
              if (index >= 0 && index !== this.state.content.length - 1) {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <View
                      style={{
                        height: 540,
                        width: WIDTH - 50,
                        backgroundColor: '#E0E0E0',
                        borderRadius: 10,
                        paddingVertical: 25,
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <View
                          style={{
                            width: WIDTH - 75,
                            height: 150,
                            backgroundColor: '#7f8c8d',
                            justifyContent: 'center',
                            paddingHorizontal: 10,
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 15,
                              fontWeight: 'bold',
                            }}>
                            {item.question}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{paddingHorizontal: 15, paddingVertical: 10}}>
                        <FlatList
                          data={item.answer}
                          contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                          }}
                          renderItem={item2 => {
                            return (
                              <TouchableHighlight
                                onPress={() => this.notif(item2.item.jawaban)}>
                                <View
                                  style={{
                                    width: 280,
                                    height: 70,
                                    marginTop: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#3C6382',
                                    borderRadius: 10,
                                  }}>
                                  <Text
                                    style={{
                                      color: '#fff',
                                      fontSize: 15,
                                      fontWeight: 'bold',
                                      textAlign: 'center',
                                    }}>
                                    {item2.item.content}
                                  </Text>
                                </View>
                              </TouchableHighlight>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <View
                      style={{
                        height: 540,
                        width: WIDTH - 50,
                        backgroundColor: '#E0E0E0',
                        borderRadius: 10,
                        paddingVertical: 25,
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <View
                          style={{
                            width: WIDTH - 75,
                            height: 150,
                            backgroundColor: '#7f8c8d',
                            justifyContent: 'center',
                            paddingHorizontal: 10,
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 15,
                              fontWeight: 'bold',
                            }}>
                            {item.question}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{paddingHorizontal: 15, paddingVertical: 10}}>
                        <FlatList
                          data={item.answer}
                          contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                          }}
                          renderItem={item2 => {
                            return (
                              <TouchableHighlight
                                onPress={() =>
                                  this.notifTerakhir(item2.item.jawaban)
                                }>
                                <View
                                  style={{
                                    width: 280,
                                    height: 70,
                                    marginTop: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#3C6382',
                                    borderRadius: 10,
                                  }}>
                                  <Text
                                    style={{
                                      color: '#fff',
                                      fontSize: 15,
                                      fontWeight: 'bold',
                                      textAlign: 'center',
                                    }}>
                                    {item2.item.content}
                                  </Text>
                                </View>
                              </TouchableHighlight>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </View>
                );
              }
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C6382',
  },
});

//make this component available to the app
export default Evaluasi;
