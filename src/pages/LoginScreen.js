import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor
    });
  }

  processLogin() {
    console.log(this.state);
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
            onChange={valor => {
              this.onChangeHandler('password', valor);
            }}
          />
        </FormRow>

        <Button title="Entrar" onPress={() => {this.processLogin()}} />
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
