import { StyleSheet, Dimensions } from "react-native";
import {
  AppColors,
  normalized,
  AppFonts,
  normalizedFont,
} from "../../../utils/AppConstants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: normalized.hp("100%"),
  },
  txtHome: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
    textAlign: "center",
    marginTop: normalized.hp("1%"),
  },
  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },
  wrapImg: {
    width: normalized.wp("20%"),
    height: normalized.wp("20%"),
    alignSelf: "center",
    marginTop: normalized.hp("3%"),
  },
  wrapImg1: {
    width: normalized.wp("13%"),
    height: normalized.wp("13%"),
    alignSelf: "center",
  },
  innerImg: { width: "100%", height: "100%" },
  wrapBalnce: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: normalized.hp("2%"),
  },
  txtPrice: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
  },
  txtAnual: {
    color: AppColors.primaryColor.darkGrey,
    fontSize: normalizedFont.rf(1.2),
    fontWeight: "400",
    marginTop: normalized.hp("2%"),
  },
  txtBalance: {
    color: AppColors.primaryColor.darkGrey,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "500",
  },
  iconStyle: {
    alignSelf: "flex-end",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: normalized.hp("2%"),
  },
  txtMuCu: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
  },
  txtParticipacion: {
    color: AppColors.primaryColor.darkBlack,
    fontWeight: "400",
    fontSize: AppFonts.commonFont.small,
  },
  wrapParticipacion: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    borderRadius: 10,
    padding: normalized.hp("1%"),
    paddingVertical: normalized.hp("1%"),
    flexDirection: "column",
    justifyContent: "space-between",
    height: normalized.hp("10%"),
    width: normalized.wp("43%"),
  },
  loadingBar: {
    backgroundColor: AppColors.secondaryColor.lightGrey,
    width: "100%",
    height: normalized.hp("4%"),
    marginTop: normalized.hp("1%"),
    borderRadius: 10,
  },
  wrapRenovar: {
    borderWidth: 1,
    borderColor: AppColors.primaryColor.darkGrey,
    borderRadius: 30,
    alignSelf: "center",
    width: "100%",
    marginTop: normalized.hp("2%"),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: normalized.hp("1%"),
  },
  txtRenovar: {
    color: AppColors.primaryColor.darkGrey,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
  },
  divider: {
    backgroundColor: "#f5f5f5",
    height: 1,
  },
  menuOpt: {
    backgroundColor: "#e5e5e5",
    height: normalized.hp("5%"),
    alignItems: "center",
    justifyContent: "center",
  },
  wrapBox: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    width: "80%",
    borderRadius: 10,
    height: normalized.hp("15%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    marginTop: normalized.hp("2%"),
  },
  flexRow1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: normalized.wp("3%"),
    marginTop: normalized.hp("1%"),
  },
  txtDate: {
    color: AppColors.primaryColor.darkGrey,
    fontSize: AppFonts.commonFont.smallest,
  },
  txtDate1: {
    color: AppColors.primaryColor.skyBlue,
    fontSize: AppFonts.commonFont.small,
  },
  txtDate2: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.large,
    fontWeight: "400",
  },
});

export default styles;
