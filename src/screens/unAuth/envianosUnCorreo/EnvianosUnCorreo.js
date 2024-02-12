import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";
import {
  Feather,
  AppColors,
  AppIcons,
  normalized,
} from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export const EnvianosUnCorreo = (props) => {
  const { navigation } = props;

  const [val, setVal] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapTop}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                color={AppColors.primaryColor.darkBlack}
                size={AppIcons.commonIcons.medium}
              />
            </TouchableOpacity>
            <Text style={styles.txtAdministra}>Envianos un correo</Text>
            <Text style={styles.txtDino}>
              Dinos lo mas que puedas del problema
            </Text>
          </View>
          <View style={styles.wrapMiddle}>
            <TextInput
              placeholder=""
              placeholderTextColor={AppColors.primaryColor.darkWhite}
              value={val}
              onChangeText={setVal}
              keyboardType="default"
              style={styles.txtInp}
              multiline
            />
          </View>
          <View style={styles.wrapEnd}>
            <Buttons
              menuBtn
              marginTop={normalized.hp("4%")}
              label="Enviar mensaja"
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.secondaryColor.lightBlue}
              onPress={() => navigation.navigate("EstadoDeCuenta")}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
