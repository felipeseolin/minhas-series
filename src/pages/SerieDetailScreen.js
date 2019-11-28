import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SerieDetailScreen extends React.Component {
  render() {
    const {serie} = this.props.navigation.state.params;

    return (
      <View>
        <Text>{serie.title}</Text>
      </View>
    );
  }
}
