import * as React from 'react';
import { Image, View, Text,Dimensions,FlatList,ScrollView,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LineChart} from "react-native-chart-kit";
import { FlashList } from "@shopify/flash-list";

function Exp({ navigation }) {

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
      <ScrollView>
        <View style={styles.subcontainer} >
            <View  style={styles.cont1}> 
                <Text style={{fontSize:25, fontWeight:'bold'}}>$11943</Text>
            </View>
            <View  style={styles.cont2}> 
              <View style={styles.divider}>
                <Text style={{fontSize:25,fontWeight:"bold"}}>Top Spending Categories</Text>
              </View>
            <View>
              <FlatList
                  data={data}
                  renderItem={renderItem}
                  ItemSeparatorComponent={() => (
                    <View style={{ backgroundColor: "lightgray", height: 1,borderWidth:0.1 }} />
                  )}
                />
                <View style={styles.dividerTop}>
                  <TouchableOpacity onPress={ () => navigation.navigate('Allexp')}>
                    <Text style={{fontSize:25,fontWeight:"bold", color:'gray'}}>View all categories</Text>
                  </TouchableOpacity>
              </View>
            </View>
   
            {/* </View> */}
          </View>
        </View>
    </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#f9f6f2',
    margin:20
  },
  subcontainer:{
    flexDirection:'column', 
  },
  cont1:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
    height:Dimensions.get('window').height/2,
    borderRadius:10
  },
  cont2:{
    backgroundColor:'white',
      flex:5,
      
      borderRadius:10
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
export default Exp;