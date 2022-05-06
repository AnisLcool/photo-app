import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { MediaLibrary } from 'expo-media-library';
const Cam = (props) => {
    console.log('return Cam.js');
    const [permisssion, setPermission] = useState(null);
    const [permisssionMedia, setPermissionMedia] = useState(null);
    const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.front);

    // {current: undefined}
    const cameraRef = useRef();

    console.log('CAMERA REF : ', cameraRef);

    useEffect(() => {
        // synchrone , asynchrone, promise, ajax, fetch, axios => 
        // faire des appels à une API;
        // axios.get().then().catch()
        
        Camera.requestCameraPermissionsAsync().then(response => {
            // denied, granted
            // const status = response.status;
            console.log('Request camera response : ', response)
            const { status } = response;
            console.log('status : ', status);
            setPermission(status);
        }).catch(error => {
            console.log(error);
        });

        MediaLibrary.requestPermissionsAsync().then(response => {
            // denied, granted
            // const status = response.status;
            console.log('Request mesdia response : ', response)
            const { status } = response;
            console.log('status : ', status);
            setPermissionMedia(status);
        }).catch(error => {
            console.log(error);
        });




    }, []);


    const toggleCameraHandler = () => {
        if (typeCamera === Camera.Constants.Type.front) {
            setTypeCamera(Camera.Constants.Type.back)
        } else {
            setTypeCamera(Camera.Constants.Type.front)
        }
    }


    const takePicture = () => {
        // react ne permet pas de faire ça => document.querySelector('Camera');
        cameraRef.current.takePictureAsync().then((response) => {
            console.log('response take picture : ', response);
            const image = response;
            props.setImageHandler(image);

            MediaLibrary.saveToLibraryAsync(image.uri).then(response => {
                console.log(response);
            })
            
        }).catch();
    }




    if (permisssion === 'denied') {
        return <View><Text>Permission was not granted!</Text></View>
    }

    return (
        <View style={styles.container}>
            <Camera ref={cameraRef} style={styles.camera} type={typeCamera}>
                <TouchableOpacity onPress={toggleCameraHandler}>
                    <Ionicons name='camera-reverse-sharp' size={64} color='green' />
                </TouchableOpacity>
                <TouchableOpacity onPress={takePicture}>
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
        borderColor: 'red',
        flex: 1
    },
    camera: {
        flex: 1
    }
})