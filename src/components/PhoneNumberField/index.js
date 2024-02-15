import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppColors, AppFonts, normalized } from "../../utils/AppConstants";
import { InputField } from "../Input/InputField";

const PhoneNumberField = ({ label, value, onChangeText, errorMessage }) => {

  return (
    <View style={styles.container}>
      <View style={styles.countryCode}>
        <Text style={styles.code}>+52</Text>
      </View>

      <View style={{ flex: 1 }}>
        <InputField
          keyboardType='number-pad'
          label={label}
          value={value}
          onChangeText={onChangeText}
          errorMessage={errorMessage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 40,
  },
  countryCode: {
    backgroundColor: AppColors.secondaryColor.lightGrey,
    height: normalized.hp("7%"),
    borderRadius: 5,
    paddingHorizontal: normalized.wp("5%"),
    alignItems: 'center',
    justifyContent: "center",
    marginRight: 20,
    marginTop: 8
  },
  code: {
    color: AppColors.primaryColor.Black,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
  },
});

export default PhoneNumberField;
