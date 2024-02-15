import React, { useEffect, useState } from "react";
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
  AntDesign,
} from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import HelpModal from "../../../components/modals/HelpModal";

export const Participation = (props) => {
  const { navigation } = props;
  const [confirm, setConfirm] = useState(false);
  const [predeterminado, setPredeterminado] = useState(false);
  const [manualmente, setManualmente] = useState(false);
  const [modalLoad, setModalLoad] = useState(false);

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
            Elige tu plazo de participacion
          </Text>
          <Text style={styles.txtElige}>
            Elige por cuanto tiempo quieres crecer tus rewards, de manera
            predeterminada
          </Text>
          <View style={styles.flexRow}>
            {predeterminado ? (
              <MaterialCommunityIcons
                name="checkbox-marked"
                size={AppIcons.commonIcons.large}
                color={AppColors.primaryColor.lightBlack}
                onPress={() => setPredeterminado(!predeterminado)}
              />
            ) : (
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={AppIcons.commonIcons.large}
                color={"#f4f4fb"}
                onPress={() => setPredeterminado(!predeterminado)}
              />
            )}
            <Text style={styles.txtElige1}>Elegir un plazo predeterminado</Text>
            <AntDesign
              name="exclamationcircleo"
              size={AppIcons.commonIcons.medium}
              color={AppColors.primaryColor.lightBlack}
              onPress={() => setModalLoad(!modalLoad)}
            />
          </View>
          <View style={styles.flexRow}>
            {manualmente ? (
              <MaterialCommunityIcons
                name="checkbox-marked"
                size={AppIcons.commonIcons.large}
                color={AppColors.primaryColor.lightBlack}
                onPress={() => setManualmente(!manualmente)}
              />
            ) : (
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={AppIcons.commonIcons.large}
                color={"#f4f4fb"}
                onPress={() => setManualmente(!manualmente)}
              />
            )}
            <Text style={styles.txtElige1}>Elegir manualmente cada vez</Text>
            <AntDesign
              name="exclamationcircleo"
              size={AppIcons.commonIcons.medium}
              color={AppColors.primaryColor.lightBlack}
              onPress={() => setModalLoad(!modalLoad)}
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
            label={"Crear cuenta"}
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack}
            marginTop={normalized.hp("5%")}
            onPress={() => navigation.navigate("bottomStack")}
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
