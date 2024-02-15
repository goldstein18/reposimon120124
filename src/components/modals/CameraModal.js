import React, { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import Buttons from "../buttons/Buttons";
import Modal from "react-native-modal";
import styles from "./styles";
import {
  AppColors,
  AntDesign,
  AppIcons,
  normalized,
} from "../../utils/AppConstants";

const CameraModal = (props) => {
  const { isVisible, onClosePress, onCameraPress, onGallaryPress } = props;
  return (
    <>
      <Modal isVisible={isVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.wrapClose} onPress={onClosePress}>
            <AntDesign
              name="close"
              size={AppIcons.commonIcons.medium}
              color={AppColors.primaryColor.darkBlack}
            />
          </TouchableOpacity>
          <Buttons
            largeBtn
            label={"Cámara"}
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack}
            marginTop={normalized.hp("1%")}
            onPress={onCameraPress}
          />
          <Buttons
            largeBtn
            label={"Gallario"}
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack}
            marginTop={normalized.hp("1%")}
            onPress={onGallaryPress}
          />
          <Buttons
            largeBtn
            label={"Cancelar"}
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack}
            marginTop={normalized.hp("1%")}
            onPress={onClosePress}
          />
        </View>
      </Modal>
    </>
  );
};

export default CameraModal;
