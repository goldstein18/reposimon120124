import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import Buttons from "../buttons/Buttons";
import Modal from "react-native-modal";
import styles from "./styles";
import { AppColors, normalized } from "../../utils/AppConstants";

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
        <ScrollView>
          <Modal isVisible={isVisible}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.avoidingView}>
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
                    keyboardType='numeric'
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
            </KeyboardAvoidingView>
          </Modal>
        </ScrollView>
      ) : isUpdateValue ? (
        <ScrollView>
          <Modal isVisible={isVisible}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.avoidingView}>
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
                    keyboardType='numeric'
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
            </KeyboardAvoidingView>
          </Modal>
        </ScrollView>
      ) : null}
    </>
  );
};

export default MetaMensualModal;
