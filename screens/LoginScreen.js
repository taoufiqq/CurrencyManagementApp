import React, { Component } from 'react'
import { StyleSheet, Text, View,Image, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import Icon from 'react-native-vector-icons/FontAwesome';




 class LoginScreen extends Component {

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }


   onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase
      .auth()
      .onAuthStateChanged(function(firebaseUser) {
       unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase
        .auth()
        .signInWithCredential(credential).then(function(){
         console.log('user signed in ');


        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this));
  }


 signInWithGoogleAsync = async()=> {

    try {
      const result = await Google.logInAsync({
        behavior:'web',
        androidClientId: '607696297500-d29dk1ssear0btfbo847146s9rv8lvev.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.onSignIn(result);
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
        
         {/* <Button
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
/>  */}



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
