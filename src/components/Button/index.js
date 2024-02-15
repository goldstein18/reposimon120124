import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../utils/theme";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles._btn} onPress={() => onPress && onPress()}>
      <Text style={styles._title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  _btn: {
    backgroundColor: theme.primary,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  _title: {
    color: theme.white,
    // fontFamily: theme.medium,
  },
});

export default Button;
