import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
class main extends React.Component{
    render(){
        return(
            <View>
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

        );
    }
}
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
export default main;
