import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {



  const DATA= [
    {
      id: 1,
      symbol: "EURUSD",
      price: 10,
      img: "https://www.expertinvestor.net/images/logos/forexcom-logo-sq.png",
      redirectTo: "https://www.tradingview.com/symbols/SPX/"
    },
    {
      id: 2,
      symbol: "GBPUSD",
      price: 30,
      img: "https://img2.freepng.fr/20180308/vyw/kisspng-euro-bank-currency-symbol-logo-finance-3d-metal-currency-symbol-5aa179207ed514.8750548715205317445195.jpg",
      redirectTo: "https://www.tradingview.com/symbols/TVC-IXIC/"
    },
    {
      id: 3,
      symbol: "AUDJPY",
      price: 40,
      img: "https://www.expertinvestor.net/images/logos/forexcom-logo-sq.png",
      redirectTo: "https://www.tradingview.com/symbols/DJ-DJI/"
    }
  ]


  return (
    <View>


     <Image
        style={styles.logo}
        source={require('../assets/currency.png')}
      />
      <SafeAreaView style={styles.areaView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cryptoLists}>
            {
              DATA.map((data, i) => {
                return (
                  <View style={styles.cryptoListsData} key={i}>
                    <View style={styles.cryptoListsTopData}>
                      <Image source={{uri: `${data.img}`}}  style={{width:40, height:40,borderRadius:30}} />
                      <Text>{data.symbol}</Text>
              
                        <Text>{data.price} $</Text>

                      <TouchableOpacity style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("Chart", { data: data.redirectTo, cryptoPrice: data.price });}}>
                  
                      <Text>View Chart</Text>
                
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("Chart", { data: data.redirectTo, cryptoPrice: data.price });}}>  

                  <Text>Buy/Sell</Text>
                  
                </TouchableOpacity>
                      <TouchableOpacity style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("Chart", { data: data.redirectTo, cryptoPrice: data.price });}}>
                  
                 
                      <Text>View Currency</Text> 
                    </TouchableOpacity>
                    </View>
                    {/* <Text style={styles.cryptoListsTxt}>{data.price} $</Text> */}
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    marginLeft:100,
    width:160,
    height:100,
    marginTop: 20,
  },

  cryptoLists: {
    marginTop: 10
  },
  cryptoListsData: {
    padding: 10,
    margin: 10,
    backgroundColor: "#EBEBEB",
    borderRadius: 20
  },
  scrollView: {
    marginHorizontal: 20,
  },
  areaView: {
    marginTop: 40,
    marginBottom: 60
  },
  cryptoListsTxt: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cryptoListsTopData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "gold",
  }
});