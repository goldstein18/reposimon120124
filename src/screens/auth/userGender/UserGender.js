import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "../../../components";
import theme from "../../../utils/theme";
import { SelectList } from "react-native-dropdown-select-list";
import { useKeyboard } from "../../../hooks/KeyboardAware";
import {
  AppColors,
  AppFonts,
  AppIcons,
  Feather,
  normalized,
} from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import { useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import LoaderModal from "../../../components/modals/LoaderModal";
import { API } from "../../../services/api";

export const UserGender = (props) => {
  const { navigation } = props;

  const [selected, setSelected] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const genderOptions = [
    { key: "Mujer", value: "Mujer" },
    { key: "Hombre ", value: "Hombre" },
    { key: "Prefiero no especificado", value: "Prefiero no especificado" },
  ];

  const phoneNumber = useSelector(
    (state) => state.combineReducers.authSlice.phoneNumber
  );

  const onSuccess = (res) => {
    console.log("gender added successfully ===>>", res);
    navigation.navigate("Direccion");
  };

  const onError = (err) => {
    console.log("error gender addition ==>>", err);
  };

  const { mutate, isLoading } = mutationHandler(
    API.createCustomer,
    onSuccess,
    onError
  );

  const selectionHandler = (item) => {
    setSelected(item);
    setErrorMessage("");
  };

  const proceedNext = () => {
    if (selected === "") {
      setErrorMessage("Selecciona tu género");
    } else {
      mutate({
        Steps: 4,
        in_Phone: phoneNumber,
        vc_Gender: selected,
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={styles.wrapWidth}
        >
          <View style={styles.top}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                color={AppColors.primaryColor.darkBlack}
                size={AppIcons.commonIcons.medium}
              />
            </TouchableOpacity>
            <Text style={styles.txtEmpecemos}>Género</Text>

            <View
              style={{
                backgroundColor: theme.greyLight,
                borderRadius: 10,
                marginTop: normalized.hp("5%"),
              }}
            >
              <SelectList
                setSelected={selectionHandler}
                data={genderOptions}
                search={false}
                // searchBar={false}
                placeholder="Elegir género"
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

            <Text style={styles.errorTxt}>{errorMessage}</Text>
          </View>
          <View style={styles.bottom}>
            <Buttons
              menuBtn
              label="Continuar"
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.secondaryColor.lightBlue}
              onPress={proceedNext}
            />
          </View>
          <LoaderModal visible={isLoading} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor.darkWhite,
  },
  wrapWidth: {
    flex: 1,
    width: normalized.wp("90%"),
    alignSelf: "center",
  },
  top: {
    height: normalized.hp("80%"),
  },
  txtEmpecemos: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "700",
    marginTop: normalized.hp("1%"),
  },
  bottom: {
    height: normalized.hp("10%"),
  },
  _btn_section: {
    marginHorizontal: 10,
  },

  containerStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  errorTxt: {
    fontSize: AppFonts.commonFont.small,
    color: AppColors.errorColor.red,
    margin: normalized.hp(1),
    marginBottom: 0,
  },
});
