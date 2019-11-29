import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import SerieCard from '../components/SerieCard';
import AddCard from '../components/AddCard';

const isLeft = number => number % 2 === 0;

const SeriesPage = props => (
  <View>
    <FlatList
      data={[...props.series, {isLast: true}]}
      renderItem={({item, index}) => {
        return item.isLast ? (
          <AddCard onNavigate={() => props.navigation.navigate('NewSerie')} />
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

const mapStateToProps = state => {
  return {
    series: state.listaSeries,
  };
};

export default connect(mapStateToProps)(SeriesPage);
