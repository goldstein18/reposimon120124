import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Stacks
import { BottomStack } from "./bottomStack/BottomNavigation";
import {
  Transferencia,
  Document,
  EnvianosUnCorreo,
  Participation,
  Necesitamos,
  PorUltimo,
  Abono,
  EstadoDeCuenta,
  AbonoExitoso,
  EligeUnRango,
  Pagar,
  Pagar1,
  Registra,
  Codigo,
  Transacciones,
  Transferencia1,
  Transferencia2,
} from "../screens/unAuth";
import {
  InitialPage,
  LetUsBegin,
  Signup,
  Direccion,
  Nombre,
  Password,
  UserDate,
  UserGender,
  VerificationCode,
  Login
} from "../screens/auth";
import { BackIcon } from "../assets/svg";
const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="InitialPage"
      >
        {/* Auth */}
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="LetUsBegin" component={LetUsBegin} />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"Celular"} />,
          }}
        />
        <Stack.Screen
          name="Nombre"
          component={Nombre}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"FirstPage"} />,
          }}
        />
        <Stack.Screen
          name="UserDate"
          component={UserDate}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"VerificationCode"} />,
          }}
        />
        <Stack.Screen
          name="UserGender"
          component={UserGender}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"UserDate"} />,
          }}
        />
        <Stack.Screen
          name="Direccion"
          component={Direccion}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"FirstPage"} />,
          }}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"FirstPage"} />,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"Nombre"} />,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"Nombre"} />,
          }}
        />




        {/* Bottom Nav */}
        <Stack.Screen name="bottomStack" component={BottomStack} />
        {/* UnAuth */}
        <Stack.Screen name="Necesitamos" component={Necesitamos} />
        <Stack.Screen name="Transferencia" component={Transferencia} />
        <Stack.Screen name="Document" component={Document} />
        <Stack.Screen name="EnvianosUnCorreo" component={EnvianosUnCorreo} />
        <Stack.Screen name="Participation" component={Participation} />
        <Stack.Screen name="PorUltimo" component={PorUltimo} />
        <Stack.Screen name="EstadoDeCuenta" component={EstadoDeCuenta} />
        <Stack.Screen name="Abono" component={Abono} />
        <Stack.Screen name="AbonoExitoso" component={AbonoExitoso} />
        <Stack.Screen name="EligeUnRango" component={EligeUnRango} />
        <Stack.Screen name="Pagar" component={Pagar} />
        <Stack.Screen name="Pagar1" component={Pagar1} />
        <Stack.Screen name="Registra" component={Registra} />
        <Stack.Screen name="Codigo" component={Codigo} />
        <Stack.Screen name="Transacciones" component={Transacciones} />
        <Stack.Screen name="Transferencia1" component={Transferencia1} />
        <Stack.Screen name="Transferencia2" component={Transferencia2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
// estadoDeCuenta;
