import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useUserContext } from "../contexts/UserContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import MyProfileStack from "./MyProfileStack";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

function MainTab() {
    const {user} = useUserContext();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#6200ee',
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="MyProfileStack"
                component={MyProfileStack}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="person" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
    },
});

export default MainTab;