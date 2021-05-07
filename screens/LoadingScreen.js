import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import firebase from 'firebase';

 class LoadingScreen extends Component {

    componentDidMount(){

        this.checkIfLoggedIn
    }
    checkIfLoggedIn = () =>{
      firebase.auth().onAuthStateChanged(function(user){

      if(user){
          this.props.navigation.navigate('DashboardScreen')
      }
      else{
          this.props.navigation.navigate('LoginScreen')
      }


      }.bind(this)
      )

    }

    render() {
        return (
            <View>
               <ActivityIndicator size="large"/>
            </View>
        )
    }
}


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

export default LoadingScreen
