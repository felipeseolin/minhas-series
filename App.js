import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/pages/LoginScreen';
import SeriesScreen from './src/pages/SeriesScreen';

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem vindo',
    }
  },
  'Main': {
    screen: SeriesScreen
  },
}, {
  defaultNavigationOptions: {
    title: "Minhas series",
    hearderTintColor: 'white',
    headerStyle: {
      backgroundColor: '#003994',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
