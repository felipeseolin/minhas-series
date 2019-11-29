import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LongText = ({label, content = '-'}) => {
  return (
    <View style={styles.line}>
      <Text
        style={[
          styles.cell,
          styles.label,
          label.length > 8 ? styles.longLabel : null,
        ]}>
        {label}
      </Text>
      <Text style={[styles.cell, styles.content]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  cell: {
    paddingLeft: 5,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
    textDecorationLine: 'underline',
    paddingBottom: 6,
  },
  content: {
    flex: 3,
  },
});

export default LongText;
