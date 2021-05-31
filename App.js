import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import DetailsCurrencyScreen from './screens/DetailsCurrencyScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import HomeScreen from './screens/HomeScreen';
import Chart from './screens/Chart'

import * as firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
firebase.initializeApp(firebaseConfig);

class App extends Component {

render(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Sign In">
      <Stack.Screen name="Sign In" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Chart" component={Chart} />
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