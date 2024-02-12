import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Feather,
  AppColors,
  AppIcons,
  normalized,
} from "../../../utils/AppConstants";
import styles from "./styles";
import Buttons from "../../../components/buttons/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { Formik } from "formik";
import { InputField } from "../../../components/Input/InputField";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import { API } from "../../../services/api";
import LoaderModal from "../../../components/modals/LoaderModal";

const reviewSchema = yup.object({
  CLABE: yup
    .string()
    .min(18, 'CLABE debe tener 18 caracteres')
    .required('Campo requerido'),
  confirm_CLABE: yup
    .string()
    .oneOf([yup.ref('CLABE'), null], 'CLABE debe coincidir')
    .required(''),
});

export const Registra = (props) => {

  const { navigation } = props;
  const phoneNumber = useSelector(state => state.combineReducers.authSlice.phoneNumber)

  const onSuccess = (res) => {
    console.log("registra screen response ===>>", res);
    navigation.navigate("Codigo")
  }

  const onError = (err) => {
    console.log("registra screen error ==>>", err);
  }

  const { mutate, isLoading } = mutationHandler(API.customerClabe, onSuccess, onError);

  const loginHandler = (values) => {
    console.log('values ===>>', values);
    mutate({ "in_Phone": phoneNumber, "vc_Clabe": values.CLABE })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          CLABE: "",
          confirm_CLABE: "",
        }}
        validationSchema={reviewSchema} //check validation
        onSubmit={(values, actions) => {
          loginHandler(values);
        }}
      >
        {(props) => (
          <View style={styles.setWidth}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.topHeight}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Feather
                    name="arrow-left"
                    color={AppColors.primaryColor.darkBlack}
                    size={AppIcons.commonIcons.medium}
                  />
                </TouchableOpacity>
                <Text style={styles.txtAdministra}>Registra tu cuenta CLABE</Text>
                <Text style={styles.txtElige}>
                  Este registro de CLABE puede tradar un tiempo considerable. Una
                  vez registrando tu CLABE podras transferir rapido
                </Text>
                <InputField
                  label="Pega aqui tu CLABE (18 digitos)"
                  style={{ marginTop: normalized.hp("10%") }}
                  value={props.values.CLABE}
                  onChangeText={props.handleChange("CLABE")}
                  errorMessage={props.errors.CLABE}
                />
                <InputField
                  label="Confirma aqui tu CLABE (18 digitos)"
                  style={{ marginTop: normalized.hp("2%") }}
                  value={props.values.confirm_CLABE}
                  onChangeText={props.handleChange("confirm_CLABE")}
                  errorMessage={props.errors.confirm_CLABE}
                />
              </View>
              <View style={styles.middleHeight} />
              <View style={styles.bottomHeight}>
                <Buttons
                  largeBtn
                  label={"Confirmar registro"}
                  txtColor={AppColors.primaryColor.darkWhite}
                  bgColor={AppColors.primaryColor.lightBlack}
                  onPress={props.handleSubmit}
                />
              </View>
            </KeyboardAwareScrollView>
          </View>
        )}
      </Formik>
      <LoaderModal visible={isLoading} />
    </SafeAreaView>
  );
};
