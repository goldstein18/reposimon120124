import React, { useState, useRef } from "react";
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
export const Codigo = (props) => {
  const { navigation } = props;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Initialize an array to hold OTP digits
  const inputRefs = useRef([]);
  // Function to handle text input changes and move focus
  const handleInputChange = (text, index) => {
    otp[index] = text;
    setOtp([...otp]);

    // Move focus to the next input field (if available)
    if (text !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  // Function to handle backspace and move focus to the previous input
  const handleBackspace = (index) => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.txtAdministra}>Codigo de 6 digitos</Text>
            <Text style={styles.txtElige}>
              Se envio un codigo al +52 442 114 3497, para confirmar tu
              transferencia
            </Text>
            <View style={styles.flexRow}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.input}
                  value={digit}
                  onChangeText={(text) => handleInputChange(text, index)}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace") {
                      handleBackspace(index);
                    }
                  }}
                  ref={(input) => (inputRefs.current[index] = input)}
                  keyboardType="numeric"
                  maxLength={1}
                />
              ))}
            </View>
            <Text style={styles.txtVolver}>Volver a enviar codigo</Text>
            <Text style={styles.txtVolver}>Solicitar ayuda</Text>
          </View>
          <View style={styles.middleHeight} />
          <View style={styles.bottomHeight}>
            <Buttons
              largeBtn
              label={"Transferir"}
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.primaryColor.lightBlack}
              onPress={() => navigation.navigate("Transferencia2")}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
