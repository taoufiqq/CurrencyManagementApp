import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'



const walletFun = () => {
  navigation.navigate("WalletScreen", { userData, data })
}



const DetailsCurrencyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Welcome to your Profile</Text>
       <View>
        {/* <View style={styles.userInfo}>
            <Image source={{uri: `${userData.photo_url}`}} style={{width:40, height:40,borderRadius:30}} />
            <Text style={styles.userInfoTxt}> {userData.name} </Text>
        </View> */}

        <TouchableOpacity  style={{marginTop: 100}} >
            <Text style={{fontWeight: "bold", textAlign: "center"}} >View chart</Text>
        </TouchableOpacity>

        <View style={styles.btnGroup}>
            <TouchableOpacity onPress={walletFun}  style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >YOUR WALLET</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >BUY</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >SELL</Text>
            </TouchableOpacity>
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
  flex: 1,
  marginTop: 20,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "baseline"
},
userInfoTxt: {
  fontWeight: "bold"
},
btnGroup: {
  display: "flex",
  justifyContent: 'center',
  alignItems: "center"
},
BTN: {
  padding: 20,
  textAlign: "center",
  backgroundColor: "#d9d9d9",
  margin: 10,
  borderRadius: 20,
},
})
export default  DetailsCurrencyScreen