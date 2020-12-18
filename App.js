import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Manageproducts from './Manageproducts';
import Productdetail from './Productdetail'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="App2" component={App2} options={{headerShown:false}}/>
        <Stack.Screen name="Product" component={Manageproducts} options={{headerShown:false}}/>
        <Stack.Screen name="Productdetail" component={Productdetail} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App2 = ({navigation})=>{
return(
  <View style={styles.container}>
  <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate('Product')}>
      <Text style={styles.touchableText}>Manage Products</Text>
    </TouchableOpacity>
  
    <TouchableOpacity style={styles.touchableContainer}>
      <Text style={styles.touchableText}>Manage Employees</Text>
    </TouchableOpacity>
  
    <TouchableOpacity style={styles.touchableContainer}>
      <Text style={styles.touchableText}>Manage Orders</Text>
    </TouchableOpacity>
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

