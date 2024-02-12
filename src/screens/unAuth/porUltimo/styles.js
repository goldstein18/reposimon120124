import { StyleSheet, Dimensions } from "react-native";
import {
  AppColors,
  normalized,
  dimensionized,
  AppFonts,
} from "../../../utils/AppConstants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.secondaryColor.lightestGrey,
  },

  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },
  wrapFL: {},
  txtAdministra: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
    marginTop: normalized.hp("2%"),
  },
  txtElige: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "300",
    marginTop: normalized.hp("2%"),
    // textAlign: "",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: AppColors.primaryColor.darkWhite,
    width: "100%",
    padding: normalized.wp("5%"),
    borderRadius: 20,
    marginTop: normalized.hp("3%"),
    alignItems: "center",
  },
  flexRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: AppColors.primaryColor.darkWhite,
    width: "100%",
    padding: normalized.wp("5%"),
    borderRadius: 20,
    marginTop: normalized.hp("3%"),
  },
  txtDoc: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
    marginTop: normalized.hp("4%"),
  },
  txtContrato: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "500",
  },
  txtElige1: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.mdSmall,
    fontWeight: "500",
  },
  flexRow1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: normalized.wp("85%"),
    alignSelf: "center",
    marginTop: normalized.hp("3%"),
  },
  with20: {
    width: "20%",
  },
  with80: {
    width: "80%",
  },
  with15: {
    width: "15%",
  },
  with65: {
    width: "65%",
  },
  with20a: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapImg: {
    width: normalized.wp("12%"),
    height: normalized.wp("12%"),
    alignItems: "center",
    justifyContent: "center",
  },
  innerImg: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
