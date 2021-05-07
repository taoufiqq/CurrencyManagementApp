import React, { Component } from 'react'
import { StyleSheet, Text, View,Image, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';

import * as Google from 'expo-google-app-auth';
import Icon from 'react-native-vector-icons/FontAwesome';
 class LoginScreen extends Component {

 signInWithGoogleAsync = async()=> {

    try {
      const result = await Google.logInAsync({
        behavior:'web',
        androidClientId: '607696297500-d29dk1ssear0btfbo847146s9rv8lvev.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }


    render() {

        return (
            <View style={styles.container}>

                <Image
                     style={styles.logo}
                      source={require('../assets/logo.png')}
                />


          <Button
           icon={
            <Icon
              name="google"
              size={22}
              color="orange"
            />
          }
       
              onPress={() => this.signInWithGoogleAsync()}
              title=" sign In with Google"
              color="orange"
/> 
        
         <Button
            style={styles.buttonFacebook}
           icon={
            <Icon
              name="facebook"
              size={22}
              color="blue"
            />
          }
       
              onPress={() => this.signInWithGoogleAsync()}
              title=" sign In with Facebook"
              color="orange"
/> 



            </View> 
        )
    }
}
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
},
buttonGoogle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    width:'70%', 
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginBottom:1   
  },

  buttonFacebook: {
    backgroundColor: 'orange',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    width:'50%',    
  },

  logo: {
    width: 340,
    height: 340,
    resizeMode: 'stretch',
  },
  });
export default LoginScreen
