import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default MyText = ({ children, addStyle }) => (
  <Text style={[{fontSize: 18, textAlign: 'center', paddingLeft: 40, paddingRight: 40}, addStyle]}>
    {children}
  </Text>
);