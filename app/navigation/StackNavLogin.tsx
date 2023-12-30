import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ForgotPassword from "../screens/ForgotPassword";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
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
      <Stack.Screen name={ScreenNames.SIGNIN} component={SignIn} />
      <Stack.Screen name={ScreenNames.REGISTER} component={SignUp} />
      <Stack.Screen
        name={ScreenNames.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default StackNavLogin;
