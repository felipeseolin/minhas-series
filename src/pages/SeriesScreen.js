import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import SerieCard from '../components/SerieCard';
import series from '../../series.json';

const isLeft = number => number % 2 === 0;

const SeriesPage = props => (
  <View>
    <FlatList
      data={series}
      renderItem={({item, index}) => (
        <SerieCard serie={item} isLeft={isLeft(index)} />
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
    />
  </View>
);

const styles = StyleSheet.create({});

export default SeriesPage;
