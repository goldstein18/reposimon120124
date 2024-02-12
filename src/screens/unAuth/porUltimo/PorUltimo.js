import React, { useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { images } from "../../../assets/images";

import {
  Feather,
  AppColors,
  AppIcons,
  AppFonts,
  normalized,
  MaterialCommunityIcons,
} from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import HelpModal from "../../../components/modals/HelpModal";
import MultiSelect from "react-native-multiple-select";
import theme from "../../../utils/theme";
import { SelectList } from "react-native-dropdown-select-list";

export const PorUltimo = (props) => {
  const { navigation } = props;
  const multiSelectRef = useRef();
  const [confirm, setConfirm] = useState(false);
  const [modalLoad, setModalLoad] = useState(false);
  const [items] = useState([
    {
      id: "92iijs7yta",
      name: "Ondo",
    },
    {
      id: "a0s0a8ssbsd",
      name: "Ogun",
    },
    {
      id: "16hbajsabsd",
      name: "Calabar",
    },
  ]);
  const [selectedItem, setSelectedItem] = useState();

  const planOptions = [
    { key: "1", value: "1 mes" },
    { key: "3", value: "3 meses" },
    { key: "6", value: "6 meses" },
    { key: "12", value: "12 meses" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.setWidth}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.txtAdministra}>
            Por último, elige tu Plazo de inversión predeterminado
          </Text>
          <Text style={styles.txtElige}>
            Elige por cuanto tiempo quieres crecer tus inversiones, de manera
            predeterminada
          </Text>

          <View
            style={{
              backgroundColor: theme.greyLight,
              borderRadius: 10,
              marginTop: normalized.hp("5%"),
            }}
          >
            <SelectList
              setSelected={setSelectedItem}
              data={planOptions}
              search={false}
              placeholder="Elige tu plazo de inversión"
              boxStyles={{
                backgroundColor: theme.greyLight,
                borderWidth: 0,
              }}
              inputStyles={{ color: AppColors.secondaryColor.placeHolderCol }}
              dropdownStyles={{
                backgroundColor: theme.greyLight,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                marginTop: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
            />
          </View>

          <Text style={styles.txtDoc}>Documentos</Text>
          <View style={styles.flexRow1}>
            <View style={styles.with20}>
              <View style={styles.wrapImg}>
                <Image
                  resizeMode="contain"
                  source={images.roundBox}
                  style={styles.innerImg}
                />
              </View>
            </View>
            <View style={styles.with80}>
              <Text style={styles.txtContrato}>Contrato de rewards</Text>
            </View>
          </View>
          <View style={styles.flexRow1}>
            <View style={styles.with20}>
              <View style={styles.wrapImg}>
                <Image
                  resizeMode="contain"
                  source={images.roundBox}
                  style={styles.innerImg}
                />
              </View>
            </View>
            <View style={styles.with80}>
              <Text style={styles.txtContrato}>Terminos y condiciones</Text>
            </View>
          </View>
          <View style={styles.flexRow2}>
            <View style={styles.with20a}>
              {confirm ? (
                <MaterialCommunityIcons
                  name="checkbox-marked"
                  size={AppIcons.commonIcons.large}
                  color={AppColors.primaryColor.lightBlack}
                  onPress={() => setConfirm(!confirm)}
                />
              ) : (
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={AppIcons.commonIcons.large}
                  color={"#f4f4fb"}
                  onPress={() => setConfirm(!confirm)}
                />
              )}
            </View>
            <View style={styles.with65}>
              <Text
                style={{
                  ...styles.txtContrato,
                  fontSize: AppFonts.commonFont.smallest,
                }}
              >
                Confirmo que he leido todos Ios document y doy mi consentimiento
                para preceder
              </Text>
            </View>
            <View style={styles.with15} />
          </View>
          <Buttons
            largeBtn
            label={"Continuar"}
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack}
            marginTop={normalized.hp("5%")}
            onPress={() => confirm && navigation.navigate("Participation")}
          />
        </View>
      </ScrollView>
      {modalLoad && (
        <>
          <HelpModal
            isVisible={modalLoad}
            title={"Plazo predetermindo de congelamiento"}
            label={
              "Al seleccionar esta casilla, el plazo que hayas elegido En el seleccionadoe anterior, sera el plazo en el que Automaticamente cada abono que hagas, se va a congelar."
            }
            onEnteradoPress={() => setModalLoad(false)}
          />
        </>
      )}
    </SafeAreaView>
  );
};
