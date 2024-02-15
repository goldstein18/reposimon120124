import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Buttons from "../buttons/Buttons";
import Modal from "react-native-modal";
import styles from "./styles";
import { AppColors } from "../../utils/AppConstants";
const CommonModal = (props) => {
  const { isVisible, label, title, onCancelarPress, onTransferirPress } = props;
  return (
    <>
      <Modal isVisible={isVisible}>
        <View style={styles.modalWrap}>
          <Text style={styles.txtTitle}>{title}</Text>
          <Text style={styles.txtLabel}>{label}</Text>
          <View style={styles.wrapFlex}>
            <Buttons
              menuBtn
              label="Cancelar"
              txtColor={AppColors.secondaryColor.lightBlue}
              bgColor={AppColors.primaryColor.darkWhite}
              onPress={onCancelarPress}
            />
            <Buttons
              menuBtn
              label="Transferir"
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.secondaryColor.lightBlue}
              onPress={onTransferirPress}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CommonModal;
