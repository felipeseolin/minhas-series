import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput style={styles.textInput} />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 5,
  },
});
