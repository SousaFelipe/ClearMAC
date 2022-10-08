import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthPage from "../components/pages/Auth";



const Stack = createNativeStackNavigator();



export default function AuthRoutes() {
    return (
        <Stack.Navigator initialRouteName="Auth">

            <Stack.Screen
                name="Auth"
                component={ AuthPage }
                options={{
                    headerShown: false,
                    statusBarStyle: 'dark'
                }}/>

        </Stack.Navigator>
    );
}
