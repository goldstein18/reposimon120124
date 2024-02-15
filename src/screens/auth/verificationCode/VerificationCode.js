import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather, AppColors, AppIcons } from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import OTPTextInput from "react-native-otp-textinput";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import { API } from "../../../services/api";
import LoaderModal from "../../../components/modals/LoaderModal";

export const VerificationCode = (props) => {

  const { navigation, route } = props;
  // const navigateFrom = route?.params?.navigateFrom

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const phoneNumber = useSelector(
    (state) => state.combineReducers.authSlice.phoneNumber
  );

  const onSuccess = (res) => {
    console.log("OTP verified successfully ===>>", res);
    navigation.navigate("Nombre");
  }

  const onError = (err) => {
    console.log("error password creation ==>>", err);
  }

  const { mutate, isLoading } = mutationHandler(API.verified_code, onSuccess, onError);

  const proceedNext = () => {
    if (otp.length == 5) {
      setError("");
      mutate({ id_Source: 1, in_Phone: phoneNumber, vc_Type: "OTP", in_Code: otp });
    } else {
      setError("Codigo invalido");
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapWidth}
      >
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.txtEmpecemos}>Código de 6 dígitos</Text>
          <Text style={styles.txtDesc}>
            Se envió un código al +52 442 114 3497, a menos de que ya tengas una
            cuenta
          </Text>
          <View style={styles.wrapOtp}>
            <OTPTextInput
              autoFocus
              containerStyle={styles.containerStyle}
              inputCount={5}
              textInputStyle={styles.textInputStyle}
              tintColor={AppColors.secondaryColor.activeFieldBorder}
              // offTintColor={AppColors.primaryColor.lightBlack}
              handleTextChange={setOtp}
            // ref={(e) => (otpInput = e)}
            />
          </View>

          {error != "" ? <Text style={styles.errorTxt}>{error}</Text> : null}

          {/* {!navigateFrom && */}
            <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
              <Text style={styles.txtTienes}>
                ¿Ya tienes una cuenta? Inicia sesión
              </Text>
            </TouchableOpacity>
          {/* } */}

        </View>
        <View style={styles.bottom}>
          <Buttons
            menuBtn
            label="Crear cuenta"
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.secondaryColor.lightBlue}
            onPress={proceedNext}
          />
        </View>
        <LoaderModal visible={isLoading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
