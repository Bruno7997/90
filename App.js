import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase"
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import firebaseConfig from "./config"
import * as React from "react";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/Register"
import { RFValue } from "react-native-responsive-fontsize";


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
  }
  else{
  firebase.app()
  }
  const Stack = createStackNavigator()
  const StackNav =()=>{
    return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false, gestureEnabled:false}}>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen}></Stack.Screen>
      <Stack.Screen name="Dashboard" component={DrawerNavigator}></Stack.Screen>
      </Stack.Navigator>
    )
  }
  export default function App(){
  return (
    
    <NavigationContainer>
    <StackNav/>
  </NavigationContainer>
  )}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
