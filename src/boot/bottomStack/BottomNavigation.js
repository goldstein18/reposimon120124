import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Settings, Home1 } from "../../screens/bottomTab";
import { View, Text, Image } from "react-native";
import { normalized, AppColors } from "../../utils/AppConstants";
import { images } from "../../assets/images";

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
                    color: AppColors.primaryColor.darkWhite,
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
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  width: normalized.wp("7%"),
                  height: normalized.wp("7%"),
                }}
              >
                <Image
                  source={images.home_icon}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Invest"
          component={Home1}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  width: normalized.wp("7%"),
                  height: normalized.wp("7%"),
                }}
              >
                <Image
                  source={images.money}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  width: normalized.wp("7%"),
                  height: normalized.wp("7%"),
                }}
              >
                <Image
                  source={images.settings}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
