import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './src/config/navigation'
import { Provider } from 'react-redux'
import {store,persistor} from './src/store/Index'
import { PersistGate } from 'redux-persist/integration/react'
export default function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <SafeAreaProvider>
   <Navigation/>
 </SafeAreaProvider>
   </PersistGate>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
