import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import SeriesScreen from './pages/SeriesScreen';
import SerieDetailScreen from './pages/SerieDetailScreen';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Bem vindo',
      },
    },
    Main: {
      screen: SeriesScreen,
    },
    SerieDetail: {
      screen: SerieDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Minhas series',
      hearderTintColor: 'white',
      headerStyle: {
        backgroundColor: '#003994',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
