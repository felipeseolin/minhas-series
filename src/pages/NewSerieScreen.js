import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {setField} from '../actions';

import FormRow from '../components/FormRow';

const NewSerieScreen = ({serieForm, setField}) => (
  <View>
    <FormRow>
      <TextInput
        style={styles.textInput}
        placeholder="Título"
        value={serieForm}
        onChangeText={value => {
          setField('title', value);
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
  },
});

const mapStateToProps = state => {
  return {serieForm: state.serieForm};
};

const mapDispatchToProps = {setField};

export default connect(mapStateToProps, mapDispatchToProps)(NewSerieScreen);
