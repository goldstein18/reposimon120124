import React, { useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
} from "react-native";
import styles from "./styles";
import {
  Entypo,
  AppColors,
  AppIcons,
  normalized,
  AppFonts,
} from "../../../utils/AppConstants";
import CommonModal from "../../../components/modals/CommonModal";
import Buttons from "../../../components/buttons/Buttons";
export const Transferencia2 = (props) => {
  const inputRef = useRef(null);
  const { navigation } = props;
  const [modalLoad, setModalLoad] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  // Function to handle button press
  const handleButtonPress = (value) => {
    if (value === "backspace") {
      // Handle backspace button
      setPhoneNumber(phoneNumber.slice(0, -1));
    } else {
      setPhoneNumber(phoneNumber + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <View style={styles.wrapTop}>
          <Text style={styles.txtTransferencia}>Transferencia</Text>
          <Text style={styles.txtSaldo}>Saldo disponible: $available</Text>
          <Text style={styles.txtCantidad}>Cantidad</Text>

          <TextInput
            ref={inputRef}
            placeholder="$number"
            placeholderTextColor={AppColors.primaryColor.darkWhite}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={styles.txtInp}
          />
        </View>
        <View style={styles.wrapMiddle}>
          <View style={styles.wrapNumber}>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("1")}
            >
              <Text style={styles.txtNum}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("2")}
            >
              <Text style={styles.txtNum}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("3")}
            >
              <Text style={styles.txtNum}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapNumber}>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("4")}
            >
              <Text style={styles.txtNum}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("5")}
            >
              <Text style={styles.txtNum}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("6")}
            >
              <Text style={styles.txtNum}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapNumber}>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("4")}
            >
              <Text style={styles.txtNum}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("5")}
            >
              <Text style={styles.txtNum}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("6")}
            >
              <Text style={styles.txtNum}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapNumber}>
            <TouchableOpacity style={styles.wrapIndNumber}>
              <Entypo
                name="chevron-left"
                color={AppColors.primaryColor.skyBlue}
                size={AppIcons.commonIcons.large}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              onPress={() => handleButtonPress("0")}
            >
              <Text style={styles.txtNum}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapIndNumber}
              // onPress={() => navigation.goBack()}
              onPress={() => handleButtonPress("backspace")}
            >
              <Entypo
                name="chevron-left"
                color={AppColors.primaryColor.darkWhite}
                size={AppIcons.commonIcons.large}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapEnd}>
          <Buttons
            menuBtn
            marginTop={normalized.hp("4%")}
            label="Hacer transferencia"
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.secondaryColor.lightBlue}
            onPress={() => setModalLoad(true)}
          />
        </View>
      </View>
      {modalLoad && (
        <>
          <CommonModal
            isVisible={modalLoad}
            title={"Confirmar transferencia"}
            label={"¿Estas seguro que quieres hacer esta transferencia"}
            onCancelarPress={() => setModalLoad(false)}
            // onTransferirPress={() => setModalLoad(false)}
            onTransferirPress={() => {
              setModalLoad(false);
              navigation.navigate("Abono");
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};
