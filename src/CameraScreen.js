import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  NativeModules,
  Alert,
  Button,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

const CameraScreen = () => {
  const [image, setImage] = useState(null);

  const openCamera = async (cropIt) => {
    let image = await ImagePicker.openCamera({
      cropping: cropIt,
      width: 500, // width after cropped
      height: 500, // height after cropped
      includeExif: true,
    });

    setImage({uri: image.path, width: image.width, height: image.height});
  };

  const openPhotoGallery = async (cropIt) => {
    let image = await ImagePicker.openPicker({
      // width: 300, // width after cropped
      // height: 300, // height after cropped
      cropping: cropIt,
      compressImageMaxWidth: 640, // max width compress if not croppred
      compressImageMaxHeight: 480, // max height compress if not croppred
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    });

    setImage({
      uri: image.path,
      width: image.width,
      height: image.height,
      mime: image.mime,
    });
  };

  const uploadWithAxios = async () => {
    const data = new FormData();
    data.append('username', 'codemobiles'); // you can append anyone.
    data.append('password', '1234'); // you can append anyone.
    data.append('userfile', {
      uri: image.uri,
      type: 'image/jpeg', // or photo.type
      name: 'testPhotoName.jpg',
    });

    let result = await axios.post('http://192.168.0.108:3000/uploads', data);
    console.log(JSON.stringify(result.data));
    Alert.alert(JSON.stringify(result.data));
  };

  return (
    <ImageBackground
      source={require('./assets/img/bg.png')}
      style={{
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
    </ImageBackground>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  button: {
    marginBottom: 10,
    height: 40,
    padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  upload_button: {
    borderRadius: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    width: 300,
    height: 50,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  text_upload: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 10,
    color: '#FFFFFF',
  },
});
