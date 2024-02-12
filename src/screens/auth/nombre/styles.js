import { StyleSheet, Dimensions } from "react-native";
import { AppColors, normalized, AppFonts } from "../../../utils/AppConstants";
import theme from "../../../utils/theme";
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

  txtInp: {
    color: AppColors.primaryColor.lightBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    backgroundColor: AppColors.secondaryColor.lightGrey,
    height: normalized.hp("7%"),
    borderRadius: 10,
    paddingHorizontal: normalized.wp("5%"),
    justifyContent: "center",
    marginTop: normalized.hp("3%"),
  },
  top: {
    height: normalized.hp("80%"),
  },
  bottom: {
    height: normalized.hp("10%"),
  },
  _container: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 15,
    paddingTop: 0,
  },
  _body: {
    flex: 1,
  },
  _heading: {
    // fontFamily: theme.bold,
    fontSize: 17,
  },
  _desc: {
    // fontFamily: theme.medium,
    marginTop: 15,
    color: theme.grey,
    fontSize: 16,
    marginBottom: 30,
  },
  _btn_section: {
    marginHorizontal: 10,
  },
});

export default styles;
