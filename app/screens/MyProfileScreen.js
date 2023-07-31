import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useUserContext } from "../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import Profile from "../components/Profile";
import IconRightButton from "../components/IconRightButton";

function MyProfileScreen() {
    const {user} = useUserContext();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: user.displayName,
            headerRight: () => (
                <IconRightButton
                    name="settings"
                    onPress={() => navigation.push('Setting')}
                />
            )
        });
    }, [navigation, user]);

    return (
        <Profile userId={user.id} />
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

export default MyProfileScreen;