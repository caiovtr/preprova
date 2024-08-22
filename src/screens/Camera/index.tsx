import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Text, TouchableOpacity, View, Alert, ImageBackground } from 'react-native';
import { Painel } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AntDesign } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { Loading } from '../../components/Loading';

export function Camera() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
    const ref = useRef<CameraView>(null);
    const [photo, setPhoto] = useState<CameraCapturedPicture>();
  
    if (!permission) {
      return <Loading />;
    }
  
    if (!permission.granted) {
      return (
        <View>
          <Text>Você precisa dar permissão para acesso à Câmera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }
  
    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
  
    async function takePicture() {
      if (ref.current) {
        const picture = await ref.current.takePictureAsync({ imageType: 'jpg', quality: 0 });
        setPhoto(picture);
      }
    }
  
    async function savePhoto() {
      if (permissionMedia!.status !== 'granted') {
        await requestPermissionMedia();
      }
      const asset = await MediaLibrary.createAssetAsync(photo!.uri);
      await MediaLibrary.createAlbumAsync('Images', asset, false);
      Alert.alert('Imagem salva com sucesso!');
    }
    if (photo) {
        return (
          <ImageBackground style={Painel.container} source={{ uri: photo.uri }}>
            <View>

              <TouchableOpacity onPress={() => setPhoto(undefined)}>
                <AntDesign name="back" size={70} color={"white"} />
              </TouchableOpacity>

              <TouchableOpacity onPress={savePhoto}>
                <AntDesign name="save" size={70} color={"white"} />
              </TouchableOpacity>

            </View>
          </ImageBackground>
        );
      }
      
      return (
        <View style={Painel.container}>
          <CameraView style={Painel.camera} facing={facing} ref={ref}>

            <View>
              <TouchableOpacity onPress={toggleCameraFacing}>
                <AntDesign name="retweet" size={70} color={"white"} />
              </TouchableOpacity>
            </View>

            <View style={Painel.footer}>
              <TouchableOpacity style={Painel.botao} onPress={takePicture}>
              </TouchableOpacity>
            </View>

          </CameraView>
        </View>
      );
}