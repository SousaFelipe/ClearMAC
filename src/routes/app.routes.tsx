import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../components/pages/Home";
import SearchPage from "../components/pages/Search";



const Stack = createNativeStackNavigator();



export default function AuthRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen
                name="Home"
                component={ HomePage }
                options={{
                    headerShown: false,
                    statusBarStyle: 'dark'
                }} />

            <Stack.Screen
                name="Search"
                component={ SearchPage }
                options={{
                    headerShown: false,
                    statusBarStyle: 'dark'
                }} />

        </Stack.Navigator>
    );
}
