import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { purple, white } from '../utils/colors';

export default Deck = ({ deck }) => (
  <View style={styles.deck}>
    <Text style={styles.text}>{deck.title}</Text>
    <Text style={styles.text}>{deck.questions.length} cards</Text>
  </View>
);

const styles = StyleSheet.create({
  deck: {
    marginTop: 10,
    padding: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: purple,
    height: 150
  },
  text: {
    color: white,
  },
})