import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,FlatList, Text, View , TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 
const Manageproducts = ({ navigation }) => {
  const data = [
    {
      name:"Product 1",
      price: "500",
      image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
    },
    {
      name:"Product 2",
      price: "400",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
    },
    {
      name:"Product 3",
      price: "300",
      image: "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList 
      data = {data}
      keyExtractor = {(item,index)=>index.toString()}
      renderItem={({item})=>{
        return(
          <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Productdetail',{name:item.name,price:item.price,image:item.image})}>
          <Text style={styles.touchableText}>{item.name}</Text>
          </TouchableOpacity>
          
        );
      }}
      />
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
    touchableContainer: {
      elevation: 8,
      backgroundColor: "#1D855D",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      margin: 10
    },
    touchableText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      
    }
    
  });
  
 
export default Manageproducts;