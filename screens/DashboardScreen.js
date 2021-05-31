import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

axios.defaults.headers.common['Accept-Encoding'] = 'gzip'

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri: `https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}}  style={{width:40, height:40,borderRadius:30}} />
      <View style={{justifyContent:"center",alignItems:"flex-start",flex:1,marginHorizontal: "5%"}}>
        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        <Text >{item.symbol}</Text>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"}}>${parseFloat(item.priceUsd).toFixed(2)}</Text>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"},
        
         item.changePercent24Hr > 0
                ? {  color: "green" }
                : {  color: "red" }
        
        }>{parseFloat(item.changePercent24Hr).toFixed(2)} %</Text>
      </View>
     
    </View>
  );
}

export default function DashboardScreen({ navigation }) {

 


    const [data, setData] = useState([]);
  
  
    const getDataUsingAsyncAwaitGetCall = async () => {
        try {
          const response = await axios.get(
            'https://api.coincap.io/v2/assets?limit=15',
            
            
          );
  
  
  
          let resData = response.data.data
  
           setData(resData && resData)
        } catch (error) {
          // handle error
          console.log(error.message);
        }
      };
  
    useEffect(() => {
       getDataUsingAsyncAwaitGetCall();
    });
  
  
  
  
    
  
    return (
  
      <View style={styles.container}> 
      <Image
                     style={styles.logo}
                      source={require('../assets/fluctuation.png')}
                />
     

      <FlatList
        style={{flex:1}}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> navigation.navigate('DetailsCurrencyScreen')} >
          <Item item={item}/> 
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />


  
    </View>

    
    );

    
  }
  

  
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBEBEB',
      marginTop:20,
 
    },
    logo: {
        marginLeft:110,
      width:220,
      height:170
      },
    listItem:{
      margin:10,
      padding:10,
      backgroundColor:"#FFF",
      width:"90%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:5,
      elevation: 3,
      shadowOffset: { width: 1 , height:1},
      shadowColor: "#333",
      shadowOpacity: 0.2,
      justifyContent: 'center',
      alignItems: 'center',

  
    }
});
