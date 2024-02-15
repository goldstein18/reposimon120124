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
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: normalized.hp(" 5%"),
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
    marginTop: normalized.hp("6%"),
    textAlign: "center",
  },
  txtSaldo: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.large,
    fontWeight: "700",
    marginTop: normalized.hp("4%"),
    textAlign: "center",
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
  txtDf: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "500",
  },
});

export default styles;
