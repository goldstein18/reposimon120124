import { Modal, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { AppColors } from '../../utils/AppConstants'

const LoaderModal = (props) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.container}>

                <ActivityIndicator size="large" color={AppColors.primaryColor.darkWhite} />

            </View>
        </Modal>
    )
}

export default LoaderModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})