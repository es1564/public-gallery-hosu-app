import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function FeedScreen() {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>Hello</Text>
        </View>
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

export default FeedScreen;