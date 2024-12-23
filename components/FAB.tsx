import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

interface FABProps {
    onPress?: () => void,
    onLongPress?: () => void,
    label: string,
    customStyles?: { [key: string]: number | string }
}
export default function FAB({
    onPress = () => { },
    onLongPress = () => { },
    label,
    customStyles = { bottom: 20, right: 20 }

}: FABProps) {
    return (
        <Pressable
            style={({ pressed }) =>
                [
                    styles.floatingButton,
                    customStyles,
                    pressed ? { opacity: 0.5 } : { opacity: 1 }
                ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>
                {label}
            </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        backgroundColor: '#65588F',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4,
    }
});
