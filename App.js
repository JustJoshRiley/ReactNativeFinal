import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'

import Item from './Item';
import Stat from './Stats';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import {metalBands} from './metal.js';
import Genre from './Genre';


function Bands() {
  return(
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList 
          data={metalBands}
          renderItem={({item, index}) => {
            return(<Item 
            name={item.band_name} 
            fans={item.fans} 
            origin={item.origin} 
            formed={item.formed}
            split={item.split}
            />)
          }}
        />
      </View>
  )
}

function Stats() {
  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stat />
    </View>
  )
}

function Genres() {
  let genres = []

  for(const band in metalBands){
    const arr = metalBands[band].style.split(",")
    for(const el in arr) {
        if(genres.includes(arr[el]) === false) {
            genres.push(arr[el])
        }
    }
  }


  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList 
        data={genres}
        renderItem={({item, index}) => {
        return(
          <Genre name={item}/>
        )
        }}
      />
      
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: "#000"
      },
      tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Bands') {
        iconName = focused
        
          ? ['ios-people', styles.focused]
          : ['ios-people-outline', styles.unfocused];
      } else if (route.name === 'Stats') {
        iconName = focused 
        ? ['ios-bar-chart', styles.focused] 
        : ['ios-bar-chart-outline', styles.unfocused];
      } else if (route.name === 'Genres') {
        iconName = focused
        ? ['ios-musical-notes', styles.focused]
        : ['ios-musical-notes-outline', styles.focused]
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName[0]} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarActiveBackgroundColor: "#000",
    tabBarInactiveBackgroundColor: "#111"
  })}

      
      >
        <Tab.Screen name="Bands" component={Bands} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Genres" component={Genres} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focused : {
    backgroundColor : "green",
    tintColor: "#f00",
  },
  unfocused : {
    backgroundColor: "#000",
    tintColor: "#600",
  },
  navigation : {
    backgroundColor: "black"
  }
});
