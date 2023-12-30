import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ScreenNames from "../navigation/ScreenNames";

interface SignInProps {
  navigation: any;
}

const SignIn = ({ navigation }: SignInProps) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Screen style={styles.imageContainer}>
        <View style={styles.innerContainer}>
          <Image source={require("../designs/login.png")} />
          <View style={styles.inputsContainer}>
            <AppText style={styles.title}>Sign-in</AppText>

            <AppText style={styles.text}>Email: </AppText>
            <AppTextInput icon="email" placeholder="me@example.com" />

            <AppText style={styles.text}>Password: </AppText>
            <AppTextInput
              icon="lock"
              placeholder="########"
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={{
                width: "100%",
                alignSelf: "flex-end",
              }}
              onPress={() => navigation.navigate(ScreenNames.FORGOT_PASSWORD)}
            >
              <AppText style={{ color: colors.grey }}>Forgot Password?</AppText>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <AppButton
                style={styles.button}
                onPress={() => {}}
                title="Login"
              />
            </View>

            <TouchableOpacity
              style={{
                width: "100%",
                alignSelf: "center",
              }}
              onPress={() => navigation.navigate(ScreenNames.REGISTER)}
            >
              <AppText style={{ color: colors.grey, marginTop: 20 }}>
                Don't have an account? Register
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  inputsContainer: {
    paddingHorizontal: 20,
    width: "100%",
  },
  container: {},
  buttonContainer: {},
  button: {
    backgroundColor: colors.tertiary,
    borderRadius: 50,
    height: 55,
    marginTop: 20,
    width: "100%",
  },
  title: {
    color: colors.tertiary,
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    color: colors.tertiary,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default SignIn;
