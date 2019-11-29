import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import SerieCard from '../components/SerieCard';
import AddCard from '../components/AddCard';
import {watchSeries} from '../actions';

const isLeft = number => number % 2 === 0;

class SeriesPage extends React.Component {
  componentWillMount() {
    this.props.watchSeries();
  }

  render() {
    return (
      <View>
        <FlatList
          data={[...this.props.series, {isLast: true}]}
          renderItem={({item, index}) => {
            return item.isLast ? (
              <AddCard
                onNavigate={() => this.props.navigation.navigate('NewSerie')}
              />
            ) : (
              <SerieCard
                serie={item}
                isLeft={isLeft(index)}
                onNavigate={() =>
                  this.props.navigation.navigate('SerieDetail', {serie: item})
                }
              />
            );
          }}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    series: state.listaSeries,
  };
};

export default connect(mapStateToProps, {watchSeries})(SeriesPage);
