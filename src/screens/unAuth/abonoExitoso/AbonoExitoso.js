import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import { AppColors, normalized, AppFonts } from "../../../utils/AppConstants";
import MultiSelect from "react-native-multiple-select";
import Buttons from "../../../components/buttons/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export const AbonoExitoso = (props) => {
  const { navigation } = props;
  const multiSelectRef = useRef();
  const [items] = useState([
    {
      id: "92iijs7yta",
      name: "1 mes",
    },
    {
      id: "a0s0a8ssbsd",
      name: "3 meses",
    },
    {
      id: "16hbajsabsd",
      name: "6 meses",
    },
    {
      id: "16hbajsabsd",
      name: "12 meses",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.wrapTop}>
        <View style={styles.setWidth}>
          <Text style={styles.txtAbono}>Abono</Text>
          <Text style={styles.txtAbonoExitoso}>Abono exitoso</Text>
          <Text style={styles.txtDate}>31 Julio 2023, 10:00 AM</Text>
          <Text style={styles.txtPrice}>$15.00</Text>
          <Text style={styles.txtDf}>DF, Av. Santa Fe 55</Text>
        </View>
      </View>
      <View style={styles.wrapMiddle}>
        <View style={styles.setWidth}>
          <Text style={styles.txtCongela}>Congela tus rewards</Text>
          <Text style={styles.txtElige}>
            Elige por cuanto tiempo quieres crecer tus rewards
          </Text>
          <View
            style={{
              marginTop: normalized.hp("2%"),
            }}
          >
            <MultiSelect
              styleDropdownMenuSubsection={{
                backgroundColor: AppColors.secondaryColor.lightGrey,
              }}
              hideDropdown
              hideTags
              items={items}
              uniqueKey="id"
              ref={multiSelectRef}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Seleccionar artículos"
              searchInputPlaceholderText="Elige tu plazo de congelamiento"
              onChangeInput={(text) => console.log(text)}
              // altFontFamily="ProximaNova-Light"
              hideSubmitButton
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor={AppColors.secondaryColor.lightBlue}
              selectedItemIconColor="#CCC"
              itemTextColor={AppColors.primaryColor.darkBlack}
              displayKey="name"
              searchInputStyle={{
                color: AppColors.primaryColor.darkBlack,
                fontSize: AppFonts.commonFont.small,
                height: normalized.hp("5%"),
              }}
              itemFontSize={AppFonts.commonFont.small}
              styleInputGroup={{
                backgroundColor: AppColors.secondaryColor.lightGrey,
              }}
              styleItemsContainer={{
                backgroundColor: AppColors.secondaryColor.lightGrey,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.wrapEnd}>
        <View style={styles.setWidth}>
          <Buttons
            menuBtn
            marginTop={normalized.hp("4%")}
            label="Confirmar"
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.secondaryColor.lightBlue}
            onPress={() => navigation.navigate("Abono")}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
