import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import Cam from './Cam';
import {useEffect} from 'react';
// composant Modal comme le composant Parent(racine) dans le composant Cam
const Home = () => {
    useEffect(() => {
        // synchrone , asynchrone, promise, ajax, fetch, axios => 
        // faire des appels à une API
        console.log('useEffect Home.js')
    })
    console.log('return Home.js')
    return (
        <>
            <Modal visible={true}>
                <View style={styles.modal}>
                    <Entypo name='cross' size={45} color='red' />
                </View>
                
                <Cam />
            </Modal>
            
            <TouchableOpacity onPress={() => { }}>
                <Entypo name='camera' size={64} color='black' />
            </TouchableOpacity>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})