import { StyleSheet, Dimensions } from "react-native";
import {
  AppColors,
  normalized,
  dimensionized,
  AppFonts,
} from "../../../utils/AppConstants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: AppColors.primaryColor.skyBlue,
    height: normalized.hp("100%"),
  },
  wrapTop: {
    // backgroundColor: "red",
    height: normalized.hp("30%"),
    // justifyContent: "center",
  },
  wrapMiddle: {
    // backgroundColor: "pink",
    height: normalized.hp("50%"),
  },
  wrapEnd: {
    // backgroundColor: "green",
    height: normalized.hp("20%"),
  },

  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },
  txtTransferencia: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "400",
    marginTop: normalized.hp("3%"),
    textAlign: "center",
  },
  txtSaldo: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "400",
    marginTop: normalized.hp("3%"),
    textAlign: "center",
  },
  txtCantidad: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.large,
    fontWeight: "700",
    marginTop: normalized.hp("3%"),
    textAlign: "center",
  },
  wrapNumber: {
    marginTop: normalized.hp("6%"),
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  txtNum: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.large,
    fontWeight: "400",
  },
  wrapIndNumber: {
    width: normalized.wp("15%"),
    height: normalized.wp("15%"),
    alignItems: "center",
    justifyContent: "center",
  },
  txtInp: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.large,
    fontWeight: "400",
    marginTop: normalized.hp("6%"),
    textAlign: "center",
    alignSelf: "center",
  },
});

export default styles;
