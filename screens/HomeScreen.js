import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {



  const DATA= [
    {
      id: 1,
      symbol: "EURUSD",
      price: 10,
      img: "https://i.pinimg.com/736x/37/e2/a7/37e2a7926b0aa719d9fe6f683869d582.jpg",
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
      img: "http://3.bp.blogspot.com/-KJWiQjXg9jA/UIbexMLt4OI/AAAAAAAAAew/26i5lWG6CW8/s1600/dollar_logo_11_s.jpg",
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
                      <View style={styles.cryptoListsTopData2}>
                           <TouchableOpacity style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("Chart", { data: data.redirectTo, cryptoPrice: data.price });}}>
                                <Text>View Chart</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("DetailsCurrencyScreen", { data: data.redirectTo, cryptoPrice: data.price });}}>  
                                <Text>Buy/Sell</Text>
                           </TouchableOpacity>
                      </View>

                          <TouchableOpacity style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("DashboardCurrencyScreen");}}>
                                <Text>View Currency</Text> 
                          </TouchableOpacity>
                    </View>
             
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
    marginLeft:130,
    width:160,
    height:100,
    marginTop: 10,
  },

  cryptoListsData: {
    padding: 10,
    margin: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 20
  },
  scrollView: {
    marginHorizontal: 20,
  },
  areaView: {
    marginTop: 20,
    marginBottom: 60
  },
  cryptoListsTxt: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cryptoListsTopData: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  cryptoListsTopData2:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#d9d9d9",
    
  }
});