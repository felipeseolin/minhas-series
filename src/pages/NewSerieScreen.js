import React from 'react';
import {StyleSheet, View, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {setField} from '../actions';
import Slider from '@react-native-community/slider';

import FormRow from '../components/FormRow';

const NewSerieScreen = ({serieForm, setField}) => (
  <View>
    <FormRow>
      <TextInput
        style={styles.textInput}
        placeholder="Título"
        value={serieForm.title}
        onChangeText={value => setField('title', value)}
      />
    </FormRow>
    <FormRow>
      <TextInput
        style={styles.textInput}
        placeholder="URL da imagem"
        value={serieForm.img}
        onChangeText={value => setField('img', value)}
      />
    </FormRow>

    <FormRow>
      <Picker
        selectedValue={serieForm.gender}
        onValueChange={item => setField('gender', item)}>
        <Picker.Item label="Ação" value="acao" />
        <Picker.Item label="Comédia" value="comedy" />
        <Picker.Item label="Drama" value="drama" />
        <Picker.Item label="Infantil" value="kids" />
      </Picker>
    </FormRow>

    <FormRow>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={serieForm.rate}
        onValueChange={value => setField('rate', value)}
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
