import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Buttons from "../buttons/Buttons";
import Modal from "react-native-modal";
import styles from "./styles";
import { AppColors } from "../../utils/AppConstants";
const HelpModal = (props) => {
  const { isVisible, label, title, onCancelarPress, onEnteradoPress } = props;
  return (
    <>
      <Modal isVisible={isVisible}>
        <View style={styles.modalWrap1}>
          <Text style={styles.txtTitle1}>{title}</Text>
          <Text style={styles.txtLabel1}>{label}</Text>
          <View style={styles.wrapFlex1}>
            <Buttons
              menuBtn
              label="Enterado"
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.secondaryColor.lightBlue}
              onPress={onEnteradoPress}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HelpModal;
