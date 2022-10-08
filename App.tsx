import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/providers/auth.provider";

import Main from "./src/Main";



export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Main/>
            </AuthProvider>
        </NavigationContainer>
    );
}