import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import {
  AppColors,
  AppIcons,
  Entypo,
  normalized,
  AntDesign,
} from "../../../utils/AppConstants";
import { images } from "../../../assets/images";
import Buttons from "../../../components/buttons/Buttons";
import MetaMensualModal from "../../../components/modals/MetaMensualModal";
import MenuModal from "../../../components/modals/MenuModal";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import { useSelector } from "react-redux";
import { API } from "../../../services/api";
import LoaderModal from "../../../components/modals/LoaderModal";
import moment from "moment";
import { ScrollView } from 'react-native-virtualized-view';

export const Home1 = (props) => {

  const { navigation } = props;

  const [modalLoad, setModalLoad] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [modalLoadUpdate, setModalLoadUpdate] = useState(false);
  const [priceMensual, setPriceMensual] = useState(0);
  const [otros, setOtros] = useState(false);
  const [response, setResponse] = useState([]);

  const phoneNumber = useSelector(state => state.combineReducers.authSlice.phoneNumber)

  const onSuccess = (res) => {
    console.log("invest screen response ===>>", res);
    if (res?.Mensaje) {
      setResponse(res?.Mensaje)
    }

  }

  const onError = (err) => {
    console.log("invest screen error ==>>", err);
  }

  const { mutate, isLoading } = mutationHandler(API.transactionHistory, onSuccess, onError);

  useEffect(() => {
    mutate({ "in_Phone": phoneNumber });
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.setWidth} showsVerticalScrollIndicator={false}>
        <View style={styles.flexRow}>
          <AntDesign
            name="arrowleft"
            size={AppIcons.commonIcons.medium}
            color={AppColors.primaryColor.darkBlack}
            style={styles.iconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.txtHome}>Home</Text>
          <Text>{"      "}</Text>
        </View>
        <View style={styles.wrapImg}>
          <Image
            resizeMode="contain"
            source={images.imgProfile}
            style={styles.innerImg}
          />
        </View>
        <View style={styles.flexRow}>
          <View style={styles.wrapBalnce}>
            <Text style={styles.txtPrice}>$15</Text>
            <Text style={styles.txtBalance}>Participacion activa</Text>
          </View>
          <View style={styles.wrapBalnce}>
            <Text style={styles.txtPrice}>$0</Text>
            <Text style={styles.txtBalance}>Rewards disponible</Text>
          </View>
        </View>

        <Text style={{ ...styles.txtMuCu, marginTop: normalized.hp("2%") }}>
          Mis abonos
        </Text>
        <FlatList
          data={response}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text>Datos no disponibles</Text>}
          renderItem={({ item }) => (
            <View style={styles.wrapBox}>
              <View style={styles.flexRow1}>
                <Text style={styles.txtDate}>{moment(item.Date).format('DD/MM/YYYY')}</Text>
                <Text style={styles.txtDate1}>04/08/24</Text>
              </View>
              <View style={{ ...styles.flexRow1, marginTop: normalized.hp("2%") }}>
                <View style={styles.wrapImg1}>
                  <Image
                    resizeMode="contain"
                    source={images.appIcon}
                    style={styles.innerImg}
                  />
                </View>
                <Text style={styles.txtDate2}>{item.Amount}</Text>
              </View>
            </View>
          )}
        />
        <Text style={{ ...styles.txtMuCu, marginTop: normalized.hp("2%") }}>
          Mis abonos cobrados
        </Text>
        <View style={styles.wrapBox}>
          <View style={styles.flexRow1}>
            <Text style={styles.txtDate}>No aplica</Text>
            <Text style={styles.txtDate1}>No aplica</Text>
          </View>
          <View style={{ ...styles.flexRow1, marginTop: normalized.hp("2%") }}>
            <View style={styles.wrapImg1}>
              <Image
                resizeMode="contain"
                source={images.appIcon}
                style={styles.innerImg}
              />
            </View>
            <Text style={styles.txtDate2}>$0</Text>
          </View>
        </View>
      </ScrollView>
      <LoaderModal visible={isLoading} />
    </SafeAreaView>
  );
};
