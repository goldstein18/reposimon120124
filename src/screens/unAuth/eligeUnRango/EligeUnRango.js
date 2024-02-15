import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import {
  Feather,
  AppColors,
  AppIcons,
  normalized,
} from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import FlatLists from "../../../components/flatLists/FlatLists";
import DateTimePickerModal from "react-native-modal-datetime-picker";
export const EligeUnRango = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const { navigation } = props;

  const [eligeFlData, setEligeFl] = useState([
    {
      name: "Semana anterior",
      isActive: false,
    },
    {
      name: "Mes anterior",
      isActive: false,
    },
    {
      name: "Ano anterior",
      isActive: false,
    },
  ]);
  const toggleItem = (index) => {
    // Create a copy of the eligeFlData array
    const updatedData = [...eligeFlData];

    // Toggle the isActive property of the selected item
    updatedData[index].isActive = !updatedData[index].isActive;

    // Update the state with the modified array
    setEligeFl(updatedData);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapTop}>
        <View style={styles.setWidth}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.txtAdministra}>Elige un rango de fechas</Text>

          <View style={styles.wrapFl}>
            <FlatLists eligeFl data={eligeFlData} selectedVal={toggleItem} />
          </View>
        </View>
      </View>
      {/* <View style={styles.borderSty} /> */}
      <View style={styles.wrapMiddle}>
        <View style={styles.setWidth}>
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.txtFecha}>Fecha de inicio</Text>
            <Text style={styles.txtDate}>1 Abril 2023</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.txtFecha}>Fecha de fin</Text>
            <Text style={styles.txtDate}>1 Abril 2023</Text>
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.wrapEnd}>
        <View style={styles.setWidth}>
          <Buttons
            menuBtn
            marginTop={normalized.hp("4%")}
            label="Confirmar"
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.secondaryColor.lightBlue}
            // onPress={() => navigation.navigate("EstadoDeCuenta")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
