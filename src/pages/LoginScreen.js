import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail: user@provide.com"
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password here"
            secureTextEntry
          />
        </FormRow>
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
