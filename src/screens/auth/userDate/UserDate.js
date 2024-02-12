import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import theme from "../../../utils/theme";
import { AppColors, AppFonts, AppIcons, Feather, normalized } from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import { InputField } from "../../../components/Input/InputField";
import { useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { mutationHandler } from "../../../services/mutations/networkCallHandlers";
import LoaderModal from "../../../components/modals/LoaderModal";
import { API } from "../../../services/api";

export const UserDate = (props) => {

  const { navigation } = props;

  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const phoneNumber = useSelector(state => state.combineReducers.authSlice.phoneNumber)
  const monthRef = useRef(null)
  const yearRef = useRef(null)

  const onSuccess = (res) => {
    console.log('DOB added successfully ===>>', res);
    navigation.navigate("UserGender")
  }

  const onError = (err) => {
    console.log('error DOB addition ==>>', err);
  }

  const { mutate, isLoading } = mutationHandler(API.createCustomer, onSuccess, onError);

  const dayHandler = (text) => {
    const numericValue = parseInt(text, 10);
    if (numericValue > 31) {
      setErrorMessage('El día debe ser entre el 01 y el 31.');
    } else {
      setErrorMessage('');
      setDay(text);
    }

    if (text.length == 2) {
      monthRef?.current?.focus()
    }
  }

  const monthHandler = (text) => {
    const numericValue = parseInt(text, 10);
    if (numericValue > 12) {
      setErrorMessage('El mes debe estar entre 01 y 12.');
    } else {
      setErrorMessage('');
      setMonth(text);
    }

    if (text.length == 2) {
      yearRef.current.focus()
    }
  }

  const yearHandler = (text) => {
    if (text.length <= 2) {
      setYear(text);
    }
  }

  const validateDate = () => {
    // Validates that the input string is a valid date formatted as "mm/dd/yy"
    const dateInput = `${month}/${day}/${year}`;

    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{2}$/.test(dateInput))
      return false;

    // Parse the date parts to integers
    const parts = dateInput.split("/");
    const inputDay = parseInt(parts[1], 10);
    const inputMonth = parseInt(parts[0], 10);
    const inputYear = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (inputYear < 0 || inputYear > 99 || inputMonth == 0 || inputMonth > 12)
      return false;

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if ((inputYear + 2000) % 400 == 0 || ((inputYear + 2000) % 100 != 0 && (inputYear + 2000) % 4 == 0))
      monthLength[1] = 29;

    // Check the range of the day
    return inputDay > 0 && inputDay <= monthLength[inputMonth - 1];
  }

  const proceedNext = () => {
    const isDateValid = validateDate()
    if (isDateValid) {
      setErrorMessage('')
      mutate({
        "Steps": 3,
        "in_Phone": phoneNumber,
        "vc_Birth_Date": `${day}-${month}-${year}`
      })
    } else {
      setErrorMessage('Invalid date')
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={styles.wrapWidth}>
          <View style={styles.top}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                color={AppColors.primaryColor.darkBlack}
                size={AppIcons.commonIcons.medium}
              />
            </TouchableOpacity>

            <Text style={styles.txtEmpecemos}>Fecha de nacimiento</Text>

            <View style={styles.fieldsContainer}>

              <InputField
                label='Día'
                value={day}
                onChangeText={dayHandler}
                keyboardType='numeric'
              />

              <InputField
                ref={monthRef}
                label='Mes'
                value={month}
                onChangeText={monthHandler}
                keyboardType='numeric'
              />

              <InputField
                ref={yearRef}
                label='Año'
                value={year}
                onChangeText={yearHandler}
                keyboardType='numeric'
              />

            </View>

            <Text style={styles.errorTxt}>{errorMessage}</Text>

            <Text style={styles.format}>DD/MM/AA</Text>

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
  fieldsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: normalized.hp("5%"),
  },
  txtInp: {
    color: AppColors.primaryColor.lightBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    backgroundColor: AppColors.secondaryColor.lightGrey,
    height: normalized.hp("8%"),
    width: normalized.wp('27%'),
    borderRadius: 10,
    paddingHorizontal: normalized.wp("5%"),
    justifyContent: "center",
    marginTop: normalized.hp("5%"),
  },
  bottom: {
    height: normalized.hp("10%"),
  },

  _btn_section: {
    marginHorizontal: 10,
  },

  _input: {
    backgroundColor: theme.greyLight,
    height: 59,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    borderRadius: 8,
    padding: 20,
    marginVertical: 14,
    textAlign: "center",
    fontSize: 16,
    elevation: 1,
  },
  errorTxt: {
    fontSize: AppFonts.commonFont.small,
    color: AppColors.errorColor.red,
    margin: normalized.hp(1),
    marginBottom: 0,
  },
  format: {
    fontSize: AppFonts.commonFont.small,
    color: AppColors.secondaryColor.lightBlack1,
    margin: normalized.hp(1),
    textAlign: 'center'
  }
});
