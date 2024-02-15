import React, { useState } from "react";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { PhoneNumberField } from "../../../components";
import Buttons from "../../../components/buttons/Buttons";
import { useKeyboard } from "../../../hooks/KeyboardAware";
import styles from "./styles";
import { Feather, AppColors, AppIcons } from "../../../utils/AppConstants";
import { InputField } from "../../../components/Input/InputField";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../../redux/slices/authSlice";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import LoaderModal from "../../../components/modals/LoaderModal";
import { API } from "../../../services/api";


const reviewSchema = yup.object({
  PhoneNumber: yup
    .string()
    .required('Campo requerido')
    .matches(/^[0-9]{10}$/, 'Debe tener 10 dígitos'),
  EmailAddress: yup
    .string()
    .email("Correo inválido")
    .required("Campo requerido"),
});

export const LetUsBegin = (props) => {

  const { navigation } = props;
  const dispatch = useDispatch();
  const phoneNumber = useSelector(
    (state) => state.combineReducers.authSlice.phoneNumber
  );

  const onSuccessCreateCustomer = (res) => {
    console.log("phone created successfully ===>>", res);
    sendCodeMutation({ id_Source: 1, in_Phone: phoneNumber, vc_Type: "OTP" });
  };

  const onErrorCreateCustomer = (err) => {
    console.log("error phone creation ==>>", err);
  };

  const onSuccessSendCode = (res) => {
    console.log("otp sent successfully ===>>", res);
    navigation.navigate("VerificationCode");
  };

  const onErrorSendCode = (err) => {
    console.log("error sending otp ==>>", err);
  };
  //4421143497
  //8110406680
  //mike@goldman.com
  const { mutate, isLoading } = mutationHandler(
    API.createCustomer,
    onSuccessCreateCustomer,
    onErrorCreateCustomer
  );

  const { mutate: sendCodeMutation, isLoading: loading } = mutationHandler(
    API.send_code,
    onSuccessSendCode,
    onErrorSendCode
  );

  const loginHandler = async (values) => {
    console.log(values);
    dispatch(setPhoneNumber(values.PhoneNumber))
    mutate({ Steps: 1, in_Phone: values.PhoneNumber, vc_Email: values.EmailAddress });
  };
  //phoneNumber=> +524421143497
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={styles.wrapWidth}
        >
          <Formik
            initialValues={{
              PhoneNumber: "",
              EmailAddress: "",
            }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              loginHandler(values);
            }}
          >
            {(props) => (
              <>
                <View style={styles.top}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather
                      name="arrow-left"
                      color={AppColors.primaryColor.darkBlack}
                      size={AppIcons.commonIcons.medium}
                    />
                  </TouchableOpacity>

                  <Text style={styles.txtEmpecemos}>Empecemos</Text>
                  <Text style={styles.txtDesc}>
                    Ingresa tu número celular. Te enviaremos un código de
                    confirmación
                  </Text>

                  <PhoneNumberField
                    label="Número celular"
                    value={props.values.PhoneNumber}
                    onChangeText={props.handleChange("PhoneNumber")}
                    errorMessage={props.errors.PhoneNumber}
                  />

                  <InputField
                    label="Correo electrónico"
                    value={props.values.EmailAddress}
                    onChangeText={props.handleChange("EmailAddress")}
                    errorMessage={props.errors.EmailAddress}
                  />

                  <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.txtTienes}>
                      ¿Ya tienes una cuenta? Inicia sesión
                    </Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.bottom}>
                  <Buttons
                    menuBtn
                    label="Continuar"
                    txtColor={AppColors.primaryColor.darkWhite}
                    bgColor={AppColors.secondaryColor.lightBlue}
                    onPress={props.handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>
          <LoaderModal visible={isLoading || loading} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
