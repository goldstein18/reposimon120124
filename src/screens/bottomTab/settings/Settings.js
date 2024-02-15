import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { images } from "../../../assets/images";
import { AppColors } from "../../../utils/AppConstants";
export const Settings = (props) => {
  const { navigation } = props;
  const [isLocked, setIsLocked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <View style={styles.wrapTop}>
          <Text style={styles.txtAdministra}>Administra tu cuenta</Text>
        </View>
        <View style={styles.wrapMiddle}>
          <View style={styles.wrapFL}>
            <TouchableOpacity
              style={{
                ...styles.wrapItemName,

                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("EstadoDeCuenta")}
            >
              <View
                style={{
                  ...styles.wrapRoundBox,
                }}
              >
                <View style={styles.wrapImg}>
                  <Image
                    resizeMode="contain"
                    source={images.file_open}
                    style={styles.innerImg}
                  />
                </View>
              </View>
              <Text style={styles.nameItem}>Estados de cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.wrapItemName,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("Participation")}
            >
              <View
                style={{
                  ...styles.wrapRoundBox,
                }}
              >
                <View style={styles.wrapImg}>
                  <Image
                    resizeMode="contain"
                    source={images.person}
                    style={styles.innerImg}
                  />
                </View>
              </View>
              <Text style={styles.nameItem}>Detalles personales</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.wrapItemName,

                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("EnvianosUnCorreo")}
            >
              <View
                style={{
                  ...styles.wrapRoundBox,
                }}
              >
                <View style={styles.wrapImg}>
                  <Image
                    resizeMode="contain"
                    source={images.quiz}
                    style={styles.innerImg}
                  />
                </View>
              </View>
              <Text style={styles.nameItem}>Ayuda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.wrapItemName,

                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("Document")}
            >
              <View
                style={{
                  ...styles.wrapRoundBox,
                }}
              >
                <View style={styles.wrapImg}>
                  <Image
                    resizeMode="contain"
                    source={images.article}
                    style={styles.innerImg}
                  />
                </View>
              </View>
              <Text style={styles.nameItem}>Documentos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.wrapItemName,
                backgroundColor: isLocked
                  ? AppColors.secondaryColor.pink
                  : AppColors.primaryColor.darkWhite,
                borderRadius: 20,
              }}
              onPress={() => setIsLocked(!isLocked)}
            >
              <View
                style={{
                  ...styles.wrapRoundBox,
                  backgroundColor: isLocked
                    ? AppColors.secondaryColor.pink
                    : AppColors.secondaryColor.lightGrey,
                }}
              >
                <View style={styles.wrapImg}>
                  <Image
                    resizeMode="contain"
                    source={images.lock}
                    style={styles.innerImg}
                  />
                </View>
              </View>
              <Text style={styles.nameItem}>Descongelar cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.wrapItemName,

                borderRadius: 20,
              }}
            >
              <View
                style={{
                  ...styles.wrapRoundBox,
                }}
              >
                <View style={styles.wrapImg}>
                  <Image
                    resizeMode="contain"
                    source={images.logout}
                    style={styles.innerImg}
                  />
                </View>
              </View>
              <Text style={styles.nameItem}>Cerrar sesion</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapEnd} />
      </View>
    </SafeAreaView>
  );
};
