import React, { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./Animated/navigator/BottomTabNavigator";
import ForgotPassword from "../screens/signinAndRegister/ForgotPassword";
import OnboardingScreen from "../screens/onboardingScreen/OnboardingScreen";
import ScreenNames from "./ScreenNames";
import SignIn from "../screens/signinAndRegister/SignIn";
import SignUp from "../screens/signinAndRegister/SignUp";

import { getItem } from "../utils/AsyncStorage";

const Stack = createStackNavigator();

const StackNavLogin = () => {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    let isOnboarded = await getItem("isOnboarded");
    if (isOnboarded) {
      setShowOnboarding(false);
    } else {
      setShowOnboarding(true);
    }
  };

  if (showOnboarding == false) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ScreenNames.SIGNIN}
      >
        <Stack.Screen name={ScreenNames.SIGNIN} component={SignIn} />
        <Stack.Screen name={ScreenNames.REGISTER} component={SignUp} />
        <Stack.Screen
          name={ScreenNames.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={ScreenNames.MAIN_SCREEN}
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    );
  } else if (showOnboarding === null) return null;
  else if (showOnboarding == true)
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ScreenNames.ONBOARDING}
      >
        <Stack.Screen
          name={ScreenNames.ONBOARDING}
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
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
