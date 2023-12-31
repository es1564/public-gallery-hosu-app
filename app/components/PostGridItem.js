import React, { useMemo } from "react";
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Avatar from "./Avatar";
import { useNavigation } from "@react-navigation/native";

function PostGridItem({post}) {
    const demensions = useWindowDimensions();
    const size = (demensions.width - 3) / 3;
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Post', {post});
    }
    return (
        <Pressable
            onPress={onPress}
            style={({pressed}) => [
                {
                    opacity: pressed ? 0.6 : 1,
                    width: size,
                    height: size,
                },
                styles.block,
        ]}>
            <Image
                style={styles.image}
                source={{uri: post.photoURL}}
                resizeMethod="resize"
                resizeMode="cover"
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    block: {
        margin: 0.5
    },
    image: {
        backgroundColor: '#bdbdbd',
        width: '100%',
        height: '100%',
    }
});

export default PostGridItem;