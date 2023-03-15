import * as React from 'react';
import { Image, View, Text,Dimensions,FlatList,ScrollView,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LineChart} from "react-native-chart-kit";
import { FlashList } from "@shopify/flash-list";

function Allexp({ navigation }) {

  const data =[
    {image: require('../assets/utilities.png'),purpose:'Home & Utilities',total:'$3296,98 spent'},
    {image: require('../assets/departure.png'),purpose:'Travel',total:'$3296,98 spent'},
    {image: require('../assets/car.png'),purpose:'Ride Sharing',total:'$3296,98 spent'},
    {image: require('../assets/groceries.png'),purpose:'Groceries',total:'$3296,98 spent'},
    {image: require('../assets/drinks.png'),purpose:'Drinks',total:'$3296,98 spent'},
    {image: require('../assets/rent.png'),purpose:'Rent',total:'$3296,98 spent'}
  ];
  renderItem = ({item}) => (
    <View style={[{  flex: 2,height:70,flexDirection:'row',margin:10,padding:5,justifyContent:'center' } ]}>
      <View style={{flex:1}}>
        <Image source={item.image} style={{width:50,height:50}} />
      </View>
      <View style={{flex:3}}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>{item.purpose}</Text>
        <Text style={{fontSize:20}}>{item.total}</Text>
      </View>
      
      <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:25,color:'gray'}}>{">"}</Text>
      </View>
    </View>
  );
  const divider = () => {
    <View style={{ backgroundColor: "gray", height: 2 }} />
    
  }
  return (

    <View style={styles.container}>
        <View style={styles.subcontainer} >
            
            <View  style={styles.cont2}> 
              <View style={styles.divider}>
                <Text style={{fontSize:25,fontWeight:"bold"}}>All Spending Categories</Text>
              </View>
            <View>
              <FlatList
                  data={data}
                  renderItem={renderItem}
                  ItemSeparatorComponent={() => (
                    <View style={{ backgroundColor: "lightgray", height: 1,borderWidth:0.1 }} />
                  )}
                />
                
            </View>
   
            {/* </View> */}
          </View>
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#f9f6f2',
  },
  subcontainer:{
    flexDirection:'column', 
    flex:1,
    marginTop:20
  },
  cont1:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
    
  },
  cont2:{
      flex:5,
     
    },
    divider:{
      borderBottomWidth:0.2,
      padding:20,
      borderColor:'gray'
    },
    dividerTop:{
      borderTopWidth:0.2,
      padding:20,
      borderColor:'gray'
    },
});
export default Allexp;