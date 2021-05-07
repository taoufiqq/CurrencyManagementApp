import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import LoadingScreen from './screens/LoginScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

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
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
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