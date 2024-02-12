import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { images } from "../../../assets/images";
import FlatLists from "../../../components/flatLists/FlatLists";
import { Feather, AppColors, AppIcons } from "../../../utils/AppConstants";
export const Document = (props) => {
  const { navigation } = props;
  const [dataFl] = useState([
    {
      name: "Documentos",
      img: images.article,
    },
    {
      name: "Documentos",
      img: images.article,
    },

    {
      name: "Documentos",
      img: images.article,
    },
    {
      name: "Documentos",
      img: images.article,
    },

    {
      name: "Documentos",
      img: images.article,
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
          <Text style={styles.txtAdministra}>Documentos</Text>
        </View>
        <View style={styles.wrapMiddle}>
          <View style={styles.wrapFL}>
            <FlatLists documents data={dataFl} navigation={navigation} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
