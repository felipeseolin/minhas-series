import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import series from '../../series.json';

const SeriesPage = props => (
  <View>
    <FlatList
      data={series}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{`${item.id} - ${item.title}`}</Text>
          </View>
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({});

export default SeriesPage;
