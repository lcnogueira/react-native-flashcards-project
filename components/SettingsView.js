import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { blue } from '../utils/colors';
import SettingsList from 'react-native-settings-list';
import { clearLocalNotification } from '../utils/helpers';
import { connect } from 'react-redux';
import { deleteAllDecks, deleteHistory } from '../actions';
import { removeAllDecks, removeHistory } from '../utils/api';

class SettingsView extends Component {

  //Delete notifications, decks and history
  deleteApp = () => {
    clearLocalNotification()
      .then(removeAllDecks)
      .then(this.props.dispatch(deleteAllDecks()))
      .then(removeHistory)
      .then(this.props.dispatch(deleteHistory()))
      .then(() => alert('All the data have been deleted'));
  };

  deleteNotifications = () => {
    //Remove from AsyncStorage and Notifications
    clearLocalNotification()
    .then(() => alert('All the notifications have been deleted'));
  };

  deleteDecks = () => {
    //Remove all decks from AsyncStorage, then dispatch action to update the store
    removeAllDecks()
      .then(this.props.dispatch(deleteAllDecks()))
      .then(() => alert('All the decks have been deleted'));
  };

  deleteHistory = () => {
    //Remove history from AsyncStorage, then dispatch action to update the store
    removeHistory()
      .then(this.props.dispatch(deleteHistory()))
      .then(() => alert('All the history have been deleted'));
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Settings</Text>          
        </View>
        <View style={{flex:1}}>
          <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
            <SettingsList.Item
              icon={
                <View style={[styles.imageView, {marginRight:20}]}>
                  <Image style={styles.image} source={require('../utils/images/android.png')}/>
                </View>
              }
              hasNavArrow={false}
              title='Application'
              titleStyle={styles.innerTitle}
              itemWidth={50}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageView}>
                  <Image style={styles.image} source={require('../utils/images/delete-forever.png')}/>
                </View>
              }
              title='Delete all the data'
              itemWidth={70}
              titleStyle={styles.item}
              hasNavArrow={false}
              onPress={this.deleteApp}
            />
            <SettingsList.Header headerStyle={{marginTop:-5}}/>
            <SettingsList.Item
              icon={
                <View style={[styles.imageView, {marginRight:20}]}>
                  <Image style={styles.image} source={require('../utils/images/bell-ring.png')}/>
                </View>
              }
              hasNavArrow={false}
              title='Notifications'
              titleStyle={styles.innerTitle}
              itemWidth={70}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageView}>
                  <Image style={styles.image} source={require('../utils/images/delete-forever.png')}/>
                </View>
              }
              title='Delete Notifications'
              itemWidth={70}
              titleStyle={styles.item}
              hasNavArrow={false}
              onPress={this.deleteNotifications}
            />
            <SettingsList.Header headerStyle={{marginTop:-5}}/>
            <SettingsList.Item
              icon={
                <View style={[styles.imageView, {marginRight:20}]}>
                  <Image style={styles.image} source={require('../utils/images/comment-question.png')}/>
                </View>
              }
              hasNavArrow={false}
              title='Decks'
              titleStyle={styles.innerTitle}
              itemWidth={70}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageView}>
                  <Image style={styles.image} source={require('../utils/images/delete-forever.png')}/>
                </View>
              }
              title='Delete Decks'
              itemWidth={70}
              titleStyle={styles.item}
              hasNavArrow={false}
              onPress={this.deleteDecks}
            />
            <SettingsList.Header headerStyle={{marginTop:-5}}/>
            <SettingsList.Item
              icon={
                <View style={[styles.imageView, {marginRight:20}]}>
                  <Image style={styles.image} source={require('../utils/images/database.png')}/>
                </View>
              }
              hasNavArrow={false}
              title='History'
              titleStyle={styles.innerTitle}
              itemWidth={70}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={[styles.imageView, {marginRight:3}]}>
                  <Image style={styles.image} source={require('../utils/images/delete-forever.png')}/>
                </View>
              }
              title='Delete History'
              itemWidth={70}
              titleStyle={styles.item}
              hasNavArrow={false}
              onPress={this.deleteHistory}
            />
          </SettingsList>
        </View>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f6f6f6',
  },
  titleContainer: {
    borderBottomWidth:1, 
    backgroundColor: blue,
    borderColor:'#c8c7cc',
  },
  mainTitle: {
    color:'white',
    marginTop:15,
    marginBottom:15, 
    marginLeft:15,
    fontWeight:'bold',
    fontSize:20,
  },
  innerTitle: {
    color:'#009688', 
    marginBottom:10, 
    fontWeight:'500',
    fontSize: 16
  },
  item: {
    color:'black', 
    fontSize: 14
  },
  imageView: {
    marginLeft:15,
    alignSelf:'center',
    width:20,
    height:24,
    justifyContent:'center'
  },
  image: {
    alignSelf:'center',
    height:25, 
    width:25
  }
});

export default connect()(SettingsView);