import React from "react";
import FeedScreen from "./FeedScreen";
import ProfileScreen from "./ProfileScreen";
import PostScreen from "./PostScreen";
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Feed"
                component={FeedScreen}
            />
            <Stack.Screen 
                name="Profile"
                component={ProfileScreen}
            />
            <Stack.Screen 
                name="Post"
                component={PostScreen}
                options={{title: '게시물'}}
            />
        </Stack.Navigator>
    )
}

export default HomeStack;