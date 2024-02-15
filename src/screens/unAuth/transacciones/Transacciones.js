import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./styles";
import FlatLists from "../../../components/flatLists/FlatLists";
import {
  Feather,
  AppColors,
  AppIcons,
  Entypo,
} from "../../../utils/AppConstants";
import Buttons from '../../../components/buttons/Buttons'

export const Transacciones = (props) => {
  const { navigation } = props;
  const [showModal, setShowModal] = useState(false)
  const [transHistoryFl] = useState([
    {
      name: "Abono realizado",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "+$100",
      credit: true,
    },
    {
      name: "Abono realizado",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "+$100",
      credit: true,
    },
    {
      name: "Pago realizado",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "-$100",
      debit: true,
    },
    {
      name: "Reward obtenido",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "+$43",
      credit: true,
    },
    {
      name: "Transacciones",
      date: "31 Julio 2023, 10:00 AM",
      address: "CENT",
      price: "-$100",
      debit: true,
    },
    {
      name: "Pago realizado",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "-$100",
      debit: true,
    },
    {
      name: "Reward obtenido",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "+$43",
      credit: true,
    },
    {
      name: "Transacciones",
      date: "31 Julio 2023, 10:00 AM",
      address: "CENT",
      price: "-$100",
      debit: true,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <View style={styles.wrapTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.txtAdministra}>Transacciones</Text>
          <Text>{"      "}</Text>
        </View>
        <View style={styles.wrapTop1}>
          <Text style={styles.txtAdministra1}>Historial de transacciones</Text>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Entypo
              name="dots-three-horizontal"
              color={AppColors.secondaryColor.lightBlack1}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapMiddle}>
          <View style={styles.wrapFL}>
            <FlatLists
              historyTrans
              data={transHistoryFl}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.wrapEnd} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
      >
        <View style={styles.backdrop}>

          <View style={styles.bottomSheet}>

            <View style={styles.actionContainer}>

              <Text style={styles.heading}>Historial de transacciones</Text>

              <Text style={styles.title}>Descarga el registro de tus transacciones</Text>

              <View style={styles.buttonContainer}>
                <Buttons
                  menuBtn
                  label="Continuar"
                  txtColor={AppColors.primaryColor.darkWhite}
                  bgColor={AppColors.secondaryColor.lightBlue}
                  onPress={() => setShowModal(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
