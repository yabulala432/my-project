import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import ScreenNames from "./ScreenNames";

const Stack = createStackNavigator();

const StackNavLogin = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
      <Stack.Screen name={ScreenNames.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default StackNavLogin;
