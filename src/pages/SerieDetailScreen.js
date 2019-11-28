import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class SerieDetailScreen extends React.Component {
  render() {
    const {serie} = this.props.navigation.state.params;

    return (
      <View>
        <Image source={{uri: serie.img}} style={styles.image} />
        <Text>{serie.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
});
