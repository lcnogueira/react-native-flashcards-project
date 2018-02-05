import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default MyInputText = ({value, onChangeText, placeholder}) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
  ></TextInput>
);

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50,
    borderRadius: 8
  },
});


