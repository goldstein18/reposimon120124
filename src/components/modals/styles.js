import { StyleSheet, Dimensions } from "react-native";
import {
  AppColors,
  normalized,
  dimensionized,
  AppFonts,
  normalizedFont,
} from "../../utils/AppConstants";
const styles = StyleSheet.create({
  modalWrap: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    paddingHorizontal: normalized.wp("2%"),
    width: "100%",
    borderRadius: 20,
    paddingVertical: normalized.hp("4%"),
    alignSelf: "center",
  },
  modalWrap1: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    paddingHorizontal: normalized.wp("2%"),
    width: "100%",
    borderRadius: 20,
    paddingVertical: normalized.hp("2%"),
    alignSelf: "center",
  },
  avoidingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalWrap2: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    paddingHorizontal: normalized.wp("2%"),
    width: "100%",
    borderRadius: 20,
    alignSelf: "center",
    paddingVertical: normalized.hp("4%"),
  },

  txtTitle: {
    color: AppColors.primaryColor.darkBlack,
    textAlign: "center",
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "500",
  },
  txtLabel: {
    color: AppColors.primaryColor.darkBlack,
    textAlign: "center",
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "400",
    paddingVertical: normalized.hp("5%"),
  },
  txtTitle1: {
    color: AppColors.primaryColor.darkBlack,
    textAlign: "center",
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "700",
  },
  txtLabel1: {
    color: AppColors.primaryColor.darkBlack,
    textAlign: "center",
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    paddingVertical: normalized.hp("2%"),
  },
  txtLabel2: {
    color: AppColors.primaryColor.darkBlack,
    textAlign: "center",
    fontSize: normalizedFont.rf(8),
    fontWeight: "400",
    paddingVertical: normalized.hp("5%"),
  },
  wrapFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapFlex1: {
    alignSelf: "flex-end",
    marginTop: normalized.hp("2%"),
  },
  modalWrap3: {
    borderRadius: 10,
    alignSelf: "center",
    width: normalized.wp("50%"),
    alignSelf: "flex-end",
    marginTop: normalized.hp("12%"),
  },
  wrapTotal: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: normalized.hp("6%"),
  },
  txtTotal: {
    color: AppColors.secondaryColor.txtgrey,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "500",
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
