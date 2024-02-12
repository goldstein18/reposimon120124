import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../utils/AppConstants'

const ManualTimers = (props) => {

    const { isVisible } = props

    return (
        <Modal
            isVisible={isVisible}
            transparent={true}
        >
            <View style={styles.backdrop}>
                <SafeAreaView>
                    <Text>ManualTimers</Text>
                </SafeAreaView>
            </View>
        </Modal>

    )
}

export default ManualTimers

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})