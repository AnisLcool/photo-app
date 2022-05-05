import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
const Cam = () => {
    console.log('return Cam.js')
    useEffect(() => {
        // synchrone , asynchrone, promise, ajax, fetch, axios => 
        // faire des appels à une API
        console.log('useEffect Cam.js')
    })
    return (
        <View style={styles.container}>
            <Camera>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name='camera-reverse-sharp' size={64} color='green' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <MaterialIcons name='camera' size={64} color='red' />
                </TouchableOpacity>
            </Camera>
        </View>
    )
}

export default Cam

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        flex: 1
    }
})