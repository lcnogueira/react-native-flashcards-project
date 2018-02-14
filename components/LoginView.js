import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput } from 'react-native-elements';
import MyButton from './MyButton';
import { blue, black } from '../utils/colors';
import MainNavigator from './MainNavigator';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { config } from '../utils/config';

firebase.initializeApp(config);

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'MainNavigator' })],
});

export default class LoginView extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: ''
  };

  onSignUpPress = () => {
    this.setState({
      error: '', 
      loading: true
    });
    
    const { email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          error: '', 
          loading:false
        });
        
        this.props.navigation.dispatch(resetAction);
      })
      .catch((e) => {
        alert(e);
        this.setState({
          error: 'Autentication failed',
          loading: false
        });
      });
  };

  onLoginPress = () => {
    this.setState({
      error: '', 
      loading: true
    });
    
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          error: '', 
          loading:false
        });
        
        this.props.navigation.dispatch(resetAction);
      })
      .catch((e) => {
        alert(e);
        this.setState({
          error: 'Autentication failed', 
          loading: false
        });
      });
  };

  renderButtonOrLoading = () => {
    if(this.state.loading){
      return (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return (
        <View>
          <MyButton onPress={this.onLoginPress} addStyle={{marginBottom: 10, backgroundColor: blue}}>
            Login
          </MyButton>
           <MyButton onPress={this.onSignUpPress} addStyle={{backgroundColor: black}}>
            Sign up
          </MyButton>
        </View>
      )
  };

  render(){
    return (
      <View style={styles.container}>
        <FormLabel labelStyle={styles.text}>Email</FormLabel>
        <FormInput
          value={this.state.email} 
          onChangeText={(email) => this.setState({email})}
          placeholder='john.doe@gmail.com'
          inputStyle={styles.text}
        />
        <FormLabel labelStyle={styles.text}>Password</FormLabel>
        <FormInput 
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry
          placeholder='Please enter your password...'
          inputStyle={styles.text}
        />
        <Text>{this.state.error}</Text>
        {this.renderButtonOrLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 18
  },
});