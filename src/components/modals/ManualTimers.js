import { FlatList, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors, AppFonts, normalized } from '../../utils/AppConstants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ManualTimers = (props) => {

    const { data } = props

    const insets = useSafeAreaInsets();
    const showFull = data.length > 2

    return (
        <View style={[styles.backdrop, showFull ? { backgroundColor: AppColors.primaryColor.darkWhite } : undefined]}>
            <View style={{ paddingTop: insets.top }}>
                {showFull && <Text style={styles.heading}>Selecciona tu plazo de participación</Text>}
                <FlatList
                    data={data.slice(0, 5)}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.amount}>{item.amount}</Text>
                            <View style={styles.timer}>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default ManualTimers

const styles = StyleSheet.create({
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    heading: {
        color: AppColors.primaryColor.darkBlack,
        fontSize: AppFonts.commonFont.medium,
        fontWeight: '700',
        alignSelf:'center',
        marginVertical: normalized.hp("2%")
    },
    item: {
        flexDirection: 'row',
        width: normalized.wp('90%'),
        height: normalized.hp("12%"),
        backgroundColor: AppColors.primaryColor.darkWhite,
        borderRadius: 22,
        alignSelf: 'center',
        marginBottom: normalized.hp("4%"),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: normalized.wp("8%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    timer: {
        height: normalized.wp('20%'),
        width: normalized.wp('20%'),
        borderRadius: Math.round(normalized.wp('20%')) / 2,
        backgroundColor: AppColors.primaryColor.skyBlue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    amount: {
        color: AppColors.primaryColor.darkBlack,
        fontSize: AppFonts.commonFont.large,
    },
    time: {
        color: AppColors.primaryColor.darkWhite,
        fontSize: AppFonts.commonFont.medium,
    }
})