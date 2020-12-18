import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,FlatList, Text, View , TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Productdetail = ({route})=>{
    const {name,price,image} = route.params

    return(
      <View style={styles.container}>
      <Image style={{height:500,width:500}} source = {{uri:image}}/>
      <Text style={styles.touchableText}>{name}</Text>
      <Text style={styles.touchableText}>{price}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    touchableText: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
      textTransform: "uppercase",
      
    }
    
  });

  export default Productdetail;
  