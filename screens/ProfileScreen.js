import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native'

import axios from 'axios'

const DetailsCurrencyScreen = ({ route, navigation }) => {

  const { googleUser, data, cryptoPrice  } = route.params;

  const Mywallet = () => {
    navigation.navigate("Walett", { googleUser, data })
  }


  const buy = () => {
    let GetUserData = {email: googleUser.email, price: cryptoPrice}

    axios.post("https://currencyyapp.herokuapp.com/api/user/buy", GetUserData).then(() => {
        console.log("data updated")
      })
      .catch((e) => {
        alert('you have not money')
      })
}
const sell = () => {
    let GetUserData = {email: googleUser.email, price: cryptoPrice}

    axios.post("https://currencyyapp.herokuapp.com/api/user/sell", GetUserData).then(() => {
        console.log("data updated")
      })
      .catch((e) => {
        alert('you have not money')
      })
}
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Welcome to your Profile</Text>
       <View>
        <View style={styles.userInfo}>
            <Image source={{uri: `${googleUser.photo_url}`}} style={{width:40, height:40,borderRadius:30}} />
            <Text style={styles.userInfoTxt}> {googleUser.name} </Text>
        </View>
        <Image
                     style={styles.logo}
                      source={require('../assets/Wallet.png')}
                />
        <View style={styles.btnGroup}>
            <TouchableOpacity onPress={Mywallet}  style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >MY WALLET</Text>
            </TouchableOpacity>
            <View style={styles.cryptoListsTopData2}>
            <TouchableOpacity onPress={buy}  style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >BUY</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={sell}  style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >SELL</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
},
title:{
   fontSize:25,
   color:'#f4511e',
   fontWeight:'bold'
},
userInfo: {
  display:'flex',
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "baseline"
},
userInfoTxt: {
  fontWeight: "bold",
  color: '#f4511e',
  marginTop:5

},
btnGroup: {
  display: "flex",
  justifyContent: 'center',
  alignItems: "center"
},
BTN: {
  padding: 20,
  textAlign: "center",
  backgroundColor: "#FFC7B5",
  margin: 10,
  borderRadius: 20,
},
logo: {
  width: 340,
  height: 340,
  resizeMode: 'stretch',
  marginTop:55
},
cryptoListsTopData2:{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

},
})
export default  DetailsCurrencyScreen