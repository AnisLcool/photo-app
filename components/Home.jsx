import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Cam from './Cam';
import {useState,useEffect} from 'react';
import React from 'react';
// composant Modal comme le composant Parent(racine) dans le composant Cam
const Home = () => {
   const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        // synchrone , asynchrone, promise, ajax, fetch, axios => 
        // faire des appels à une API
        console.log('useEffect Home.js');
    })
    console.log('return Home.js')
    const showModalHandler = () => {
        setShowModal(true);
    }
    const hideModalHandler = () =>{
        setShowModal(false);
    }
    return (
        <>
            <Modal visible={showModal} animationType='slide'>
                <View style={styles.modal}>
                    <Entypo name='cross' size={45} color='red' onPress={hideModalHandler}/>
                </View>
                
                <Cam />
            </Modal>
            
            <TouchableOpacity onPress={showModalHandler}>
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