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
    height: normalized.hp("100%"),
  },
  wrapTop: {
    height: normalized.hp("20%"),
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: normalized.hp("1%"),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.primaryColor.darkBlack,
    // backgroundColor: "red",
  },
  wrapMiddle: {
    // backgroundColor: "pink",
    height: normalized.hp("58%"),
  },
  wrapEnd: {
    // backgroundColor: "green",
    height: normalized.hp("15%"),
  },
  borderSty: {
    borderBottomWidth: 1,
    width: "100%",
  },
  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },
  txtAdministra: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
    marginTop: normalized.hp("2%"),
  },
  txtFecha: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: "700",
    fontSize: AppFonts.commonFont.small,
    marginTop: normalized.hp("1%"),
  },
  txtDate: {
    color: "#838392",
    fontWeight: "400",
    fontSize: AppFonts.commonFont.mdSmall,
    marginTop: normalized.hp("1%"),
  },
  wrapFl: {
    marginTop: normalized.hp("2%"),
    right: normalized.wp("2%"),
  },
});

export default styles;
