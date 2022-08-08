import { Camera } from 'expo-camera';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/themed';
import React, { useState, useEffect } from 'react';

export default function CameraScreen() {

    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasPermission(cameraStatus.status === 'granted') 
        })();
      }, []);
    
      const takePicture = async () => {
        if (camera) {
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
        console.log(data.uri);
        }
      }

      if (hasPermission === null) {
        return <View />;
      }

      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

      

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}> 
            <Camera 
                style={styles.camera} 
                type={type} 
                ref={ref => setCamera(ref)}
                ratio={'1:1'}
            />
            </View>
            <Stack row align='center' spacing={6}>
            <Button 
                style={styles.button}
                title='Flip Image'
                onPress={() => {
                    setType(type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    )
                }}
            />
            </Stack>
            <Button
                title='Take Picture'
                onPress={() => {takePicture}}
            />
            {image && <Image source={{uri: image}} style={{flex: 1}} />}  
        </View>
    )
}

const styles = StyleSheet.create ({
    button: {
        alignSelf: 'flex-end',
        flex: 0.1,
        alignItems: 'center',
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    container: {
        flex: 1 ,
        alignContent: 'center'
    },
    camera: {
        flex: 1,
        
    },

})