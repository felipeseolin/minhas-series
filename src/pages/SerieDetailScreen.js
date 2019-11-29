import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';

export default class SerieDetailScreen extends React.Component {
  render() {
    const {serie} = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Image source={{uri: serie.img}} style={styles.image} />
        <Line label="Título" content={serie.title} />
        <Line label="Gênero" content={serie.gender} />
        <Line label="Nota" content={serie.rate} />
        <LongText label="Descrição" content={serie.description} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
});
