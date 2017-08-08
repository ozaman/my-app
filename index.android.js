/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DrawerNavigator, DrawerItems } from 'react-navigation';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image
  
} from 'react-native';
import MapView from 'react-native-maps';
import { SideMenu, List, ListItem } from 'react-native-elements';

const SideMenu = require('react-native-side-menu');

// const window = Dimensions.get('window');
const SCREEN_WIDTH = Dimensions.get('window').width;
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Your name</Text>
      </View>

      <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        About
      </Text>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Contacts
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
export default class myapp extends Component {
  
  render() {
    const menu = <Menu navigator={navigator}/>;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
          }}>
          <Icon style={styles.iconmenu}
  name='menu'
  color='#000'
  />
          {/* <Button
  raised
  icon={{name: 'menu', size: 32}}
  buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
  textStyle={{textAlign: 'center'}}
  title={`Welcome to\nReact Native Elements`}
/> */}
            <MapView.Marker
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                }}>
                  <View style={styles.radius}>
                    <View style={styles.marker} />
                  </View>
            </MapView.Marker>
        </MapView>
      </View>
    );

  }
}

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const styles = StyleSheet.create({
  iconmenu: {
    position: 'absolute',
    left: 10,
    top: 30,
    // fontSize: 32,
    // color: '#000'
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  radius: {
    height:50,
    width:50,
    borderRadius:50 / 2,
    overflow: 'hidden',
    backgroundColor:'rgba(0,122,255,0.1)',
    borderWidth:1,
    borderColor:'rgba(0,112,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  marker: {
    height:20,
    width:20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'

  },
  map:{
    left:0,
    right:0,
    top:0,
    bottom:0,
    position:'absolute',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myapp);
