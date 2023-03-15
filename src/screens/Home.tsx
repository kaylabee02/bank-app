import * as React from 'react';
import { Image, View, Text,Dimensions,FlatList,ScrollView,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LineChart} from "react-native-chart-kit";
import { FlashList } from "@shopify/flash-list";

function Home({ navigation }) {

  const data =[
    {image: require('../assets/clickbank.png'),bank:'Click Bank',purpose:'Personal Savings',total:'$9,2875'},
    {image: require('../assets/citi.png'),bank:'Citi',purpose:'BofA Checkings',total:'$12,030'},
    {image: require('../assets/hsbc.png'),bank:'HSBS',purpose:'Cash',total:'$7,123'},
    {image: require('../assets/google-wallet.png'),bank:'Google Wallet',purpose:'Ticket Payment',total:'$15,712'}
  ];
  renderItem = ({item}) => (
    <View style={[{  flex: 1,height:70,flexDirection:'row',margin:10,padding:5,justifyContent:'center' } ]}>
      <View style={{flex:1}}>
        <Image source={item.image} style={{width:50,height:50}} />
      </View>
      <View style={{flex:2}}>
      <Text style={{fontSize:15,fontWeight:'bold'}}>{item.bank}</Text>
        <Text style={{fontSize:18}}>{item.purpose}</Text>
      </View>
      <View style={{flex:1,marginTop:8}}>
        <Text style={{fontSize:20}}>{item.total}</Text>
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
              <LineChart
                data={{
                  labels: ["1D", "1W", "1M", "3M", "1Y", "ALL"],
                  
                  datasets: [
                    {
                      data: [
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20
                      ]
                    }
                  ]
                }}
                withDots={false}
                width={Dimensions.get("window").width} // from react-native
                height={200}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#F99417",
                  backgroundGradientFrom: "#F6F5F5",
                  backgroundGradientTo: "white",
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(7, 7, 7, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(7, 7, 7, ${opacity})`,
                  style: {
                    borderRadius: 0
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 2,
                  margin:25
                }}
              />
            </View>
            <View  style={styles.cont2}> 
            <View style={styles.divider}>
               <Text style={{fontSize:25,fontWeight:"bold"}}>Cash</Text>

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
      height:Dimensions.get('window').height/2,
      borderRadius:10
    },
    divider:{
      borderBottomWidth:0.2,
      padding:20,
      borderColor:'gray'
    },
});
export default Home;