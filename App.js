import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';


import DetailsCurrencyScreen from './screens/DetailsCurrencyScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardCurrencyScreen from './screens/DashboardCurrencyScreen';
import HomeScreen from './screens/HomeScreen';
import Chart from './screens/Chart';
import Wallet from './screens/WalettScreen'

import * as firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
firebase.initializeApp(firebaseConfig);

class App extends Component {

render(){
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Sign In">
      <Stack.Screen name="Sign In" component={LoginScreen}  
      options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>


      <Stack.Screen name="HomeScreen" component={HomeScreen}
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      />


      <Stack.Screen name="Chart" component={Chart} 
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>


      <Stack.Screen name="DashboardCurrencyScreen" component={DashboardCurrencyScreen}
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />


      <Stack.Screen name="DetailsCurrencyScreen" component={DetailsCurrencyScreen} 
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      
      <Stack.Screen name="Wallet" component={WalletScreen} 
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
    )
  }
}

const Stack = createStackNavigator();




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App