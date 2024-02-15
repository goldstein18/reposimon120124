import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Settings, Home1 } from "../../screens/bottomTab";
import { View, Text, Image, StyleSheet } from "react-native";
import { normalized, AppColors, AppFonts } from "../../utils/AppConstants";
import { images } from "../../assets/images";
import { SimpleLineIcons } from '@expo/vector-icons'
import { RFPercentage as rf } from "react-native-responsive-fontsize";


const Tab = createBottomTabNavigator();
export const BottomStack = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          lazy: true,
          tabBarStyle: {
            backgroundColor: "white",

            height:
              Platform.OS === "ios"
                ? normalized.hp("9.2%")
                : normalized.hp("8%"),
          },
          tabBarLabelStyle: {
            textAlign: "center",
            fontSize: 12,
          },
          tabBarItemStyle: {
            bottom: Platform.OS === "ios" ? normalized.hp("-1%") : 0,
          },
          tabBarAllowFontScaling: false,
          tabBarLabel: ({ focused, color, position }) => {
            if (focused)
              return (
                <Text
                  style={{
                    color: AppColors.primaryColor.darkBlack,
                  }}
                >
                  {route.name}
                </Text>
              );
            if (!focused) return null;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View style={styles.buttonContainer}>
                <SimpleLineIcons
                  name='home'
                  size={25}
                  color={focused ? AppColors.primaryColor.skyBlue : AppColors.primaryColor.darkBlack}
                />
                <Text
                  style={[styles.title, {
                    color: focused ? AppColors.primaryColor.skyBlue : AppColors.primaryColor.darkBlack
                  }]}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Invest"
          component={Home1}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View style={styles.buttonContainer}>
                <Image
                  source={images.money}
                  resizeMode="contain"
                  style={{
                    width: normalized.wp("7%"),
                    height: normalized.wp("7%"),
                    tintColor: focused ? AppColors.primaryColor.skyBlue : AppColors.primaryColor.darkBlack
                  }}
                />
                <Text
                  style={[styles.title, {
                    color: focused ? AppColors.primaryColor.skyBlue : AppColors.primaryColor.darkBlack
                  }]}
                >
                  Abonos
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View style={styles.buttonContainer}>
                <Image
                  source={images.person1}
                  resizeMode="contain"
                  style={{
                    width: normalized.wp("7%"),
                    height: normalized.wp("7%"),
                    tintColor: focused ? AppColors.primaryColor.skyBlue : AppColors.primaryColor.darkBlack
                  }}
                />
                <Text
                  style={[styles.title, {
                    color: focused ? AppColors.primaryColor.skyBlue : AppColors.primaryColor.darkBlack
                  }]}
                >
                  Cuenta
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: rf(1),
    marginTop: normalized.hp('0.5%')
  }
})