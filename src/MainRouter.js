import {createStackNavigator, createAppContainer} from 'react-navigation';

import Animasi from './Animasi';
import Baca from './Baca';
import Bantuan from './Bantuan';
import MainMenu from './MainMenu';
import MenuCerita from './MenuCerita';

const Stack = createStackNavigator(
  {
    MainMenu: MainMenu,
    MenuCerita: MenuCerita,
    Bantuan: Bantuan,
    Baca: Baca,
    Animasi: Animasi,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export const Container = createAppContainer(Stack);
