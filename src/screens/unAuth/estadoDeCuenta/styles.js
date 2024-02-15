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
    height: normalized.hp("10%"),
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: normalized.hp("1%"),
  },
  wrapMiddle: {
    // backgroundColor: "pink",
    height: normalized.hp("67%"),
  },
  wrapEnd: {
    // backgroundColor: "green",
    height: normalized.hp("15%"),
  },

  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },
  txtAdministra: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
  },
  flewRow: {
    flexDirection: "row",
    width: "100%",
    height: normalized.hp("4%"),
    borderRadius: 30,
    backgroundColor: AppColors.secondaryColor.btnBg,
    marginTop: normalized.hp("2%"),
  },
  wrapPdf: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    width: "50%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapExcel: {
    backgroundColor: AppColors.secondaryColor.btnBg,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  txtPdf: {
    fontSize: AppFonts.commonFont.small,
    fontWeight: "500",
    color: AppColors.secondaryColor.txtgrey,
  },
  wrapPdf1: {
    backgroundColor: AppColors.secondaryColor.btnBg,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapExcel1: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  wrapBox: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    marginTop: normalized.hp("2%"),
    borderRadius: 10,
    padding: normalized.hp("2%"),
  },
  txtEmpezando: {
    color: AppColors.secondaryColor.txtGrey1,
    fontSize: AppFonts.commonFont.small,
  },
  wrapDate: {
    marginTop: normalized.hp("4%"),
    alignItems: "center",
    justifyContent: "center",
  },
  txtJuly: {
    color: "#d7d8d8",
    fontSize: AppFonts.commonFont.mdSmall,
  },
  wrapAug: {
    backgroundColor: "#f4f4f5",
    padding: normalized.wp("2%"),
    paddingHorizontal: normalized.wp("4%"),
    marginTop: normalized.hp(".5%"),
    borderRadius: 7,
  },
  txtAugest: {
    color: "#7f8183",
    fontSize: AppFonts.commonFont.mdSmall,
  },
});

export default styles;
