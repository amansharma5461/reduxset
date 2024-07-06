import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './src/utils/redux/reducer';
import FirstTask from './src/screen/firstTask';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/splash';
import Navigation from './src/components/navigation/navigation'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();
const App = () => {
  return (
<Provider store={store}>
<SafeAreaView style={{ flex: 1 }}>
   <View style={{ flex: 1 }}>
  <Navigation/>
  </View>
</SafeAreaView>
</Provider>
  )
}

export const store = createStore(rootReducer);
export default App

