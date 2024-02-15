import { StyleSheet, Dimensions } from "react-native";
import {
  AppColors,
  normalized,
  dimensionized,
  AppFonts,
  normalizedFont,
} from "../../../utils/AppConstants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: AppColors.primaryColor.skyBlue,
    height: normalized.hp("100%"),
  },
  wrapTop: {
    backgroundColor: AppColors.primaryColor.skyBlue,
    height: normalized.hp("40%"),
    // justifyContent: "center",
  },
  wrapMiddle: {
    height: normalized.hp("40%"),
  },
  wrapEnd: {
    // backgroundColor: "green",
    height: normalized.hp("20%"),
  },

  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },

  txtCantidad: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.large,
    fontWeight: "700",
    marginTop: normalized.hp("6%"),
    textAlign: "center",
  },

  txtNum: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.large,
    fontWeight: "400",
  },

  txtInp: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: normalizedFont.rf(8),
    fontWeight: "400",
    textAlign: "center",
    alignSelf: "center",
  },

  txtAbono: {
    color: AppColors.primaryColor.darkWhite,
    textAlign: "center",
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    marginTop: "5%",
  },
  txtAbonoExitoso: {
    color: AppColors.primaryColor.darkWhite,
    textAlign: "center",
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "700",
    marginTop: "12%",
  },
  txtDate: {
    color: AppColors.primaryColor.darkWhite,
    textAlign: "center",
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
  },
  txtPrice: {
    color: AppColors.primaryColor.darkWhite,
    textAlign: "center",
    fontSize: normalizedFont.rf(5),
    fontWeight: "500",
    marginTop: "12%",
  },
  txtDf: {
    color: AppColors.primaryColor.darkWhite,
    textAlign: "center",
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    marginTop: "12%",
  },
  txtCongela: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "700",
    marginTop: "5%",
  },
  txtElige: {
    color: "#8d8d9b",
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    marginTop: "2%",
  },
});

export default styles;
