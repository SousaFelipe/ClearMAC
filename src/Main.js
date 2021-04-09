import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Search from './pages/Search'



const Stack = createStackNavigator()



export default () => (
    <Stack.Navigator
        mode="modal"
        initialRouteName="HomeScreen"
        screenOptions={{
            headerShown: false
        }}>

        <Stack.Screen name="HomeScreen" component={ Home } />
        <Stack.Screen name="SearchScreen" component={ Search } />

    </Stack.Navigator>
)
