import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { red } from '../utils/colors';

export default MyInputText = ({children, onChangeText, placeholder, showRequiredError, addStyle}) => (
  <View style={[styles.container, addStyle]}>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
    >
      {children}
    </TextInput>
    {showRequiredError && (
      <Text style={styles.titleError}>This field is required.</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    width: 320,
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 8
  },
  titleError: {
    color: red,
  }
});


