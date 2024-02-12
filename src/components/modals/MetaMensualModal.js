import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import Buttons from "../buttons/Buttons";
import Modal from "react-native-modal";
import styles from "./styles";
import { AppColors, normalized } from "../../utils/AppConstants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MetaMensualModal = (props) => {
  const {
    isVisible,
    title,
    isValue,
    onEnteradoPress,
    isUpdateValue,
    defaultValue
  } = props;

  const [value, setValue] = useState(defaultValue)

  return (
    <>
      {isValue ? (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Modal isVisible={isVisible}>
            <View style={styles.modalWrap2}>
              <Text style={styles.txtTitle1}>{title}</Text>
              {/* <Text style={styles.txtLabel2}>{label}</Text> */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Text style={styles.txtLabel2}>$</Text>
                <TextInput
                  style={{
                    ...styles.txtLabel2,
                  }}
                  placeholderTextColor={AppColors.primaryColor.darkBlack}
                  placeholder="__"
                  maxLength={5}
                  value={value}
                  onChangeText={setValue}
                  keyboardType='number-pad'
                />
              </View>
              <View style={styles.wrapFlex1}>
                <Buttons
                  menuBtn
                  label="Agregar meta"
                  txtColor={AppColors.primaryColor.darkWhite}
                  bgColor={AppColors.secondaryColor.lightBlue}
                  onPress={() => onEnteradoPress(value)}
                />
              </View>
            </View>
          </Modal>
        </KeyboardAwareScrollView>
      ) : isUpdateValue ? (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Modal isVisible={isVisible}>
            <View style={styles.modalWrap2}>
              <Text style={styles.txtTitle1}>{title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Text style={styles.txtLabel2}>$</Text>
                <TextInput
                  style={{
                    ...styles.txtLabel2,
                  }}
                  placeholderTextColor={AppColors.primaryColor.darkBlack}
                  placeholder="__"
                  maxLength={5}
                  value={value}
                  onChangeText={setValue}
                  keyboardType='number-pad'
                />
              </View>
              <View style={styles.wrapFlex1}>
                <Buttons
                  menuBtn
                  label="Agregar meta"
                  txtColor={AppColors.primaryColor.darkWhite}
                  bgColor={AppColors.secondaryColor.lightBlue}
                  onPress={() => onEnteradoPress(value)}
                />
              </View>
            </View>
          </Modal>
        </KeyboardAwareScrollView>
      ) : null}
    </>
  );
};

export default MetaMensualModal;
