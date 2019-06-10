import React, { Component} from 'react';
import {View, Images, Text, StyleSheet,Alert,Dimensions,TouchableOpacity,ScrollView, TextInput, Keyboard} from 'react-native';

import Icon from '../common/icons';
import Button from '../components/Button';
import AuthBackground from '../components/AuthBackground';
import { sha256 } from 'react-native-sha256';

const {width, height} = Dimensions.get('window');

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validemail:"demo@demo.com",
      validpassword:"123456",
      email:"",
      password:""
    }
  }

  componentDidMount() {
    sha256("123456").then( hash => {
        this.setState({validpassword: hash});
    })
  }

  onPress() {
    // dismiss the keyboard ..
    Keyboard.dismiss();
    const { email,password,validemail,validpassword } = this.state;
    // Email valid format
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email != "" && email != undefined && password != "" && password != undefined) {
      // check if email is in valid format...
        if(!EMAIL_REGEX.test(email)) {
          Alert.alert('Information', "Enter valid email address");
        } else {
          sha256(password).then( hash => {
            if(email == validemail && hash == validpassword) {
              this.props.navigation.navigate("Home");
            }else {
                  Alert.alert('Information', "Invalid email or password");
            }
          })

        }
    } else {
          Alert.alert('Information', "All fields are mandatory");
    }

  }

  render(){
    return(
      <View style={{flex:1}}>
          <AuthBackground />
          <ScrollView keyboardShouldPersistTaps="always">
            <Text style={styles.headerText}>Login</Text>

            <View style={{marginTop:60,marginHorizontal:20,}}>

                  <View style={styles.inputContainer}>
                      <Icon name="mail" family="AntDesign" size={25} color="#000" style={{width:"10%", }}/>
                      <TextInput onChangeText={(email) => this.setState({email})}
                        style={styles.textInput}
                        placeholder="Email" keyboardType="email-address" autoCapitalize="none"/>
                  </View>
                  <View style={styles.inputContainer}>
                      <Icon name="key" family="AntDesign" size={25} color="#000" style={{width:"10%",transform: [{ rotate: '90deg'}] }}/>
                      <TextInput onChangeText={(password) => this.setState({password})}
                        style={styles.textInput}
                        placeholder="Password" secureTextEntry={true} autoCapitalize="none"/>
                  </View>
                  <Button name="Submit" onPress={() => this.onPress()}/>

            </View>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    color:"#000",
    marginLeft:40,
    marginTop:25,
    fontFamily:'TitilliumWeb-Bold',
    fontSize:25
  },
  textInput: {
    flex:7,
    backgroundColor:'#f4f2f2',
    borderRadius:25,
    paddingHorizontal:15
  },
  inputContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginBottom:10
  }
})
