import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { purple, white } from '../utils/colors';

export default SubmitBtn = ({ onPress }) => (
  <TouchableOpacity 
    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
    onPress={onPress} 
  >
    <Text style={styles.submitBtnText}>SUBMIT</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
  },
  submitBtnText:{
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },
})