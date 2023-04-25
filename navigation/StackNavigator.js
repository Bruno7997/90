import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import TabNavigator from "./TabNavigator"

import PostScreen from "../screens/Postscreen"
const Stack = createStackNavigator()
const StackNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.screen name="Tela Inicial" component={TabNavigator}></Stack.screen>
            <Stack.screen name="Tela de Posts" component={PostScreen}></Stack.screen>
        </Stack.Navigator>
    )
}
export default StackNavigator