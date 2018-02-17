import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';
import { purple } from './utils/colors';
import MyStatusBar from './components/MyStatusBar';
import LoginView from './components/LoginView';
import { StackNavigator } from 'react-navigation';
import MainNavigator from './components/MainNavigator';

const MainStack = StackNavigator({
  LoginView: {
    screen: LoginView,
  },
  MainNavigator: {
    screen: ({ navigation }) => (
      <MainNavigator screenProps={{ topNavigation: navigation }} />
    )
  }
},{
  headerMode: 'none'
});

export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification();
  };

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <MyStatusBar backgroundColor={purple} barStyle='light-content'/>
          <MainStack />
        </View>
      </Provider>
    );
  }
}
