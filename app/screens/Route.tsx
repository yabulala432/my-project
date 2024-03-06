import React from "react";
import { Dimensions, Image, View, StyleSheet, ScrollView } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";

const Route = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <Screen style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: width,
              height: height * 0.7,
              resizeMode: "stretch",
              borderBottomLeftRadius: 0,
            }}
            source={require("../designs/buss_map.png")}
          />
        </View>
        <View style={styles.informationContainer}></View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  innerContainer: {
    borderRadius: 10,
  },
  inputsContainer: {
    paddingHorizontal: 20,
    width: "100%",
  },
  imageContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: colors.tertiary,
    borderRadius: 50,
    height: 55,
    width: "100%",
  },
  informationContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});

export default Route;
