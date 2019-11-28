import * as firebase from 'firebase';
import {Alert} from 'react-native';

const USER_LOGIN = 'USER_LOGIN';
const userLogin = user => ({
  type: USER_LOGIN,
  user,
});

const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
});

export const processLogin = ({email, password}) => {
  const loginUserSuccess = user => {
    this.setState({message: 'Sucesso!'});
    this.props.navigation.navigate('Main');
  };

  const loginUserFailed = error => {
    this.setState({message: this.getMessageByError(error.code)});
  };

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(loginUserSuccess)
    .catch(error => {
      if (error.code == 'auth/user-not-found') {
        Alert.alert(
          'Usuário não encontrado',
          'Deseja criar um novo usuário?',
          [
            {
              text: 'Não',
              onPress: () => {
                console.log('não quis');
              },
            },
            {
              text: 'Sim',
              onPress: () => {
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(loginUserSuccess)
                  .catch(loginUserFailed);
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        loginUserFailed(error);
      }
    })
    .then(() => this.setState({isLoading: false}));
};
