import React from "react";
import FeedScreen from "./FeedScreen";
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Feed"
                component={FeedScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeStack;