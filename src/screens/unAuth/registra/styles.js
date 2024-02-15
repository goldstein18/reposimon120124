import { StyleSheet, Dimensions } from "react-native";
import { AppColors, normalized, AppFonts } from "../../../utils/AppConstants";

const styles = StyleSheet.create({
  container: {
    height: normalized.hp("100%"),
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
    marginTop: normalized.hp("1%"),
  },

  txtContrato: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "500",
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
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: normalized.hp("4%"),
    borderRadius: 10,
    padding: normalized.hp("1.5%"),
  },

  txtInp: {
    backgroundColor: AppColors.secondaryColor.lightGrey,
    width: "100%",
    height: normalized.hp("7%"),
    marginTop: normalized.hp("2%"),
    borderRadius: 10,
    fontSize: AppFonts.commonFont.small,
    paddingHorizontal: normalized.wp("5%"),
  },
  topHeight: {
    height: normalized.hp("40%"),
  },

  middleHeight: {
    height: normalized.hp("40%"),
  },

  bottomHeight: {
    justifyContent: "center",
    height: normalized.hp("10%"),
  },
});

export default styles;
