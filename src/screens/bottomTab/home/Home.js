import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {
  AppColors,
  AppIcons,
  Entypo,
  normalized,
} from "../../../utils/AppConstants";
import { images } from "../../../assets/images";
import Buttons from "../../../components/buttons/Buttons";
import MetaMensualModal from "../../../components/modals/MetaMensualModal";
import MenuModal from "../../../components/modals/MenuModal";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import { API } from "../../../services/api";
import { useSelector } from "react-redux";
import LoaderModal from "../../../components/modals/LoaderModal";
import ManualTimers from "../../../components/modals/ManualTimers";

export const Home = (props) => {

  const { navigation } = props;

  const [modalLoad, setModalLoad] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [modalLoadUpdate, setModalLoadUpdate] = useState(false);
  const [priceMensual, setPriceMensual] = useState('');
  const [otros, setOtros] = useState(false);
  const [response, setResponse] = useState({});

  const phoneNumber = useSelector(state => state.combineReducers.authSlice.phoneNumber)

  const onSuccessHome = (res) => {
    console.log("home response ===>>", res);
    if (res?.Mensaje) {
      setResponse(res?.Mensaje)
    }
  }

  const onErrorHome = (err) => {
    console.log("home error ==>>", err);
  }

  const { mutate, isLoading } = mutationHandler(API.homeApp, onSuccessHome, onErrorHome);

  const onSuccessGoal = (res) => {
    console.log("add goal response ===>>", res);
  }

  const onErrorGoal = (err) => {
    console.log("add goal error ==>>", err);
  }

  const { mutate: addGoalMutation, isLoading: isLoadingGoal } = mutationHandler(API.createCustomer, onSuccessGoal, onErrorGoal);

  useEffect(() => {
    mutate({ in_Phone: phoneNumber });
  }, [])

  const data = [
    {
      amount: '$15',
      time: '22:00'
    },
    {
      amount: '$15',
      time: '22:00'
    },
    // {
    //   amount: '$15',
    //   time: '22:00'
    // },
    // {
    //   amount: '$15',
    //   time: '22:00'
    // },
    // {
    //   amount: '$15',
    //   time: '22:00'
    // },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {priceMensual === '' ? (
          <View style={styles.setWidth}>
            <Text style={styles.txtHome}>Home</Text>
            <TouchableOpacity
              style={styles.wrapImg}
              onPress={() => navigation.navigate("FirstPage")}
            >
              <Image
                resizeMode="contain"
                source={images.imgProfile}
                style={styles.innerImg}
              />
            </TouchableOpacity>
            <View style={styles.wrapBalnce}>
              <Text style={styles.txtPrice}>$0</Text>
              <Text style={styles.txtBalance}>Balance total</Text>
            </View>
            <Entypo
              name="dots-three-horizontal"
              size={AppIcons.commonIcons.medium}
              color={AppColors.primaryColor.darkGrey}
              style={styles.iconStyle}
              onPress={() => setOtros(!otros)}
            />
            <View style={styles.flexRow}>
              <Buttons
                btnMedium
                label={"Meta mensual"}
                iconName={"plus"}
                txtColor={AppColors.primaryColor.darkGrey}
                onPress={() => setModalLoadUpdate(true)}
              />
              <Buttons
                btnMedium
                label={"Abonar"}
                iconName={"qrcode"}
                bgColor={AppColors.secondaryColor.lightBlue}
                txtColor={AppColors.primaryColor.darkWhite}
                onPress={() => setModalLoad(true)}
              />
            </View>
            {otros && (
              <>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Transferencia1")}
                >
                  <Text style={styles.txtRenovar}>
                    Renovar plazo de participacion
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Pagar")}
                >
                  <Text style={styles.txtRenovar}>Pagar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Registra")}
                >
                  <Text style={styles.txtRenovar}>Transferir</Text>
                </TouchableOpacity>
              </>
            )}
            <Text style={{ ...styles.txtMuCu, marginTop: normalized.hp("2%") }}>
              Mi Cuenta
            </Text>
            <View style={{ ...styles.flexRow, marginTop: normalized.hp("3%") }}>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>
                  Inversiones activas
                </Text>
                <Text style={styles.txtPrice}>{response?.Active_Reward ? `$${response?.Active_Reward}` : '$0'}</Text>
              </View>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Fondos disponibles</Text>
                <Text style={styles.txtPrice}>{response?.Available_Credit ? `$${response?.Available_Credit}` : '$0'}</Text>
              </View>
            </View>
            <View style={{ ...styles.flexRow, marginTop: normalized.hp("3%") }}>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Rendimientos</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.txtPrice}>{response?.Available_Reward ? `$${response?.Available_Reward}` : '$0'}</Text>
                  <Text style={styles.txtAnual}>(Taxs 6% anual)</Text>
                </View>
              </View>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Rendimientos obtenidos</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.txtPrice}>{response?.Reward_History && response?.Reward_History != '00.00' ? `$${response?.Reward_History}` : '$0'}</Text>
                  <Entypo
                    name="dots-three-horizontal"
                    size={AppIcons.commonIcons.medium}
                    color={AppColors.primaryColor.darkGrey}
                    style={styles.iconStyle}
                    onPress={() => setModalMenu(!modalMenu)}
                  />
                </View>
              </View>
            </View>
            <Buttons
              largeBtn
              label={"Ver transacciones"}
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.primaryColor.lightBlack}
              marginTop={normalized.hp("5%")}
              onPress={() => navigation.navigate("Transacciones")}
            />
          </View>
        ) : (
          <View style={styles.setWidth}>
            <Text style={styles.txtHome}>Home</Text>
            <View style={styles.wrapImg}>
              <Image
                resizeMode="contain"
                source={images.imgProfile}
                style={styles.innerImg}
              />
            </View>
            <View style={styles.wrapBalnce}>
              <Text style={styles.txtPrice}>$0</Text>
              <Text style={styles.txtBalance}>Balance total</Text>
            </View>
            <View style={styles.flexRow}>
              <View>
                <Text style={styles.txtMuCu}>Meta mensual</Text>
                <Text
                  style={{
                    ...styles.txtMuCu,
                    marginTop: normalized.hp(".5%"),
                  }}
                >
                  ${priceMensual}
                </Text>
              </View>
              <View>
                <Entypo
                  name="dots-three-horizontal"
                  size={AppIcons.commonIcons.medium}
                  color={AppColors.primaryColor.darkGrey}
                  // onPress={() => alert("hi")}
                  onPress={() => setModalLoadUpdate(true)}
                />
                <Text
                  style={{
                    ...styles.txtMuCu,
                    marginTop: normalized.hp("3%"),
                  }}
                >
                  $0
                </Text>
              </View>
            </View>
            <View style={styles.loadingBar} />
            <View style={styles.flexRow}>
              <Buttons
                btnMedium
                label={otros ? "Abonar" : "Meta mensual"}
                iconName={otros ? "qrcode" : "plus"}
                txtColor={AppColors.primaryColor.darkWhite}
                bgColor={otros && AppColors.secondaryColor.lightBlue}
                onPress={() => navigation.navigate("Pagar1")}
              // onPress={() => setModalLoadUpdate(true)}
              />
              <Buttons
                btnMedium
                label={"Otros"}
                iconName={otros ? "up" : "down"}
                bgColor={AppColors.secondaryColor.lightBlue}
                txtColor={AppColors.primaryColor.darkWhite}
                onPress={() => setOtros(!otros)}
              />
            </View>
            {otros && (
              <>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Transferencia1")}
                >
                  <Text style={styles.txtRenovar}>
                    Renovar plazo de participacion
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Pagar")}
                >
                  <Text style={styles.txtRenovar}>Pagar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Registra")}
                >
                  <Text style={styles.txtRenovar}>Transferir</Text>
                </TouchableOpacity>
              </>
            )}
            <Text style={{ ...styles.txtMuCu, marginTop: normalized.hp("2%") }}>
              Mi Cuenta
            </Text>
            <View style={{ ...styles.flexRow, marginTop: normalized.hp("2%") }}>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>
                  Participacion activa
                </Text>
                <Text style={styles.txtPrice}>$0</Text>
              </View>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Fondos disponibles</Text>
                <Text style={styles.txtPrice}>$0</Text>
              </View>
            </View>
            <View style={{ ...styles.flexRow, marginTop: normalized.hp("2%") }}>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Rewards disponible</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.txtPrice}>$0</Text>
                  <Text style={styles.txtAnual}>(Taxs 6% anual)</Text>
                </View>
              </View>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Rewards obtenidos</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.txtPrice}>$0</Text>
                  <Entypo
                    name="dots-three-horizontal"
                    size={AppIcons.commonIcons.medium}
                    color={AppColors.primaryColor.darkGrey}
                    style={styles.iconStyle}
                    onPress={() => setModalMenu(!modalMenu)}
                  />
                </View>
              </View>
            </View>
            <Buttons
              largeBtn
              label={"Ver transacciones"}
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.primaryColor.lightBlack}
              marginTop={normalized.hp("5%")}
              onPress={() => navigation.navigate("Transacciones")}
            />
          </View>
        )}
      </ScrollView>

      {modalLoad && (
        <>
          <MetaMensualModal
            isValue
            isVisible={modalLoad}
            title={"Elige tu meta mensual"}
            defaultValue={priceMensual}
            onEnteradoPress={(value) => {
              setPriceMensual(value);
              setModalLoad(false);
              addGoalMutation({
                Steps: 6,
                in_Phone: phoneNumber,
                dc_Goal: value
              })
            }}
          />
        </>
      )}
      {modalLoadUpdate && (
        <>
          <MetaMensualModal
            isUpdateValue
            isVisible={modalLoadUpdate}
            title={"Elige tu meta mensual"}
            defaultValue={priceMensual}
            onEnteradoPress={(value) => {
              setPriceMensual(value);
              setModalLoadUpdate(false);
              setOtros(true);
              addGoalMutation({
                Steps: 6,
                in_Phone: phoneNumber,
                dc_Goal: value
              })
            }}
          />
        </>
      )}
      {modalMenu && (
        <>
          <MenuModal
            isVisible={modalMenu}
            onPress={() => {
              setModalMenu(false);
            }}
          />
        </>
      )}
      {/* <ManualTimers
        visible={true}
        data={data}
      /> */}
      <LoaderModal visible={isLoading || isLoadingGoal} />
    </SafeAreaView>
  );
};
