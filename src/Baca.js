//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import PageBaca from './PageBaca';
import SoundPlayer from 'react-native-sound-player';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class Baca extends Component {
  constructor() {
    super();
    this.scrolling = this.scrolling.bind(this);
  }

  state = {
    content: [
      {
        fill:
          'Pada zaman dahulu, terdapat kerajaan pakuan penjajahan yang dipimpin oleh raja prabu Siliwangi, sang prabu memiliki anak yang bernama Putri Kandita, ia gadis yang sangat cantik, dan memiliki sifat seperti ayahnya. Ia juga merupakan calon pewaris tahta raja Prabu Siliwangi. Mendengar hal tersebut para selir dan anak-anak lainnya tidak setuju.',
        back: require('../assets/background/paragraf1.jpg'),
        color: '#000',
        lagu: 'par1',
      },
      {
        fill:
          'Suatu hari para selir dan anak-anak membuat suatu rencana yaitu meminta bantuan kepada penyihir sakti. Dengan ilmu hitamnya ia menyihir Putri Kandita dan ibunya agar memberikan penyakit kusta yaitu berubah menjadi wajah buruk serta tubuh penuh dengan borok dan mengeluarkan bau tak sedap.',
        back: require('../assets/background/paragraf2.jpg'),
        color: '#130f40',
        lagu: 'par2',
      },
      {
        fill:
          'Tanpa menunggu lama, sang penyihir melaksankannya. Dengan ilmu hitam ia menyihir Putri Kandita dan ibunya agar menderita penyakit kusta. Putri Kandita dan sang permaisuri mengidap penyakit kusta yang tak kunjung sembuh. Prabu Siliwangi yang merasa heran melihat penyakit aneh pada dua orang kesayangannya itu langsung memanggil tabib istana untuk melakukan pengobatan.',
        back: require('../assets/background/paragraf3.jpg'),
        color: '#000',
        lagu: 'par3',
      },
      {
        fill:
          'Hari demi hari penyakit Putri Kandita dan ibunya bertambah parah. Tubuh mereka semakin lemas karena tidak dapat mencerna makanan dan minuman. Putri Kandita masih bertahan menghadapi penyakitnya. Sang ibunda ternyata tidak dapat bertahan hingga akhirnya menghembuskan nafas terakhir.',
        back: require('../assets/background/paragraf4.jpg'),
        color: '#130f40',
        lagu: 'par4',
      },
      {
        fill:
          'Putri Kandita dan raja sangat terpukul dengan meninggalnya permaisuri. Namun sang prabu pun merasa sangat terpukul melihat kondisi Putri Kandita yang tidak menunjukkan tanda-tanda kesembuhan. Prabu Siliwangi sangat sangat cemas karena Putri Kandita yang akan meneruskan tahta kerajaan.',
        back: require('../assets/background/paragraf4.jpg'),
        color: '#130f40',
        lagu: 'par5',
      },
      {
        fill:
          'Suatu hari, para Selir dan anak-anaknya datang menemui Raja untuk menghasut agar Putri Kandita diusir. Awalnya, Raja menolak. Namun karena takut penyakitnya menular, dengan terpaksa Prabu Siliwangi menyetujui usulan tersebut. Tanpa sepengetahuan raja, selir, dan saudara-saudaranya, Putri Kandita yang mendengar pembicaraan tersebut sangat kecewa.',
        back: require('../assets/background/paragraf5.jpg'),
        color: '#95a5a6',
        lagu: 'par6',
      },
      {
        fill:
          'Ia memutuskan untuk melarikan diri dari istana. Dalam suasana hati yang sedih, bingung, dan tidak menentu, Putri Kandita berjalan keluar dari istana tanpa tujuan yang pasti. Selama berhari-hari, ia berjalan tanpa tujuan hingga tiba di pantai selatan Pulau Jawa yang memiliki banyak batu karang dan ombak besar. Di salah satu batu karang itu dia istirahat hingga tertidur karena kelelahan.',
        back: require('../assets/background/paragraf5.jpg'),
        color: '#95a5a6',
        lagu: 'par7',
      },
      {
        fill:
          'Dalam tidurnya, Putri Kandita bermimpi mendengar sebuah suara gaib yang menyuruhnya menceburkan diri ke laut agar penyakitnya sembuh dan sehat seperti sediakala. Putri Kandita pun terbangun dari tidurnya. Ia lalu merenung meresapi kata-kata gaib tersebut karena ragu apakah suara itu merupakan sebuah wangsit atau hanya orang iseng yang membisiki saat dia tertidur.',
        back: require('../assets/background/paragraf6.jpg'),
        color: '#130f40',
        lagu: 'par8',
      },
      {
        fill:
          'Tetapi setelah melihat sekeliling, sejauh mata memandang yang ada hanyalah hamparan pasir putih beserta ombak bergulung-gulung di sekitarnya. Oleh karena itu, yakinlah Putri Kandita bahwa suara gaib tadi merupakan sebuah wangsit yang harus dia laksanakan demi kesembuhan dirinya.',
        back: require('../assets/background/paragraf6.jpg'),
        color: '#130f40',
        lagu: 'par9',
      },
      {
        fill:
          'Ia pun segera melakukan apa yang diperintakan. Pada saat menyentuh air, penyakitnya berangsur membaik dan hilang. Kesembuhan penyakitnya membuat ia tidak pulang ke istana lagi dan menetap di Pantai Selatan dengan para nelayan.',
        back: require('../assets/background/paragraf7.jpg'),
        color: '#000',
        lagu: 'par10',
      },
      {
        fill:
          'Sejak tinggal di Pantai Selatan, Putri Kandita terkenal sebagai wanita yang sangat cantik. Banyak pangeran kerajaan yang ingin melamarnya, tetapi ia tidak tertarik dengan pangeran tersebut. Putri Kandita pun juga mengajukan persyaratan bahwa siapa yang ingin menikah dengannya harus mengadu kesaktian di atas gelombang laut.',
        back: require('../assets/background/paragraf7.jpg'),
        color: '#000',
        lagu: 'par11',
      },
      {
        fill:
          'Dari persyaratan tersebut, ada beberapa pangeran yang mengundurkan diri, dan ada juga yang menerima persyaratan itu. Dari persyaratan yang diajukan, tidak ada satu pun pangeran kerajaan yang bisa mengalahkan Putri Kandita, hingga mereka menjadi pengikut setia. Sejak saat itu lah Putri Kandita dijuluki Nyi Roro Kidul. ',
        back: require('../assets/background/paragraf7.jpg'),
        color: '#000',
        lagu: 'par12',
      },
    ],
    selectedIndex: 0,
    currentPosition: 0,
    statusSound: 'OFF',
  };

  componentDidMount() {
    SoundPlayer.playSoundFile('par1', 'mp3');
    this.activeInterval = setInterval(this.scrolling, 27000);
  }

  componentWillUnmount() {
    clearInterval(this.activeInterval);
    SoundPlayer.stop();
  }

  scrolling() {
    // Start scrolling if there's more than one stock to display
    if (this.state.content.length > 1) {
      // Increment position with each new interval
      const position = this.state.currentPosition + 360;
      this.ticker.scrollTo({x: position, animated: true});
      const inter = this.state.selectedIndex + 1;
      SoundPlayer.playSoundFile(this.state.content[inter].lagu, 'mp3');
      // After position passes this value, snaps back to beginning
      let maxOffset = 20000;
      // Set animation to repeat at end of scroll
      if (this.state.currentPosition > maxOffset) {
        clearInterval(this.activeInterval);
      } else {
        this.setState({currentPosition: position});
        this.setState({
          selectedIndex: inter,
        });
      }
    }
  }

  masukEvaluasi() {
    clearInterval(this.activeInterval);
    SoundPlayer.stop();
    this.props.navigation.navigate('Evaluasi');
  }

  selanjutnya() {
    if (this.state.content.length > 1) {
      // Increment position with each new interval
      const position = this.state.currentPosition + 360;
      this.ticker.scrollTo({x: position, animated: true});
      const inter = this.state.selectedIndex + 1;
      SoundPlayer.playSoundFile(this.state.content[inter].lagu, 'mp3');
      // After position passes this value, snaps back to beginning
      let maxOffset = 20000;
      // Set animation to repeat at end of scroll
      if (this.state.currentPosition > maxOffset) {
        clearInterval(this.activeInterval);
      } else {
        this.setState({currentPosition: position});
        this.setState({
          selectedIndex: inter,
        });
      }
    }
  }

  sebelumnya() {
    if (this.state.content.length > 1) {
      // Increment position with each new interval
      const position = this.state.currentPosition - 360;
      this.ticker.scrollTo({x: position, animated: true});
      const inter = this.state.selectedIndex - 1;
      SoundPlayer.playSoundFile(this.state.content[inter].lagu, 'mp3');
      // After position passes this value, snaps back to beginning
      let maxOffset = 20000;
      // Set animation to repeat at end of scroll
      if (this.state.currentPosition > maxOffset) {
        clearInterval(this.activeInterval);
      } else {
        this.setState({currentPosition: position});
        this.setState({
          selectedIndex: inter,
        });
      }
    }
  }
  controlSound(status) {
    if (status === 'OFF') {
      SoundPlayer.setVolume(0);
      this.setState({
        statusSound: 'ON',
      });
    } else {
      SoundPlayer.setVolume(1);
      this.setState({
        statusSound: 'OFF',
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', paddingTop: 20}}>
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
        <View style={{alignSelf: 'flex-end', paddingRight: 25, paddingTop: 15}}>
          <TouchableOpacity
            onPress={() => this.controlSound(this.state.statusSound)}
            style={{
              width: 90,
              height: 30,
              backgroundColor: '#2c3e50',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: '#fff', fontSize: 15}}>
              SOUND {this.state.statusSound}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 15, alignItems: 'center'}}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false}
            ref={ref => (this.ticker = ref)}
            showsHorizontalScrollIndicator={false}
            style={{zIndex: 1}}
            contentContainerStyle={{justifyContent: 'space-between'}}>
            {this.state.content.map((item, index) => {
              if (index === 0) {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <ImageBackground
                      source={item.back}
                      style={{
                        height: 480,
                        width: WIDTH - 50,
                        borderRadius: 10,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{paddingHorizontal: 15, paddingVertical: 10}}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: item.color,
                          }}>
                          {item.fill}
                        </Text>
                      </View>
                    </ImageBackground>
                    <TouchableOpacity
                      style={{
                        height: 40,
                        width: 120,
                        borderRadius: 10,
                        backgroundColor: '#192a56',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        alignSelf: 'flex-end',
                      }}
                      onPress={() => this.selanjutnya()}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        SELANJUTNYA
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              } else if (index > 0 && index !== this.state.content.length - 1) {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <ImageBackground
                      source={item.back}
                      style={{
                        height: 480,
                        width: WIDTH - 50,
                        borderRadius: 10,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{paddingHorizontal: 15, paddingVertical: 10}}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: item.color,
                          }}>
                          {item.fill}
                        </Text>
                      </View>
                    </ImageBackground>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          height: 40,
                          width: 120,
                          borderRadius: 10,
                          backgroundColor: '#192a56',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: 10,
                        }}
                        onPress={() => this.sebelumnya()}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}>
                          SEBELUMNYA
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          height: 40,
                          width: 120,
                          borderRadius: 10,
                          backgroundColor: '#192a56',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: 10,
                        }}
                        onPress={() => this.selanjutnya()}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}>
                          SELANJUTNYA
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <ImageBackground
                      source={item.back}
                      style={{
                        height: 480,
                        width: WIDTH - 50,
                        borderRadius: 10,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{paddingHorizontal: 15, paddingVertical: 10}}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: item.color,
                          }}>
                          {item.fill}
                        </Text>
                      </View>
                    </ImageBackground>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          height: 40,
                          width: 120,
                          borderRadius: 10,
                          backgroundColor: '#192a56',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: 10,
                          alignSelf: 'flex-end',
                        }}
                        onPress={() => this.sebelumnya()}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}>
                          SEBELUMNYA
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          height: 40,
                          width: 120,
                          borderRadius: 10,
                          backgroundColor: '#192a56',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: 10,
                          alignSelf: 'flex-end',
                        }}
                        onPress={() => this.masukEvaluasi()}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}>
                          EVALUASI
                        </Text>
                      </TouchableOpacity>
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
    padding: 0,
    margin: 0,
  },
});

//make this component available to the app
export default Baca;
