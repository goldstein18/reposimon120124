import React, { forwardRef } from 'react';
import { StyleSheet, Text, View, ViewStyle, KeyboardTypeOptions, TextInput as RNTextInput } from 'react-native';
import { AppColors, AppFonts, normalized } from '../../utils/AppConstants';
import { TextInput } from 'react-native-paper';

type InputFieldProps = {
    label: string;
    value: string;
    onChangeText: (txt: string) => void;
    style?: ViewStyle;
    keyboardType?: KeyboardTypeOptions;
    errorMessage?: string;
    secureTextEntry?: boolean;
    eyeIcon?: any;
};

const InputField = forwardRef<RNTextInput, InputFieldProps>(({
    label,
    value,
    onChangeText,
    style,
    keyboardType,
    errorMessage,
    secureTextEntry,
    eyeIcon,
    ...rest
}: InputFieldProps, ref) => {
    return (
        <View>
            <TextInput
                label={label}
                mode='outlined'
                secureTextEntry={secureTextEntry}
                right={eyeIcon}
                outlineColor={AppColors.secondaryColor.lightGrey}
                activeOutlineColor={AppColors.secondaryColor.activeFieldBorder}
                value={value}
                onChangeText={onChangeText}
                style={[styles.txtInp, style]}
                keyboardType={keyboardType}
                ref={ref}
                {...rest}
            />
            {errorMessage ?
                <Text style={styles.errorTxt}>{errorMessage}</Text>
                :
                null
            }
        </View>
    );
});

const styles = StyleSheet.create({
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
    errorTxt: {
        fontSize: AppFonts.commonFont.small,
        color: AppColors.errorColor.red,
        margin: normalized.hp(1),
        marginBottom: 0,
    }
});

export { InputField };
