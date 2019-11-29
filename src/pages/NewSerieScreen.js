import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import FormRow from '../components/FormRow';

const NewSerieScreen = props => (
  <View>
    <FormRow>
      <TextInput
        style={styles.textInput}
        placeholder="Título"
        value=""
        onChangeText={value => {
          console.log(value);
        }}
      />
    </FormRow>
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
  }
});

export default NewSerieScreen;
