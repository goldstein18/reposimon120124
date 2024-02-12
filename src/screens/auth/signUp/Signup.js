// @ts-check
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
} from "react-native";
import { CountryCodePicker, Button } from "../../../components";
import theme from "../../../utils/theme";
import { useKeyboard } from "../../../hooks/KeyboardAware";

export const Signup = (props) => {
  const { navigation } = props;
  const numberHandleChange = (_num) => {
    console.log(_num);
  };

  const keyboardHeight = useKeyboard();
  console.log({ keyboardHeight });
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles._container}>
        <View style={styles._body}>
          <Text style={styles._heading}>Empecemos</Text>
          <Text style={styles._desc}>
            Ingresa tu número celular. Te enviaremos un código de confirmación
          </Text>
          <CountryCodePicker
            onTextChange={(_num) => numberHandleChange(_num)}
          />
          <Text style={styles._bottom_text}>
            ¿Ya tienes una cuenta? Inicia sesión
          </Text>
        </View>
        <View
          style={{
            ...styles._btn_section,
            marginBottom: Platform.OS === "ios" ? keyboardHeight + 10 : 0,
          }}
        >
          <Button
            title={"Crear cuenta"}
            onPress={() => navigation.navigate("VerificationCode")}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 15,
    paddingTop: 0,
  },
  _body: {
    flex: 1,
  },
  _heading: {
    // fontFamily: theme.bold,
    fontSize: 17,
  },
  _desc: {
    // fontFamily: theme.medium,
    marginTop: 15,
    color: theme.grey,
    fontSize: 16,
  },
  _bottom_text: {
    // fontFamily: theme.medium,
    color: theme.primary,
  },
  _btn_section: {
    marginHorizontal: 10,
  },
});
