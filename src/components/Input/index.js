import React from "react";
import { StyleSheet, TextInput } from "react-native";
import theme from "../../utils/theme";

const Input = ({ value, onChangeText, placeholder, secureTextEntry }: any) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      value={value}
      placeholder={placeholder}
      style={styles._input}
      onChangeText={(e) => onChangeText && onChangeText(e)}
    />
  );
};

const styles = StyleSheet.create({
  _input: {
    backgroundColor: theme.greyLight,
    height: 59,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 14,
    borderRadius: 8,
    // fontFamily: theme.medium,
    fontSize: 16,
    elevation: 1,
  },
});

export default Input;
