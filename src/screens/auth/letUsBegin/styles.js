import { StyleSheet, Dimensions } from "react-native";
import { AppColors, normalized, AppFonts } from "../../../utils/AppConstants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor.darkWhite,
  },
  wrapWidth: {
    flex: 1,
    width: normalized.wp("90%"),
    alignSelf: "center",
  },
  txtEmpecemos: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "700",
    marginTop: normalized.hp("1%"),
  },
  txtDesc: {
    color: AppColors.primaryColor.darkGrey,
    marginTop: normalized.hp("1%"),
    fontSize: AppFonts.commonFont.small,
  },

  txtTienes: {
    color: AppColors.secondaryColor.lightBlue,
    fontSize: AppFonts.commonFont.small,
    marginTop: normalized.hp("2%"),
  },

  txtInp: {
    color: AppColors.primaryColor.lightBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    backgroundColor: AppColors.secondaryColor.lightGrey,
    height: normalized.hp("7%"),
    borderRadius: 10,
    paddingHorizontal: normalized.wp("5%"),
    justifyContent: "center",
  },
  top: {
    height: normalized.hp("80%"),
  },
  bottom: {
    height: normalized.hp("10%"),
  },
});

export default styles;
