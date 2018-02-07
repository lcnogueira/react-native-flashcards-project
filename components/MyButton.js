import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { blue, white } from '../utils/colors';

export default MyButton = ({ onPress, label, backgroundColor }) => (
    <TouchableOpacity 
      style={Platform.OS === 'ios' 
        ? [styles.iosBtn,{backgroundColor: backgroundColor}] 
        : [styles.androidBtn,{backgroundColor: backgroundColor}]}
      onPress={onPress} 
    >
      <Text style={styles.submitText}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  iosBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 4,
  },
  submitText:{
    color: white,
    fontSize: 18,
    textAlign: 'center'
  },
})