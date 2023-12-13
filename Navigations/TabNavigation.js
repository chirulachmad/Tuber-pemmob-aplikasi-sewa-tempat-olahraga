import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Search from "../screens/Search";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel : 'Home',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" color={color} size={size}/>
        ),
      }}
      />
      <Tab.Screen name="Search" component={Search}
      options={{
        tabBarLabel : 'Search',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="search" color={color} size={size}/>
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel : 'Profile',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="account-circle" color={color} size={size} />
        ),
      }} 
      />
    </Tab.Navigator>
  );
}
