import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";
import { images } from "../../../assets/images";
import {
  Feather,
  AppColors,
  AppIcons,
  normalized,
} from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
export const EstadoDeCuenta = (props) => {
  const { navigation } = props;

  const [isPdf, setIsPdf] = useState(true);
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
          <Text style={styles.txtAdministra}>Estado de cuenta</Text>
        </View>
        <View style={styles.wrapMiddle}>
          {isPdf ? (
            <>
              <View style={styles.flewRow}>
                <View style={styles.wrapPdf}>
                  <Text styl={styles.txtPdf}>PDF</Text>
                </View>
                <TouchableOpacity
                  style={styles.wrapExcel}
                  onPress={() => setIsPdf(!isPdf)}
                >
                  <Text styl={styles.txtPdf}>Excel</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={styles.flewRow}>
                <TouchableOpacity
                  style={styles.wrapPdf1}
                  onPress={() => setIsPdf(!isPdf)}
                >
                  <Text styl={styles.txtPdf}>PDF</Text>
                </TouchableOpacity>
                <View style={styles.wrapExcel1}>
                  <Text styl={styles.txtPdf}>Excel</Text>
                </View>
              </View>
            </>
          )}
          <View style={styles.wrapBox}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.txtEmpezando}>Empezando el</Text>
              <Text style={styles.txtEmpezando}>Terminando el</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.wrapDate}>
                <Text style={styles.txtJuly}>July 2023</Text>
                <View style={styles.wrapAug}>
                  <Text style={styles.txtAugest}>August 2023</Text>
                </View>
              </View>

              <View style={styles.wrapDate}>
                <Text style={styles.txtJuly}>July 2023</Text>
                <View style={styles.wrapAug}>
                  <Text style={styles.txtAugest}>August 2023</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.wrapEnd}>
          <Buttons
            menuBtn
            marginTop={normalized.hp("4%")}
            label="Generar"
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.secondaryColor.lightBlue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
