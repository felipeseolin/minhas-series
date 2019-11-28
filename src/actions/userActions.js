import * as firebase from 'firebase';
import {Alert} from 'react-native';

export const USER_LOGIN_SUCESS = 'USER_LOGIN';
const userLoginSucess = user => ({
  type: USER_LOGIN_SUCESS,
  user,
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
});

export const processLogin = ({email, password}) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      const action = userLoginSucess(user);
      dispatch(action);
    });
    // .catch(error => {
    //   if (error.code == 'auth/user-not-found') {
    //     Alert.alert(
    //       'Usuário não encontrado',
    //       'Deseja criar um novo usuário?',
    //       [
    //         {
    //           text: 'Não',
    //           onPress: () => {
    //             console.log('não quis');
    //           },
    //         },
    //         {
    //           text: 'Sim',
    //           onPress: () => {
    //             firebase
    //               .auth()
    //               .createUserWithEmailAndPassword(email, password)
    //               .then(loginUserSuccess)
    //               .catch(loginUserFailed);
    //           },
    //         },
    //       ],
    //       {cancelable: false},
    //     );
    //   } else {
    //     loginUserFailed(error);
    //   }
    // })
    // .then(() => this.setState({isLoading: false}));
};
