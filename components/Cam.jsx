import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
const Cam = () => {
    console.log('return Cam.js');
    const [permisssion, setPermission] = useState(false)
    useEffect(() => {
        // synchrone , asynchrone, promise, ajax, fetch, axios => 
        // faire des appels à une API;
        // axios.get().then().catch()
        Camera.requestCameraPermissionsAsync().then(response => {
            // denied, granted
            // const status = response.status;
            const { status } = response;
            setPermission(status === 'granted' ? true : false);
        }).catch(error => {
            console.log(error);
        });
       
    });

    if(permisssion === false){
        return <View><Text>Permission was not granted!</Text></View>
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera}>
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
        borderColor:'red',
        flex: 1
    },
    camera:{
        flex:1
    }
})