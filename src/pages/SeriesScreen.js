import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import SerieCard from '../components/SerieCard';
import series from '../../series.json';

const isLeft = number => number % 2 === 0;

const SeriesPage = props => (
  <View>
    <FlatList
      data={[...series, {isLast: true}]}
      renderItem={({item, index}) => {
        return item.isLast ? (
          <View>
            <Text>Botao adicionar</Text>
          </View>
        ) : (
          <SerieCard
            serie={item}
            isLeft={isLeft(index)}
            onNavigate={() =>
              props.navigation.navigate('SerieDetail', {serie: item})
            }
          />
        );
      }}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  </View>
);

const styles = StyleSheet.create({});

export default SeriesPage;
