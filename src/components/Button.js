import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Platform
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Theme from '../styles/Theme';

const Button = props => {
  return (
    <TouchableHighlight
    activeOpacity={0.8}
    underlayColor="#38CB8966"
    onPress={props.onPress}
    style={{height:45, alignItems: 'center', justifyContent: 'center', borderRadius:25, alignSelf:'flex-end'}}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7F7FD5', '#3b5998', '#192f6a']}
        style={{height:45, alignItems: 'center', justifyContent: 'center', borderRadius:25, paddingHorizontal:40, paddingVertical:20, alignSelf:'flex-end'}}>
          <Text style={{color:'#fff', fontSize: 17,}}>{props.name}</Text>
      </LinearGradient>
    </TouchableHighlight>
  );
};

export default Button;
