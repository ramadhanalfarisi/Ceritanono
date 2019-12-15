import {createStackNavigator, createAppContainer} from 'react-navigation';

import Baca from './Baca';
import Bantuan from './Bantuan';
import MainMenu from './MainMenu';
import MenuCerita from './MenuCerita';
import Evaluasi from './Evaluasi';
import KomponenEvaluasi from './KomponenEvaluasi';

const Stack = createStackNavigator(
  {
    MainMenu: MainMenu,
    MenuCerita: MenuCerita,
    Bantuan: Bantuan,
    Baca: Baca,
    Evaluasi: Evaluasi,
    KomponenEvaluasi: KomponenEvaluasi,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export const Container = createAppContainer(Stack);
