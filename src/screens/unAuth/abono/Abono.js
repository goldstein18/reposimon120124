import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import styles from "./styles";
import { AppColors, normalized, AppFonts } from "../../../utils/AppConstants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Buttons from "../../../components/buttons/Buttons";
export const Abono = (props) => {
  const { navigation } = props;
  const [modalLoad, setModalLoad] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapTop}>
            <Text style={styles.txtTransferencia}>Abono</Text>
            <Text style={styles.txtSaldo}>Abono exitoso</Text>
            <Text
              style={{
                ...styles.txtTransferencia,
                marginTop: normalized.hp("1%"),
                fontSize: AppFonts.commonFont.small,
              }}
            >
              31 Julio 2023, 10:00 AM
            </Text>
          </View>
          <View style={styles.wrapMiddle}>
            <View>
              <TextInput
                placeholder="$15.00"
                placeholderTextColor={AppColors.primaryColor.darkWhite}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                style={styles.txtInp}
                maxLength={7}
              />
            </View>
            <Text style={styles.txtDf}>DF, Av. Santa Fe 55</Text>
          </View>
          <View style={styles.wrapEnd}>
            <Buttons
              menuBtn
              marginTop={normalized.hp("3%")}
              label="Salir"
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.secondaryColor.lightBlue}
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
