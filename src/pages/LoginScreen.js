import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';

import FormRow from '../components/FormRow';
import {processLogin} from '../actions';
import {connect} from 'react-redux';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: '',
    };
  }

  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyBB6jcVddcJCXgjMUjaiHABQv4UmZQ79KM',
      authDomain: 'minhasseries-7c769.firebaseapp.com',
      databaseURL: 'https://minhasseries-7c769.firebaseio.com',
      projectId: 'minhasseries-7c769',
      storageBucket: 'minhasseries-7c769.appspot.com',
      messagingSenderId: '122111905510',
      appId: '1:122111905510:web:feff1f6767bff6630e3527',
      measurementId: 'G-XHV4YS21EG',
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor,
    });
  }

  processLogin() {
    this.setState({isLoading: true});
    const {email, password} = this.state;

    this.props.processLogin({email, password}).then(() => {
      this.setState({message: 'Sucesso!'});
      this.props.navigation.replace('Main');
    });
  }

  getMessageByError(code) {
    switch (code) {
      case 'auth/user-not-found':
        return 'E-mail inexistente';
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/invalid-email':
        return 'Digite um e-mail válido';
      default:
        return 'Erro desconhecido';
    }
  }

  renderButton() {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    }

    return (
      <Button
        title="Entrar"
        onPress={() => {
          this.processLogin();
        }}
      />
    );
  }

  renderMessage() {
    const {message} = this.state;

    if (!message) {
      return null;
    }

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail: user@provide.com"
            value={this.state.email}
            onChangeText={valor => {
              this.onChangeHandler('email', valor);
            }}
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password here"
            secureTextEntry
            value={this.state.password}
            onChangeText={valor => {
              this.onChangeHandler('password', valor);
            }}
          />
        </FormRow>

        {this.renderButton()}
        {this.renderMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default connect(null, {processLogin})(LoginScreen);
