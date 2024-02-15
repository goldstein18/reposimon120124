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
    backgroundColor: AppColors.secondaryColor.lightestGrey,
  },
  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: normalized.hp("2%"),
  },
  iconStyle: {
    alignSelf: "flex-end",
  },
  txtHome: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
    textAlign: "center",
    marginTop: normalized.hp("1%"),
  },
  wrapImg: {
    width: normalized.wp("20%"),
    height: normalized.wp("20%"),
    alignSelf: "center",
    marginTop: normalized.hp("3%"),
  },
  imgBg: {
    width: "100%",
    height: normalized.hp("25%"),

    borderRadius: 20,
    marginTop: normalized.hp("8%"),
    backgroundColor: AppColors.primaryColor.darkWhite,
  },
  innerImg: { width: "100%", height: "100%" },
  txtPrice: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: normalizedFont.rf(4),
    fontWeight: "500",
  },
  wrapTxT: {
    marginTop: "8%",
    left: normalized.wp("8%"),
  },
  txtNum: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
  },
});

export default styles;
