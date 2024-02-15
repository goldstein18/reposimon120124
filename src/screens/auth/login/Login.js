import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React from 'react'
import Buttons from "../../../components/buttons/Buttons";
import { Feather, AppColors, AppIcons, normalized, AppFonts } from "../../../utils/AppConstants";
import { InputField } from "../../../components/Input/InputField";
import * as yup from "yup";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoaderModal from "../../../components/modals/LoaderModal";


const reviewSchema = yup.object({
    PhoneNumber: yup
        .string()
        .required('Campo requerido')
        .matches(/^[0-9]{10}$/, 'Debe tener 10 dígitos'),
    Password: yup
        .string()
        .required("Campo requerido"),
});


export const Login = (props) => {
    
    const { navigation } = props;

    const loginHandler = (values) => { 
        
     }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.wrapWidth}
                >
                    <Formik
                        initialValues={{
                            PhoneNumber: "",
                            Password: "",
                        }}
                        validationSchema={reviewSchema} //check validation
                        onSubmit={(values, actions) => {
                            loginHandler(values);
                        }}
                    >
                        {(props) => (
                            <>
                                <View style={styles.top}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Feather
                                            name="arrow-left"
                                            color={AppColors.primaryColor.darkBlack}
                                            size={AppIcons.commonIcons.medium}
                                        />
                                    </TouchableOpacity>

                                    <Text style={styles.txtEmpecemos}>Bienvenido de vuelta</Text>
                                    <Text style={styles.txtDesc}>
                                        Ingresa tu correo y contraseña
                                    </Text>

                                    <InputField
                                        label="Número celular"
                                        value={props.values.PhoneNumber}
                                        onChangeText={props.handleChange("PhoneNumber")}
                                        errorMessage={props.errors.PhoneNumber}
                                        style={styles.input}
                                    />

                                    <InputField
                                        label="Contraseńa"
                                        value={props.values.Password}
                                        onChangeText={props.handleChange("Password")}
                                        errorMessage={props.errors.Password}
                                    />

                                    <TouchableOpacity onPress={() => navigation.navigate("Password")}>
                                        <Text style={styles.txtTienes}>
                                            ¿Olvidaste tu contraseña?
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={styles.bottom}>
                                    <Buttons
                                        menuBtn
                                        label="Continuar"
                                        txtColor={AppColors.primaryColor.darkWhite}
                                        bgColor={AppColors.secondaryColor.lightBlue}
                                        onPress={props.handleSubmit}
                                    />
                                </View>
                            </>
                        )}
                    </Formik>
                    {/* <LoaderModal visible={isLoading || loading} /> */}
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

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
    top: {
        height: normalized.hp("80%"),
    },
    bottom: {
        height: normalized.hp("10%"),
    },
    input: {
        marginTop: normalized.hp("5%"),
        marginBottom: normalized.hp('3%')
    }
})