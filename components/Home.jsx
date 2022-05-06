import { StyleSheet, View, Modal, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Cam from './Cam';
import {useState,useEffect} from 'react';
import React from 'react';
// composant Modal comme le composant Parent(racine) dans le composant Cam
const Home = () => {
   const [showModal, setShowModal] = useState(false);
   const [image, setImage] = useState(null);
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

    const setImageHandler = (image) => {
        setImage(image)
    }
    return (
        <>
            <Modal visible={showModal} animationType='slide'>
                <View style={styles.modal}>
                    <Entypo name='cross' size={45} color='red' onPress={hideModalHandler}/>
                </View>
                
                <Cam setImageHandler={setImageHandler} />
            </Modal>
            
            <TouchableOpacity onPress={showModalHandler}>
                <Entypo name='camera' size={64} color='black' />
            </TouchableOpacity>


            <View style={styles.imageContainer}>
                {image && <Image style={styles.image} source={{uri: image.uri }} />}
            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        width:300,
        height:300,
    },
    image:{
        flex: 1,
        borderWidth: 2, borderColor: 'black',borderRadius: 150,
    }
})