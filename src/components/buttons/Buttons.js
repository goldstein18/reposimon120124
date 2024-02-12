import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { AntDesign, AppIcons, normalized } from "../../utils/AppConstants";
const Button = (props) => {
  const {
    label,
    onPress,
    txtColor,
    bgColor,
    marginTop,
    largeBtn,
    menuBtn,
    btnMedium,
    iconName,
    initialMedBtn,
  } = props;

  return (
    <>
      {menuBtn ? (
        <>
          <TouchableOpacity
            onPress={onPress}
            style={{
              ...styles.largeBtnWrap,
              marginTop: marginTop,
              backgroundColor: bgColor,
            }}
          >
            <Text style={{ ...styles.txtTitle, color: txtColor }}>{label}</Text>
          </TouchableOpacity>
        </>
      ) : largeBtn ? (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.largeBtnWrap,
            marginTop: marginTop,
            backgroundColor: bgColor,
          }}
        >
          <Text style={{ ...styles.txtTitle, color: txtColor }}>{label}</Text>
        </TouchableOpacity>
      ) : btnMedium ? (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.mediumBtnWrap,
            marginTop: marginTop,
            backgroundColor: bgColor,
          }}
        >
          <Text style={{ ...styles.txtMedTitle, color: txtColor }}>
            {label}
          </Text>
          <AntDesign
            name={iconName}
            color={txtColor}
            size={AppIcons.commonIcons.small}
            style={{ left: normalized.wp("1%") }}
          />
        </TouchableOpacity>
      ) : initialMedBtn ? (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.initmediumBtnWrap,
            marginTop: marginTop,
            backgroundColor: bgColor,
          }}
        >
          <Text style={{ ...styles.txtInitMedTitle, color: txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};
export default Button;
