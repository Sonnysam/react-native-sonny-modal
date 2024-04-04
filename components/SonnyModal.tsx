import { StatusBar } from 'react-native'
import { StyleSheet, Text, View, Modal, Animated, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ModalProps } from '../Types/modalTypes';
import { Ionicons } from '@expo/vector-icons';



const SonnyModal: React.FC<ModalProps> = ({
    visible,
    onClose,
    title,
    message,
    animationType = 'slide',
    presentationStyle = 'pageSheet',
    onDismiss,
    onShow,
    backdropColor,
    backdropOpacity,
    swipeDirection,
    onSwipeComplete,
    keyboardAvoiding = false
}) => {
    const opacity = new Animated.Value(0);

    React.useEffect(() => {
        if (visible) {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);
    return (
        <Modal
            animationType={animationType}
            presentationStyle={presentationStyle}
            visible={visible}
            onRequestClose={onClose}
            onDismiss={onDismiss}
            onShow={onShow}
        >
            {keyboardAvoiding ? (
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                    <View style={styles.container}>
                        <Animated.View style={[styles.modalView, { opacity }]}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.message}>{message}</Text>
                            <TouchableOpacity onPress={onClose} style={styles.close}>
                                <Text><Ionicons name="close" size={24} color="black" /></Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </KeyboardAvoidingView>
            ) : (
                <View style={styles.container}>
                    <Animated.View style={[styles.modalView, { opacity }]}>
                        <TouchableOpacity onPress={onClose} style={styles.close}>
                            <Text><Ionicons name="close" size={24} color="black" /></Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.message}>{message}</Text>
                    </Animated.View>
                </View>
            )}
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    close: {
        position: 'absolute',
        top: 12,
        right: 12,
    },
})

export default SonnyModal;