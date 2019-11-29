import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Picker,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {setField, saveSerie} from '../actions';
import Slider from '@react-native-community/slider';

import FormRow from '../components/FormRow';

class NewSerieScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {serieForm, setField, saveSerie, navigation} = this.props;
    return (
      <ScrollView>
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
            <Picker.Item label="Ação" value="action" />
            <Picker.Item label="Comédia" value="comedy" />
            <Picker.Item label="Drama" value="drama" />
            <Picker.Item label="Infantil" value="kids" />
          </Picker>
        </FormRow>
        <FormRow>
          <View style={styles.rate}>
            <Text>Nota: </Text>
            <Text>{serieForm.rate}</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={5}
            value={serieForm.rate}
            onValueChange={value => setField('rate', value)}
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="Descrição"
            value={serieForm.description}
            onChangeText={value => setField('description', value)}
            numberOfLines={5}
            multiline={true}
          />
        </FormRow>

        {this.state.isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Salvar"
            onPress={async () => {
              this.setState({isLoading: true});
              try {
                await saveSerie(serieForm);
                navigation.goBack();
              } catch (error) {
                Alert.alert('Erro', error.message);
              } finally {
                this.setState({isLoading: false});
              }
            }}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
  },
  rate: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
});

const mapStateToProps = state => {
  return {serieForm: state.serieForm};
};

const mapDispatchToProps = {setField, saveSerie};

export default connect(mapStateToProps, mapDispatchToProps)(NewSerieScreen);
