import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

const MenuModal = (props) => {
  const { isVisible, label, title, onCancelarPress, onPress } = props;
  return (
    <>
      <Modal isVisible={isVisible}>
        <View style={styles.modalWrap3}>
          <View
            style={{
              ...styles.wrapTotal,
              backgroundColor: "#dbdbdc",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text style={styles.txtTotal}>Total</Text>
          </View>
          <TouchableOpacity
            style={{ ...styles.wrapTotal, backgroundColor: "#eaeaea" }}
            onPress={onPress}
          >
            <Text style={styles.txtTotal}>12 meses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.wrapTotal, backgroundColor: "#f6f6f6" }}
            onPress={onPress}
          >
            <Text style={styles.txtTotal}>6 meses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.wrapTotal,
              backgroundColor: "#ffffff",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            onPress={onPress}
          >
            <Text style={styles.txtTotal}>1 meses</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default MenuModal;
