import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { 
  Button,
  Card, 
  Icon,
  Avatar
 } from 'react-native-material-design';
import Icons from 'react-native-vector-icons/FontAwesome';
// import 'assete/';
const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
// import head from  "assete/header.jpeg";
const head = "assete/header.jpeg";

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'white',
    // padding: 20,
  },
  avatarContainer: {
    marginBottom: 10,
    // marginTop: 20,
width: window.width,

    
    height: 130,
    backgroundColor: '#555',
  },
  backgroundimage: {
    width: window.width,
flex: 1,

          
          position: 'absolute',
         
          justifyContent: 'center',
              // resizeMode,
    
    
    height: 140,
  },
  avatar: {
    // marginTop:,
    marginLeft: 20,
    // align:'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    // flex: 1,
  },
  name: {
    // position: 'absolute',
    left: 20,
    top: 10,
    color: '#ffffff'
  },
  item: {
    padding: 5,
  },
  iconmenu:{
    width:70,
    // height:400,
    // position: 'absolute',
    paddingRight: 100,
    
    
    
  },
  textmenu: {
    // marginBottom:40,
    position: 'absolute',
    marginLeft:50,
    fontSize:13,
    // left: 0,
    marginTop: 8,
  
    
  
  },
  boxmenu:{
    paddingLeft: 15,
    paddingTop: 0,
  }, 
});

export default function menu() {
  
  
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View source={{uri}} style={styles.avatarContainer}>
        <Image style={styles.backgroundimage}
          source={{head}}>
          
       
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Your name</Text>
        </Image>
      </View>
    <View style={styles.boxmenu}>
      <View
        onPress={() => onItemSelected('Product')}
        style={styles.item}
      > 
        <Icons name="car" color="#999" size={20} style={styles.iconmenu} /> 

        
        
         <Text style={styles.textmenu}>Transfer</Text>
      </View>
      <View
        onPress={() => onItemSelected('Product')}
        style={styles.item}
      > 
        <Icons name="tags" color="#999" size={20} style={styles.iconmenu} /> 

        
        
         <Text style={styles.textmenu}>Tours</Text>
      </View>

      <View
        onPress={() => onItemSelected('Report')}
        style={styles.item}
      >
      <Icon name="dashboard" color="#999" size={20} style={styles.iconmenu}/> 
        <Text style={styles.textmenu}>Report&managements</Text>
        
      </View>
      <View
        onPress={() => this.props.onItemSelected('Report')}
        style={styles.item}
      >
      <Icons name="cog" color="#999" size={20} style={styles.iconmenu}/> 
        <Text style={styles.textmenu}>Setting</Text>
        
      </View>
      <View
        onPress={() => onItemSelected('Report')}
        style={styles.item}
      >
      <Icons name="sign-out" color="#999" size={20} style={styles.iconmenu}/> 
        <Text style={styles.textmenu}>Logout</Text>
        
      </View>
      <TouchableOpacity
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
      <Icons name="sign-in" color="#999" size={20} style={styles.iconmenu}/> 
        <Text style={styles.textmenu}>Login</Text>
        
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
