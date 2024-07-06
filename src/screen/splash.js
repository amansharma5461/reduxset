import { View, Text, Image, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { navigationRef } from '../components/navigation';
import { RootNavigator } from '@common';



import { useNavigation } from '@react-navigation/native';
import FirstTask from './firstTask';
const Splash = () => {
  FirstTask

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('FirstTask');

    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(241, 242, 211)'
    }} >
      <StatusBar
        barStyle={'dark-content'}
        hidden={false}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('@images/splash/splash.png')}
        />
        <Text style={{ position: 'absolute', marginBottom: 70, bottom: 0 }}>ORCHX Technologies Pvt Ltd</Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash;