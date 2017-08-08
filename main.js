import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import SideMenu from 'react-native-side-menu';
import { 
  Button,
  Card, 
  Icon,
  Avatar
 } from 'react-native-material-design';
import DrawerLayout from 'react-native-drawer-layout';
import Menu from './menu';

const image = require('./assets/menu.png');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';


const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

export default class myapp extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <MapView
          style={styles.map}
              initialRegion={{
                latitude: 7.9038781,
                  longitude: 98.3033694,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
          }}>
          
            <MapView.Marker
                coordinate={{
                  latitude: 7.9038781,
                  longitude: 98.3033694,
                }}>
                  <View style={styles.radius}>
                    <View style={styles.marker} />
                  </View>
            </MapView.Marker>
        </MapView>
        </View>
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
          {/* <Image
            source={image}
            style={{ width: 30, height: 32 }}
          /> */}
          <Icon name="menu" color="#333" />
          {/* <Icon style={styles.iconmenu}
  name='menu'
  color='#000'
  /> */}
        </TouchableOpacity>
        
        {/* <Avatar image={
          <Image source={uri} />
          } /> */}
      </SideMenu>
    );
  }
}