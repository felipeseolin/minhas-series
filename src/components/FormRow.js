import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FormRow = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    elevation: 1,
  }
});

export default FormRow;
