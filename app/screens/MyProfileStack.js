import React from "react";
import MyProfileScreen from "./MyProfileScreen";
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

function MyProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="MyProfile"
                component={MyProfileScreen}
            />
        </Stack.Navigator>
    )
}

export default MyProfileStack;