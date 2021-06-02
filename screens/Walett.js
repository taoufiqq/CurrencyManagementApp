  
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';

import axios from "axios"

const Walett = ({ navigation, route }) => {
    const { googleUser, data } = route.params;

    useEffect(() => {
        getWalletValue();
    });
    const [Wallet, SetWallet] = useState([])
    const [Sold, SetSold] = useState([])

    const getWalletValue = async () => {
        await axios.get(`https://currencyyapp.herokuapp.com/api/user/info/${googleUser.email}`).then((walletdata) => {
            SetWallet(walletdata.data.walletSold)
            SetSold(walletdata.data.sold)
        })
        .catch((e) => {
            console.log(e)
        })
    }
  return (
    <View>
        <View style={styles.userInfo}>
            <Image source={{uri: `${googleUser.photo_url}`}} style={{width:40, height:40,borderRadius:30}} />
            <Text style={styles.userInfoTxt}> {googleUser.name} </Text>
        </View>

        <Text style={styles.walletNum}>you have:  {Wallet} $ in wallet</Text>
        <Text style={styles.walletNum}>you have:  {Sold} $ in your account</Text>
    </View>
  );
};

export default Walett;

const styles = StyleSheet.create({
    userInfo: {
        flex:1,
        display:'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline"
      },
      userInfoTxt: {
        fontWeight: "bold",
        color: '#f4511e',
       
    
    },
    walletNum: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 100,
        textAlign: "center"
    }
});