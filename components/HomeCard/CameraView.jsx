import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../theme/style";
import { useAppContext } from "../../context/AppContext";

export const CameraView = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);




  const {setPhotoData} = useAppContext()

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const postPhoto = async (uri) => {
    const formData = new FormData();
    formData.append('file', {
      uri,
      name: 'photo.jpg',
      type: 'image/jpeg'
    });

    try {
      const { data } = await axios.post("https://anemiaserverai.azurewebsites.net/process", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPhotoData(data);
      navigation.navigate("Profile"); 
    } catch (error) {
      console.error("Error posting photo:", error);
    } finally {
      setLoading(false);
    }
  };

  const takePicture = async () => {
    if (camera) {
      setLoading(true);
      const data = await camera.takePictureAsync();
      await postPhoto(data.uri);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No Camera Access</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <Camera
        ref={(ref) => setCamera(ref)}
        type={type}
        ratio={"1:1"}
        style={styles.fixedRatio}
      />
      <TouchableOpacity
        style={{ position: "absolute", top: 20, left: 20 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={takePicture} style={styles.cameraContainer}>
        <View style={styles.cameraIconContainer}>
          <View style={styles.cameraIcon}></View>
        </View>
      </TouchableOpacity>
      {}
    </View>
  );
};
