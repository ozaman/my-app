

import React,{ Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import LoginForm from './LoginFrom';
 export default class Login extends Component {
     render(){
         return(
             <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('./images/logo.png')}
                    />
                    <Text style={styles.title} >Login dot app</Text>
                </View>
                <View style={styles.fromContainer}>
                    <LoginForm/>  
                </View>
            </View>
         );
     }
 }

 const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#3498db',
  },
logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
},
fromContainer: {

},
title: {
    color: '#ffffff',
    marginTop: 1,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,


},
logo: {
    width: 100,
    height: 100,
},
  
});

