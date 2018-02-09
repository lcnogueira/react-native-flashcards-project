import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { getDecks } from '../utils/api';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import Deck from './Deck';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class DecksListView extends Component {

  state = {
    ready: false
  };
  
  componentDidMount(){
    getDecks()
    .then(decks => {
      if (decks!==null) this.props.dispatch(receiveDecks(decks));
    })
    .then(() => 
      setTimeout(() => 
          this.setState(() => ({
            ready: true
          })),2000
      )
    );
  };

  render(){
    const { decks } = this.props;

     if(!this.state.ready){
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );      
     }

    if (Object.keys(decks).length === 0) {
      return(
        <View style={[styles.center, {padding: 20 }]}>
          <MaterialCommunityIcons name='emoticon-sad' size={100} style={{marginBottom: 40}}/>
          <Text style={{textAlign:'center', fontSize: 22}}>There are no decks at the moment. Add a new one!</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container} >
        {decks && Object.keys(decks).map((title, i) => {
          const deck = decks[title];
          return (
            <Deck deck={deck} key={i} navigate={this.props.navigation.navigate}/>
          )})
        }
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const mapStateToProps = (decks) => ({decks});

export default connect(mapStateToProps)(DecksListView);