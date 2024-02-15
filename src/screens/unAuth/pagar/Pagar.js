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
import { useSelector } from "react-redux";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import { API } from "../../../services/api";
import LoaderModal from "../../../components/modals/LoaderModal";

export const Pagar = (props) => {

  const { navigation } = props;

  const [creditDetail, setCreditDetail] = useState()

  const phoneNumber = useSelector((state) => state.combineReducers.authSlice.phoneNumber);

  const onSuccess = (res) => {
    console.log("Pagar response ===>>", res);
    if (res?.Mensaje?.Status === 'Successful') {
      setCreditDetail(res?.Mensaje)
    }
  }

  const onError = (err) => {
    console.log("Pagar error ==>>", err);
  }

  const { mutate, isLoading } = mutationHandler(API.totalCredit, onSuccess, onError);

  useEffect(() => {
    mutate({ in_Phone: phoneNumber })
  }, [])

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
          <Text style={styles.txtHome}>Pagar</Text>
          <Text>{"      "}</Text>
        </View>
        <ImageBackground
          source={images.card}
          resizeMode="contain"
          style={styles.imgBg}
        >
          <View style={styles.wrapTxT}>
            <Text style={styles.txtPrice}>${creditDetail?.Saldo ? creditDetail?.Saldo : '0'}</Text>
            <Text style={{ ...styles.txtNum, marginTop: normalized.hp("5%") }}>
              442 114 3497
            </Text>
            <Text style={{ ...styles.txtNum, marginTop: normalized.hp("2%") }}>
              {creditDetail?.Name}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <LoaderModal visible={isLoading} />
    </SafeAreaView>
  );
};
