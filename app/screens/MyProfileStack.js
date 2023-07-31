import React from "react";
import MyProfileScreen from "./MyProfileScreen";
import PostScreen from "./PostScreen";
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

function MyProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="MyProfile"
                component={MyProfileScreen}
            />
            <Stack.Screen 
                name="Post"
                component={PostScreen}
                options={{title: '게시물'}}
            />
        </Stack.Navigator>
    )
}

export default MyProfileStack;