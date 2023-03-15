// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Exp from '../screens/Exp';
import Allexp from '../screens/AllExp';



const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const  MyTabs =() =>{
  return (
    <Tab.Navigator   initialRouteName='Home'
    activeColor="blue"
    inactiveColor="black"
    
    barStyle={{ backgroundColor: 'white',borderTopWidth:0.2,borderColor:'gray' }}
    >
      <Tab.Screen name="Home" component={Home} 
       options={{
         title:'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={'black'} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Exp" component={Exp }   options={{
          title:'Expenses',
        tabBarLabel: 'Expenses',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chart-pie" color={'black'} size={26} />
        ),
      }}  />
      <Tab.Screen name="Allexp" component={Allexp} 
       options={{
        title:'All Expenses',
        
        tabBarLabel: 'AllExpenses',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="finance" color={'black'} size={26} />
        ),
      }} 
      
        />
    </Tab.Navigator>
  );
}
const MainStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Homey" component={MyTabs}  />
      </Stack.Navigator>
    );
  };
const App=({route,navigation})=> {
  
  return (
    <NavigationContainer > 
      
      <Tab.Navigator   initialRouteName='Home'
    activeColor="blue"
    inactiveColor="black"
    
    barStyle={{ backgroundColor: 'white',borderTopWidth:0.2,borderColor:'gray' }}
    >
      <Tab.Screen name="Home" component={Home} 
      
       options={{
         
         title:'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={'black'} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Exp" component={Exp }   options={{
          title:'Expenses',
        tabBarLabel: 'Expenses',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chart-pie" color={'black'} size={26} />
        ),
      }}  />
      <Tab.Screen name="Allexp" component={Allexp} 
       options={{
        title:'All Expenses',
        
        tabBarLabel: 'AllExpenses',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="finance" color={'black'} size={26} />
        ),
      }} 
      
        />
    </Tab.Navigator>
        
      
    </NavigationContainer>
  );
}
export default App;