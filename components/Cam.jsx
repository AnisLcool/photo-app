import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useEffect} from 'react';

const Cam = () => {
    console.log('return Cam.js')
    useEffect(() => {
        // synchrone , asynchrone, promise, ajax, fetch, axios => 
        // faire des appels à une API
        console.log('useEffect Cam.js')
      })
    return (
        <View>
            <Text>Cam</Text>
        </View>
    )
}

export default Cam

const styles = StyleSheet.create({})