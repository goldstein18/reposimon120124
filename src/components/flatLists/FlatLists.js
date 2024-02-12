import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";

import styles from "./styles";
import { AppColors, Octicons, AppIcons } from "../../utils/AppConstants";
import { images } from "../../assets/images";
// screenName: "Documentos",
const FlatLists = (props) => {
  const { data, navigation, documents, historyTrans, eligeFl } = props;

  return (
    <>
      {documents ? (
        <>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity
                    style={{
                      ...styles.wrapItemName1,
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
                          source={item.img}
                          style={styles.innerImg}
                        />
                      </View>
                    </View>
                    <Text style={styles.nameItem}>{item.name}</Text>
                  </TouchableOpacity>
                </>
              );
            }}
            keyExtractor={(index) => index.toString()}
          />
        </>
      ) : historyTrans ? (
        <>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.wrapBoxHistory}>
                  <View style={styles.flexRowJustify}>
                    <Text style={styles.txtName}>{item.name}</Text>
                    <Text
                      style={{
                        ...styles.txtPrice,
                        color:
                          item.credit === true
                            ? AppColors.secondaryColor.green
                            : item.debit === true
                            ? AppColors.secondaryColor.red
                            : null,
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                  <Text style={styles.txtAddress}>{item.date}</Text>
                  <Text style={styles.txtAddress}>{item.address}</Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      ) : eligeFl ? (
        <>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <>
                  {item.isActive ? (
                    <TouchableOpacity
                      style={{
                        ...styles.wrapRadiusBox1,
                        backgroundColor: item.isActive
                          ? AppColors.secondaryColor.lightBlue
                          : "#f2f2f2",
                      }}
                      onPress={() => props.selectedVal(index)}
                    >
                      <Text
                        style={{
                          ...styles.txtName1,
                          color: item.isActive
                            ? AppColors.primaryColor.darkWhite
                            : "#838392",
                        }}
                      >
                        {item.name}
                      </Text>
                      <Octicons
                        name="dot-fill"
                        color={AppColors.primaryColor.darkWhite}
                        size={AppIcons.commonIcons.smallest}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={{
                        ...styles.wrapRadiusBox,
                        backgroundColor: item.isActive
                          ? AppColors.secondaryColor.lightBlue
                          : "#f2f2f2",
                      }}
                      onPress={() => props.selectedVal(index)}
                    >
                      <Text
                        style={{
                          ...styles.txtName1,
                          color: item.isActive
                            ? AppColors.primaryColor.darkWhite
                            : "#838392",
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      ) : null}
    </>
  );
};
export default FlatLists;
