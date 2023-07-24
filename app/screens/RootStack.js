import React from "react";
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

function RootStack() {
    return <Stack.Navigator></Stack.Navigator>
}

export default RootStack;