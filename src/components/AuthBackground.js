import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Dimensions
} from "react-native";
import Svg, {
  Path,
  G,
  Circle,
  Polygon,
  Rect,LinearGradient as SvgGradient,Defs,Stop,
  Text as SvgText
} from 'react-native-svg';

import Theme from '../styles/Theme';
const {width, height} = Dimensions.get('window');

const Button = props => {
  return (
    <View style={{position:'absolute', top:0, left:0, right:0, bottom:0,zIndex:-1}}>
      <View style={{flex:10}} />
      <View style={{flex:2}} >
        <Svg
          height={200}
          width={width}
          >
            <Defs>
                <SvgGradient id="grad" x1="0" y1="0" x2="170" y2="0">
                    <Stop offset="0" stopColor="#21407A" stopOpacity="1" />
                    <Stop offset="1" stopColor="#542FD5" stopOpacity="1" />
                </SvgGradient>
            </Defs>
            <Path
                  // d="M 0.317 160.263 C 0.491 160.322 54.672 181.321 96.41 186.555 C 138.827 191.875 170.592 177.656 200.188 146.3 C 235.21 109.196 258.892 111.366 299.457 117.682 C 336.776 123.493 399.859 155.012 399.781 157.423 C 399.76 158.082 400 0 400 0 L 0 0"
                  d="M0,20 Q100,0 200,30 T400,30 v150 h-400 Z"
                  fill="url(#grad)"
              />
          </Svg>
        </View>
    </View>
  );
};

export default Button;
