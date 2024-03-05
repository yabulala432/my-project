import React from "react";

// @ts-ignore
import { HERE_MAPS_API_KEY, HERE_MAPS_URL } from "@env";

import { NavigationContainer } from "@react-navigation/native";

import StackNavLogin from "./app/navigation/StackNavLogin";

export default function App() {
  console.log(HERE_MAPS_API_KEY, HERE_MAPS_URL);
  return (
    <></>
    // <NavigationContainer>
    //   <StackNavLogin />
    // </NavigationContainer>
  );
}
