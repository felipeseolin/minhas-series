import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const SerieCard = ({serie}) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Image source={{uri: serie.img}} aspectRatio={1} resizeMode="cover" />
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{serie.title}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    width: '50%',
    padding: 10,
    height: Dimensions.get('window').width / 2,
  },
  card: {
    flex: 1,
    borderWidth: 1,
  },
  cardTitleContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    alignItems: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SerieCard;
