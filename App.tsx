import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import StackNavLogin from "./app/navigation/StackNavLogin";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavLogin />
    </NavigationContainer>
  );
}
