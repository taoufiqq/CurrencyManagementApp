import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DetailsCurrencyScreen() {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Welcome to our App</Text>

    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
title:{
   fontSize:25,
   color:'orange',
   fontWeight:'bold'
},
})