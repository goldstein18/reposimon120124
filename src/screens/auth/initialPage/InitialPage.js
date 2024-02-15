import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Buttons from "../../../components/buttons/Buttons";
import { AppColors } from "../../../utils/AppConstants";

export const InitialPage = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeight} />
      <View style={styles.middleHeight}>
        <Text style={styles.txtName}>CENT</Text>
      </View>
      <View style={styles.bottomHeight}>
        <View style={styles.flexRow}>
          <Buttons
            initialMedBtn
            label="Iniciar sesión"
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack1}
            onPress={() => navigation.navigate("Login")}
          />
          <Buttons
            initialMedBtn
            label="Crear cuenta"
            txtColor={AppColors.primaryColor.lightBlack1}
            bgColor={AppColors.primaryColor.darkWhite}
            onPress={() => navigation.navigate("LetUsBegin")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
