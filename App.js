import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from '@react-navigation';
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
         <AppNavigator/>
    )
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  DetailsCurrencyScreen: DetailsCurrencyScreen,
  DashboardScreen: DashboardScreen,
  HomeScreen:HomeScreen,
  Chart:Chart,
 })
 const AppNavigator = createAppContainer(AppSwitchNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App