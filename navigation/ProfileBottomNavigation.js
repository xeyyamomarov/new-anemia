
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Image, View } from 'react-native';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Welcome">
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/Home.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </View>
          ),
        }}
        component={HomeScreen}
      />
       <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/Profile.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
