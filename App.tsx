import StackNavLogin from "./app/navigation/StackNavLogin";
import HomeScreen from "./app/screens/HomeScreen";
import React from "react";
import SignIn from "./app/screens/signinAndRegister/SignIn";
import SignUp from "./app/screens/signinAndRegister/SignUp";
import ForgotPassword from "./app/screens/signinAndRegister/ForgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import Route from "./app/screens/Route";
import GpsTracker from "./app/screens/GpsTracker";
import OnboardingScreen from "./app/screens/onboardingScreen/OnboardingScreen";
import BottomTabNavigator from "./app/navigation/Animated/navigator/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavLogin />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}

//
