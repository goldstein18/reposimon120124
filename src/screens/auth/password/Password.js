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
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  AppColors,
  AppFonts,
  AppIcons,
  normalized,
} from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import { InputField } from "../../../components/Input/InputField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import LoaderModal from "../../../components/modals/LoaderModal";
import { API } from "../../../services/api";
import { TextInput } from 'react-native-paper';

export const Password = (props) => {
  const { navigation } = props;

  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repasswordError, setRepasswordError] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepassword, setHideRepassword] = useState(true);

  const phoneNumber = useSelector(
    (state) => state.combineReducers.authSlice.phoneNumber
  );

  const onSuccess = (res) => {
    console.log("password created successfully ===>>", res);
    navigation.navigate("Necesitamos");
  }

  const onError = (err) => {
    console.log("error password creation ==>>", err);
  }

  const { mutate, isLoading } = mutationHandler(API.createPassword, onSuccess, onError);

  const hasCapitalLetter = () => {
    return /[A-Z]/.test(password);
  };

  const containsNumber = () => {
    // Define a regular expression pattern to match a digit
    let regex = /\d/;
    // Use the test() method to check if the pattern is found in the password
    return regex.test(password);
  };

  const createPassword = () => {
    if (password === "") {
      setPasswordError("campo requerido");
    }

    if (repassword === "") {
      setRepasswordError("campo requerido");
    }

    if (repassword != password) {
      setRepasswordError("las contraseñas no coinciden");
    }

    if (
      hasCapitalLetter() &&
      password.length >= 8 &&
      containsNumber() &&
      repassword === password
    ) {
      mutate({ Movimiento: 0, in_Phone: phoneNumber, vc_Password: password });
    }
  };

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
            <Text style={styles.txtEmpecemos}>Crea una contraseña</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              <InputField
                label="Contraseña"
                secureTextEntry={hidePassword}
                eyeIcon={<TextInput.Icon
                  icon={hidePassword ? "eye" : "eye-off"}
                  forceTextInputFocus={false}
                  onPress={() => setHidePassword(!hidePassword)}
                />}
                value={password}
                onChangeText={(pass) => {
                  setPasswordError("");
                  setpassword(pass);
                }}
                style={{
                  marginTop: normalized.hp("5%"),
                }}
                errorMessage={passwordError}
              />

              <InputField
                label="Repite la contraseña"
                secureTextEntry={hideRepassword}
                eyeIcon={<TextInput.Icon
                  icon={hideRepassword ? "eye" : "eye-off"}
                  forceTextInputFocus={false}
                  onPress={() => setHideRepassword(!hideRepassword)}
                />}
                value={repassword}
                onChangeText={(pass) => {
                  setRepasswordError("");
                  setrepassword(pass);
                }}
                style={{
                  marginTop: normalized.hp("3%"),
                }}
                errorMessage={repasswordError}
              />

              {/* </View> */}
              <View style={styles._checkbox_row}>
                <View
                  style={[
                    styles._checkbox,
                    {
                      borderColor: hasCapitalLetter()
                        ? theme.primary
                        : theme.greyLight,
                    },
                  ]}
                >
                  {hasCapitalLetter() && (
                    <Ionicons
                      name="checkmark-sharp"
                      size={15}
                      color={theme.primary}
                    />
                  )}
                </View>
                <Text style={styles._checkbox_text}>
                  Incluye una letra mayúscula
                </Text>
              </View>

              <View style={styles._checkbox_row}>
                <View
                  style={[
                    styles._checkbox,
                    {
                      borderColor:
                        password.length >= 8 ? theme.primary : theme.greyLight,
                    },
                  ]}
                >
                  {password.length >= 8 && (
                    <Ionicons
                      name="checkmark-sharp"
                      size={15}
                      color={theme.primary}
                    />
                  )}
                </View>
                <Text style={styles._checkbox_text}>Mínimo 8 caracteres</Text>
              </View>

              <View style={styles._checkbox_row}>
                <View
                  style={[
                    styles._checkbox,
                    {
                      borderColor: containsNumber()
                        ? theme.primary
                        : theme.greyLight,
                    },
                  ]}
                >
                  {containsNumber() && (
                    <Ionicons
                      name="checkmark-sharp"
                      size={15}
                      color={theme.primary}
                    />
                  )}
                </View>
                <Text style={styles._checkbox_text}>Incluye un número</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.bottom}>
            <Buttons
              menuBtn
              label="Continuar"
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.secondaryColor.lightBlue}
              onPress={createPassword}
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
  _btn_section: {
    marginHorizontal: 10,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
  },

  _checkbox_row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalized.hp("3%"),
  },
  _checkbox: {
    height: 25,
    width: 25,
    borderRadius: 8,
    elevation: 1,
    marginRight: 10,
    borderWidth: 1,
    backgroundColor: theme.greyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  _checkbox_text: {
    // fontFamily: theme.medium,
    fontSize: 16,
    color: theme.grey,
  },
  _input_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  _eye_section: {
    position: "absolute",
    right: 20,
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
});
