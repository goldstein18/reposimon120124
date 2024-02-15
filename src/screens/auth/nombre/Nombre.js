import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Buttons from "../../../components/buttons/Buttons";
import styles from "./styles";
import {
  Feather,
  AppColors,
  AppIcons,
  normalized,
} from "../../../utils/AppConstants";
import { InputField } from "../../../components/Input/InputField";
import * as yup from 'yup';
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import LoaderModal from "../../../components/modals/LoaderModal";
import { API } from "../../../services/api";
import { setName } from "../../../redux/slices/authSlice";

const reviewSchema = yup.object({
  name: yup
    .string()
    .min(0, 'Entrada mínima')
    .required('campo requerido')
    .max(30, 'Límite excedido'),
  surname: yup
    .string()
    .min(0, 'Entrada mínima')
    .required('campo requerido')
    .max(30, 'Límite excedido'),
  secondSurname: yup
    .string()
    .min(0, 'Entrada mínima')
    .required('campo requerido')
    .max(30, 'Límite excedido'),
})

export const Nombre = (props) => {

  const { navigation } = props;

  const phoneNumber = useSelector(state => state.combineReducers.authSlice.phoneNumber)
  const dispatch = useDispatch()

  const onSuccess = (res) => {
    console.log('name created successfully ===>>', res);
    navigation.navigate("UserDate")
  }

  const onError = (err) => {
    console.log('error name creation ==>>', err);
  }

  const { mutate, isLoading } = mutationHandler(API.createCustomer, onSuccess, onError);

  const proceedNext = (values) => {
    dispatch(setName(values.name))
    mutate({
      "Steps": 2,
      "in_Phone": phoneNumber,
      "vc_Name": `${values.name} ${values.surname} ${values.secondSurname}`
    })
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={styles.wrapWidth}>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              secondSurname: ''
            }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              proceedNext(values);
            }}
          >
            {props => (
              <>
                <View style={styles.top}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather
                      name="arrow-left"
                      color={AppColors.primaryColor.darkBlack}
                      size={AppIcons.commonIcons.medium}
                    />
                  </TouchableOpacity>

                  <Text style={styles.txtEmpecemos}>Nombre tal cual tu </Text>
                  <Text style={styles.txtDesc}>
                    Nombre tal cual está en tus identificaciones oficiales
                  </Text>

                  <InputField
                    label='Nombre'
                    value={props.values.name}
                    onChangeText={props.handleChange('name')}
                    style={{
                      marginTop: normalized.hp("5%"),
                    }}
                    errorMessage={props.errors.name}
                  />

                  <InputField
                    label='Primer apellido'
                    value={props.values.surname}
                    onChangeText={props.handleChange('surname')}
                    style={{
                      marginTop: normalized.hp("3%"),
                    }}
                    errorMessage={props.errors.surname}
                  />

                  <InputField
                    label='Segundo apellido'
                    value={props.values.secondSurname}
                    onChangeText={props.handleChange('secondSurname')}
                    style={{
                      marginTop: normalized.hp("3%"),
                    }}
                    errorMessage={props.errors.secondSurname}
                  />

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
          <LoaderModal visible={isLoading} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
