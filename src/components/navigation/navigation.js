import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native'
import { navigationRef } from '../common/rootNavigation';

import Splash from '../../screen/splash';
import FirstTask from '../../screen/firstTask';
import ImageViewer from '../../screen/imageViewer';
import React from 'react'
import Home from '../../screen/home';
import Setting from '../../screen/setting';
import SecondTask from '../../screen/secondTask';
import ThreeTask from '../../screen/threeTask';
import FourTask from '../../screen/fourTask';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash"
      >

        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="FirstTask" component={FirstTask} />
        <Stack.Screen name="ImageViewer" component={ImageViewer} />
        <Stack.Screen name="SecondTask" component={SecondTask} />
        <Stack.Screen name="ThreeTask" component={ThreeTask} />
        <Stack.Screen name="FourTask" component={FourTask} />


        <Stack.Screen name="Home" component={TabNavigator}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}



const TabNavigator = () => {
  return <Tab.Navigator initialRouteName='Home'>
    <Tab.Screen
      name={'Home'}
      component={Home}
      options={{ title: 'Home', tabBarIcon: ({ focused }) => (<Image source={require('@images/home/House.png')} style={{ height: 30, width: 30, tintColor: focused ? 'blue' : 'gray' }} />) }} />
    <Tab.Screen
      name={'Setting'}
      component={Setting}
      options={{ title: 'Setting', tabBarIcon: ({ focused }) => (<Image source={require('@images/home/gear.png')} style={{ height: 30, width: 30, tintColor: focused ? 'blue' : 'gray' }} />) }} />

  </Tab.Navigator>
}

export default MyStack



