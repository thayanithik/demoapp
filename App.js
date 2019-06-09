import React, { Component } from 'react';
import {Provider } from "react-redux";
import {StyleSheet, Platform} from 'react-native';

import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
} from 'react-navigation';
import Routes from './src/routes'

const AppNavigator = createAppContainer(
  createStackNavigator(
    Routes,
    {
      headerMode: 'none',
      initialRouteName: 'Login',

      /*
       * Use modal on iOS because the card mode comes from the right,
       * which conflicts with the drawer example gesture
       */
      mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
  )
);

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
