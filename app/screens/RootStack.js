import React from "react";
import SignInScreen from "./SignInScreen";
import WelcomeScreen from "./WelcomeScreen";
import { useUserContext } from "../contexts/UserContext";
import MainTab from "./MainTab";
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

function RootStack() {
    const {user} = useUserContext();

    return (
        <Stack.Navigator>
            {user ? (
                <>
                    <Stack.Screen 
                        name="MainTab"
                        component={MainTab}
                        options={{headerShown: false}}
                    />
                </>
            ) : (
                <>
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
                </>
            )}
        </Stack.Navigator>
    )
}

export default RootStack;