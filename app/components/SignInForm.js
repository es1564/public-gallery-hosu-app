import React, {useRef} from "react";
import { StyleSheet } from "react-native";
import BorderenInput from "./BorderenInput";

function SignInForm({isSignUp, onSubmit, form, createChangeTextHandler}) {
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    return (
        <>
            <BorderenInput 
                hasMarginBottom 
                placeholder="이메일" 
                value={form.email} 
                onChangeText={createChangeTextHandler('email')}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
            />
            <BorderenInput 
                placeholder="비밀번호" 
                hasMarginBottom={isSignUp} 
                value={form.password} 
                onChangeText={createChangeTextHandler('password')}
                secureTextEntry
                ref={passwordRef}
                returnKeyType={isSignUp ? 'next' : 'done'}
                onSubmitEditing={() => {
                    if (isSignUp) {
                        confirmPasswordRef.current.focus();
                    } else {
                        onSubmit();
                    }
                }}
            />
            {isSignUp && (
                <BorderenInput 
                    placeholder="비밀번호 확인" 
                    value={form.confirmPassword} 
                    onChangeText={createChangeTextHandler('confirmPassword')}
                    secureTextEntry
                    ref={confirmPasswordRef}
                    returnKeyType="done"
                    onSubmitEditing={onSubmit}
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
});

export default SignInForm;