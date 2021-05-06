import React, { useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login/Index'
import SignUp from '../views/signUp/Index'
import Dash from '../views/Dash/Index'
import Home from '../views/Home/Index'
import AdminDash from '../views/AdminDash/Index'
import { NavigationContainer } from '@react-navigation/native';
import ContactUs from '../views/ContactUs/Index'
const Stack = createStackNavigator();

export default function Navigation() {
  
   
   
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
          <Stack.Screen options={{ headerShown: true }} name='SignUp' component={SignUp} />

          <Stack.Screen options={{ headerShown: false }} name='Dash' component={Dash} />
          <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
          <Stack.Screen options={{ headerShown: false }} name='AdminDash' component={AdminDash} />
          <Stack.Screen options={{ headerShown: false }} name='ContactUs' component={ContactUs} />
  
  
        </Stack.Navigator>
      </NavigationContainer>
    )
  }