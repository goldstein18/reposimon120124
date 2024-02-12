import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import theme from "../../../utils/theme";
import { AppColors, AppFonts, AppIcons, Feather, normalized } from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { InputField } from "../../../components/Input/InputField";
import { useSelector } from "react-redux";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import LoaderModal from "../../../components/modals/LoaderModal";
import { API } from "../../../services/api";

export const Direccion = (props) => {

  const { navigation } = props;

  const [postal, setpostal] = useState("");
  const [street, setStreet] = useState("");
  const [outdoor, setoutdoor] = useState("");
  const [interior, setinterior] = useState("");
  const [checked, setchecked] = useState(false);
  const [colonia, setcolonia] = useState("");
  const [state, setstate] = useState("");

  const { phoneNumber, name } = useSelector(state => state.combineReducers.authSlice)

  const onSuccess = (res) => {
    console.log('address added successfully ===>>', res);
    navigation.navigate("Password")
  }

  const onError = (err) => {
    console.log('error address detail ==>>', err);
  }

  const { mutate, isLoading } = mutationHandler(API.createCustomer, onSuccess, onError);

  const proceedNext = () => {
    mutate({
      Steps: 5,
      in_Phone: phoneNumber,
      vc_Street: street,
      vc_Number: "Number",
      vc_City: "City",
      in_Zip: postal,
      vc_Suburb: "sub",
      vc_State: state,
      // vc_Country: country?.name
      vc_Country: "Mexico"
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

            <Text style={styles.txtEmpecemos}>Dirección</Text>
            <Text style={styles.txtDesc}>
              Por ley, necesitamos tu dirección para abrir tu cuenta
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>

              <InputField
                label='Código postal'
                value={postal}
                onChangeText={setpostal}
                style={{
                  marginTop: normalized.hp("5%"),
                }}
              // errorMessage={props.errors.name}
              />

              <InputField
                label='Calle'
                value={street}
                onChangeText={setStreet}
                style={{
                  marginTop: normalized.hp("3%"),
                }}
              // errorMessage={props.errors.name}
              />

              <InputField
                label='Número exterior'
                value={outdoor}
                onChangeText={setoutdoor}
                style={{
                  marginTop: normalized.hp("3%"),
                }}
              // errorMessage={props.errors.name}
              />

              <View style={styles._row}>
                <View style={styles._field_row}>
                  <InputField
                    label='Numero interior'
                    value={interior}
                    onChangeText={setinterior}
                  // errorMessage={props.errors.name}
                  />
                </View>

                <View style={styles._checkbox_row}>
                  <TouchableOpacity
                    onPress={() => setchecked(!checked)}
                    style={[
                      styles._checkbox,
                      { borderColor: checked ? theme.primary : theme.greyLight },
                    ]}
                  ></TouchableOpacity>
                  <Text style={styles._checkbox_text}>Sin número</Text>
                </View>
              </View>

              <InputField
                label='Colonia'
                value={colonia}
                onChangeText={setcolonia}
                style={{
                  marginTop: normalized.hp("3%"),
                }}
              // errorMessage={props.errors.name}
              />

              <InputField
                label='Estado'
                value={state}
                onChangeText={setstate}
                style={{
                  marginTop: normalized.hp("3%"),
                }}
              // errorMessage={props.errors.name}
              />

            </ScrollView>
            
          </View>

          <View style={styles.bottom}>
            <Buttons
              menuBtn
              label="Continuar"
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.secondaryColor.lightBlue}
              onPress={proceedNext}
            />
          </View>
          <LoaderModal visible={isLoading} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor.darkWhite,
  },
  wrapWidth: {
    flex: 1,
    width: normalized.wp("90%"),
    alignSelf: "center",
  },
  top: {
    height: normalized.hp("80%"),
    paddingBottom: normalized.hp('1%'),
  },
  txtEmpecemos: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "700",
    marginTop: normalized.hp("1%"),
  },
  txtDesc: {
    color: AppColors.primaryColor.darkGrey,
    marginTop: normalized.hp("1%"),
    fontSize: AppFonts.commonFont.small,
  },
  txtInp: {
    color: AppColors.primaryColor.lightBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    backgroundColor: AppColors.secondaryColor.lightGrey,
    height: normalized.hp("7%"),
    borderRadius: 10,
    paddingHorizontal: normalized.wp("5%"),
    justifyContent: "center",
    marginTop: normalized.hp("3%"),
  },
  bottom: {
    height: normalized.hp("10%"),
  },
  _btn_section: {
    marginHorizontal: 10,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalized.hp("3%"),
  },
  _field_row: {
    flex: 1,
  },
  _checkbox_row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // marginTop: normalized.hp("5%"),
  },
  _checkbox: {
    height: 25,
    width: 25,
    borderRadius: 8,
    elevation: 1,
    marginRight: 10,
    borderWidth: 1,
    backgroundColor: theme.greyLight,
  },
  _checkbox_text: {
    // fontFamily: theme.medium,
    fontSize: 16,
    color: theme.grey,
  },
});
