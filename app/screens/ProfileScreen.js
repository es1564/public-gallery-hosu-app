import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Profile from "../components/Profile";

function ProfileScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const {userId, displayName} = route.params ?? {};

    useEffect(() => {
        navigation.setOptions({
            title: displayName,
        });
    }, [navigation, displayName]);

    return (
        <Profile userId={userId} />
    )
}

const styles = StyleSheet.create({
});

export default ProfileScreen;