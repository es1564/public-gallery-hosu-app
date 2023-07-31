import React, { useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput } from "react-native";
import PostCard from "../components/PostCard";
import IconRightButton from "../components/IconRightButton";
import { updatePost } from "../lib/posts";


function ModifyScreen() {
    const navigation = useNavigation();
    const {params} = useRoute();
    const [description, setDescription] = useState(params.description);

    const onSubmit = useCallback(async() => {
        await updatePost({
            id: params.id,
            description: description,
        });
        navigation.pop();
    }, [navigation, params.id, description]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconRightButton onPress={onSubmit} name="check" />,
        });
    }, [navigation, onSubmit]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.select({ios: 'height'})}
            style={styles.block}
            keyboardVerticalOffset={Platform.select({
                ios: 88,
            })}
        >
            <TextInput 
                style={styles.input}
                multiline={true}
                placeholder="이 사진에 대한 설명 입력하세요~"
                textAlignVertical="top"
                value={description}
                onChangeText={setDescription}
            />
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    block: {
        // flex: 1,
    },
    input: {

    }
});

export default ModifyScreen;