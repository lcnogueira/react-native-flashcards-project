import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { red } from '../utils/colors';

export default MyInputText = ({value, onChangeText, placeholder, showRequiredError}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    ></TextInput>
    {showRequiredError && (
      <Text style={styles.titleError}>This field is required.</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 40,
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 8
  },
  titleError: {
    color: red,
  }
});


