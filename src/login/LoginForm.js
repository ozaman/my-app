import React,{ Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
export default class LoginForm extends Component {
     render(){
         return(
             <View style={styles.container}>
                <TextInput 
                    placeholder="username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}/>
                <TextInput 
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    style={styles.input}/>
                <TouchableOpacity style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Longin</Text>
                </TouchableOpacity>

            </View>
         );
     }
 }

 const styles = StyleSheet.create({
  
  container: {
    padding: 20,
  },
input: {
    height: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    paddingHorizontal: 10,
},
bottomContainer: {
    backgroundColor: '#2988b9',
    paddingVertical: 15,

},
bottomText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
},

});

