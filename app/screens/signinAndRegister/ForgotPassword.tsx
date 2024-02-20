import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import AppTextInput from "../../components/AppTextInput";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import ScreenNames from "../../navigation/ScreenNames";

interface ForgotPasswordProps {
  navigation?: any;
}

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Screen style={styles.imageContainer}>
        <View style={styles.innerContainer}>
          <Image source={require("../../designs/forgotPassword.png")} />
          <View style={styles.inputsContainer}>
            <AppText style={styles.title}>Forgot Password?</AppText>
            <AppText style={styles.text}>Email: </AppText>
            <AppTextInput icon="email" placeholder="me@example.com" />

            <View style={styles.buttonContainer}>
              <AppButton
                style={styles.button}
                onPress={() => {}}
                title="Submit"
              />
            </View>

            <TouchableOpacity
              style={{
                width: "100%",
                alignSelf: "center",
              }}
              onPress={() => navigation.navigate(ScreenNames.SIGNIN)}
            >
              <AppText style={{ color: colors.grey, marginTop: 20 }}>
                Back to Login
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
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  innerContainer: {
    borderRadius: 10,
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
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingVertical: 20,
  },
  text: {
    color: colors.tertiary,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default ForgotPassword;
