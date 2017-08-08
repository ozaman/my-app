import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
import { 
  Button,
  Card, 
  Icon,
  Avatar
 } from 'react-native-material-design';
const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'white',
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
  iconmenu:{
    fontSize:20,
    marginRight: 20,  
  },
});

export default function menu({ onItemSelected }) {
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
        onPress={() => onItemSelected('Product')}
        style={styles.item}
      >
                 <Icon name="shop" color="#333"  style={styles.iconmenu} /> 


        Product
      </Text>

      <Text
        onPress={() => onItemSelected('Report')}
        style={styles.item}
      >
      <Icon name="dashboard" color="#333"  style={styles.iconmenu}/> 
        Report&managements
      </Text>
    </ScrollView>
  );
}

menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};