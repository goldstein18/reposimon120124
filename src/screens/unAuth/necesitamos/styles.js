import { StyleSheet, Dimensions } from "react-native";
import {
  AppColors,
  normalized,
  dimensionized,
  AppFonts,
} from "../../../utils/AppConstants";

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
    backgroundColor: AppColors.secondaryColor.lightGrey,
    marginTop: normalized.hp("4%"),
    borderRadius: 10,
    padding: normalized.hp("1.5%"),
    height: normalized.hp("7%"),
  },
  txtCaratula: {
    flex: 1,
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "500",
    marginRight: 10
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
  errorTxt: {
    fontSize: AppFonts.commonFont.small,
    color: AppColors.errorColor.red,
    margin: normalized.hp(1),
    marginBottom: 0,
  },
  actionSheetContainer: {
    // Customize the styles for the ActionSheet container
    borderStartColor: "red",
    flex: 1,
  },

  actionSheetButton: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  actionSheetButtonText: {
    fontSize: 18,
  },
  modalContainer: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    borderRadius: 10,
    padding: normalized.wp("5%"),
    paddingVertical: normalized.wp("7%"),
  },
  wrapClose: {
    alignSelf: "flex-end",
  },
});

export default styles;
