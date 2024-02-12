import { StyleSheet, Dimensions } from "react-native";
import { AppColors, normalized, AppFonts } from "../../../utils/AppConstants";
import theme from "../../../utils/theme";
const styles = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: 1,
    height: 59,
    width: 40,
    backgroundColor: theme.greyLight,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    color: theme.black,
    // fontFamily: theme.medium,
  },
  containerStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor.darkWhite,
  },
  top: {
    height: normalized.hp("80%"),
  },
  bottom: {
    height: normalized.hp("10%"),
  },
  wrapWidth: {
    flex: 1,
    width: normalized.wp("90%"),
    alignSelf: "center",
  },
  txtCodigo: {
    // fontFamily: theme.bold,
    fontSize: 17,
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
  wrapOtp: {
    alignSelf: "center",
    marginTop: normalized.hp("4%"),
  },
  txtTienes: {
    color: AppColors.secondaryColor.lightBlue,
    fontSize: AppFonts.commonFont.small,
    marginTop: normalized.hp("2%"),
  },
  errorTxt: {
    fontSize: AppFonts.commonFont.small,
    color: AppColors.errorColor.red,
    margin: normalized.hp(1),
    marginBottom: 0,
  }
});

export default styles;
