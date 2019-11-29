import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import SeriesScreen from './pages/SeriesScreen';
import SerieDetailScreen from './pages/SerieDetailScreen';
import NewSerieScreen from './pages/NewSerieScreen';

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
      navigationOptions: ({navigation}) => {
        const {serie} = navigation.state.params;
        return {
          title: serie.title,
        };
      },
    },
    NewSerie: {
      screen: NewSerieScreen,
      navigationOptions: {
        title: 'Nova série',
      },
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
