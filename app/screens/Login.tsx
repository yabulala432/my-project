import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const Login = () => {
  return (
    <Screen style={styles.imageContainer}>
      <View style={styles.innerContainer}>
        <AppText
          style={{
            color: "#fff",
            fontSize: 40,
          }}
        >
          Login
        </AppText>
        <Image source={require("../designs/login.png")} />

        <AppText>Email: </AppText>
        <AppTextInput placeholder="me@example.com" />
        <AppText>Password: </AppText>
        <AppTextInput placeholder="********" />
        <View style={styles.buttonContainer}>
          <AppButton
            style={{
              backgroundColor: "#8F4DB2",
              borderRadius: 10,
              padding: 20,
              marginTop: 20,
              width: 280,
            }}
            onPress={() => {}}
            title="Login"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#70B24D",
    borderRadius: 100,
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  innerContainer: {
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    padding: 20,
    // width: 300,
  },
  container: {},
  buttonContainer: {
    // alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default Login;
