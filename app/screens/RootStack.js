import React from "react";
import SignInScreen from "./SignInScreen";
import WelcomeScreen from "./WelcomeScreen";
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SignIn"
                component={SignInScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Welcome"
                component={WelcomeScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default RootStack;