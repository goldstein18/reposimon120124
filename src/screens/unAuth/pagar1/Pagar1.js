import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, ImageBackground } from "react-native";
import styles from "./styles";
import {
  AppColors,
  AppIcons,
  normalized,
  AntDesign,
} from "../../../utils/AppConstants";
import { images } from "../../../assets/images";

export const Pagar1 = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <View style={styles.flexRow}>
          <AntDesign
            name="arrowleft"
            size={AppIcons.commonIcons.medium}
            color={AppColors.primaryColor.darkBlack}
            style={styles.iconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.txtHome}>Abonar</Text>
          <Text>{"      "}</Text>
        </View>
        <ImageBackground
          source={images.card}
          resizeMode="contain"
          style={styles.imgBg}
        >
          <View style={styles.wrapTxT}>
            <Text style={{ ...styles.txtNum, marginTop: normalized.hp("10%") }}>
              442 114 3497
            </Text>
            <Text style={{ ...styles.txtNum, marginTop: normalized.hp("2%") }}>
              Simon Tech
            </Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
