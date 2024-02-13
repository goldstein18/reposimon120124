import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Feather,
  AppColors,
  AppIcons,
  AntDesign,
  normalized,
} from "../../../utils/AppConstants";
import styles from "./styles";
import Buttons from "../../../components/buttons/Buttons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { useSelector } from "react-redux";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import { API } from "../../../services/api";
import LoaderModal from "../../../components/modals/LoaderModal";
import CameraModal from "../../../components/modals/CameraModal";
export const Necesitamos = (props) => {
  const { navigation } = props;
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showError1, setShowError1] = useState(false);
  const [isCaratulaModal, setIsCaratulaModal] = useState(false);
  const [isParteModal, setIsParteModal] = useState(false);

  const phoneNumber = useSelector(
    (state) => state.combineReducers.authSlice.phoneNumber
  );

  const onSuccess = (res) => {
    console.log("Necesitamos screen response ===>>", res);
    navigation.navigate("PorUltimo");
  };

  const onError = (err) => {
    console.log("Necesitamos screen error ==>>", err);
  };

  const { mutate, isLoading } = mutationHandler(
    API.uploadINE,
    onSuccess,
    onError
  );

  const checkPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("¡Se denegó el permiso para acceder a la cámara!");
      return false;
    } else {
      return true
    }
  };

  const pickImageFront = async (imgType) => {
    setIsCaratulaModal(false);
    const status = await checkPermission();
    if (status === false) {
      return
    }
    setTimeout(async () => {
      if (imgType === "camera") {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
        });

        if (!result.canceled) {
          setImage(result.assets[0]);
        }
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
        });

        if (!result.canceled) {
          setImage(result.assets[0]);
        }
      }
    }, 500);
  };

  const pickImageBack = async (imgType) => {
    setIsParteModal(false);
    const status = await checkPermission();
    if (status === false) {
      return
    }
    setTimeout(async () => {
      if (imgType === "camera") {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
        });
        if (!result.canceled) {
          setImage1(result.assets[0]);
        }
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
        });

        if (!result.canceled) {
          setImage1(result.assets[0]);
        }
      }
    }, 500);
  };

  const onSubmit = () => {
    if (image === null && image1 === null) {
      setShowError(true);
      setShowError1(true);
    } else if (image === null) {
      setShowError(true);
    } else if (image1 === null) {
      setShowError1(true);
    } else {
      setShowError(false);
      setShowError1(false);
      mutate({ in_Phone: phoneNumber, img_ine1: image.base64, img_ine2: image1.base64 });
    }
  };

  const nameGetter = (value) => {
    const array = value?.split('/')
    return array[array.length - 1]
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <View style={styles.topHeight}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.txtAdministra}>
            Necesitamos tu INE para abrir tu cuenta
          </Text>
          <Text style={styles.txtElige}>
            Sube una imagen de cada lado de tu INE
          </Text>
          <TouchableOpacity
            style={{ ...styles.flexRow, marginTop: normalized.hp("6%") }}
            onPress={() => setIsCaratulaModal(true)}
          >
            <Text style={styles.txtCaratula}>
              {image ? nameGetter(image?.uri) : 'Carátula del INE'}
            </Text>
            <AntDesign
              name="camera"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          {showError ? <Text style={styles.errorTxt}>requerido</Text> : null}
          <TouchableOpacity
            style={styles.flexRow}
            onPress={() => setIsParteModal(true)}
          >
            <Text style={styles.txtCaratula}>
              {image1 ? nameGetter(image1?.uri) : 'Parte posterior de tu INE (atras)'}
            </Text>
            <AntDesign
              name="camera"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          {showError1 ? <Text style={styles.errorTxt}>requerido</Text> : null}
        </View>
        <View style={styles.middleHeight} />
        <View style={styles.bottomHeight}>
          <Buttons
            largeBtn
            label={"Crear cuenta"}
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack}
            onPress={onSubmit}
          />
        </View>
      </View>
      <LoaderModal visible={isLoading} />
      {isCaratulaModal && (
        <>
          <CameraModal
            isVisible={isCaratulaModal}
            onClosePress={() => setIsCaratulaModal(false)}
            onCameraPress={() => pickImageFront("Cámara")}
            onGallaryPress={() => pickImageFront("Galería")}
          />
        </>
      )}
      {isParteModal && (
        <>
          <CameraModal
            isVisible={isParteModal}
            onClosePress={() => setIsParteModal(false)}
            onCameraPress={() => pickImageBack("Cámara")}
            onGallaryPress={() => pickImageBack("Galería")}
          />
        </>
      )}
    </SafeAreaView>
  );
};
