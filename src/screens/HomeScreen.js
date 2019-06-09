import React, { Component} from 'react';
import {View, Images, Text, StyleSheet,Dimensions,TouchableOpacity,ScrollView, TextInput} from 'react-native';

import Icon from '../common/icons';
import Button from '../components/Button';
import AuthBackground from '../components/AuthBackground';

const {width, height} = Dimensions.get('window');

export default class HomeScreen extends Component {
  render(){
    return(
      <View style={{flex:1}}>
          <AuthBackground />
          <ScrollView>
            <TouchableOpacity style={{marginLeft:12.5,marginTop:15,height:44,width:40,alignItems:'center', justifyContent:'center'}}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="keyboard-backspace" family="MaterialCommunityIcons" size={25} color="#000" />
            </TouchableOpacity>
            <Text style={{color:"#000", marginLeft:40,marginTop:10, fontFamily:'TitilliumWeb-Bold',fontSize:25 }}>Home</Text>

            <View style={{marginTop:40,marginHorizontal:20,alignItems:'center', justifyContent:'center'}}>

                  <Text style={{fontFamily:'Montserrat-Bold', fontSize:25, color:'green', letterSpacing:1.2}}>Successfully </Text>
                  <Text style={{fontFamily:'Montserrat-Bold', fontSize:25, color:'green', marginTop:10, letterSpacing:1.2}}>loggedin!!</Text>
            </View>
          </ScrollView>
      </View>
    )
  }
}
