import React from "react";
import { Image, Platform, ScrollView, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import IconButton from "../components/IconButton";
import Screen from "../components/Screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import ScreenNames from "../navigation/ScreenNames";

interface SignUpProps {
  navigation: any;
}

const SignUp = ({ navigation }: SignUpProps) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Screen style={styles.imageContainer}>
        <View style={styles.innerContainer}>
          <Image source={require("../designs/register.png")} />
          <AppText style={styles.title}>Sign-up</AppText>

          <View>
            <IconButton
              name="camera"
              size={100}
              backgroundColor={colors.secondary}
              iconColor={colors.white}
            />
          </View>

          <View style={styles.inputsContainer}>
            <AppText style={styles.text}>Name: </AppText>
            <AppTextInput icon="account" placeholder="your name" />

            <AppText style={styles.text}>Email: </AppText>
            <AppTextInput icon="email" placeholder="me@example.com" />

            <AppText style={styles.text}>Password: </AppText>
            <AppTextInput
              icon="lock"
              placeholder="********"
              secureTextEntry={true}
            />

            <AppText style={styles.text}>Contact Number: </AppText>
            <AppTextInput icon="phone" placeholder="09 11 -- -- --" />

            <View style={styles.buttonContainer}>
              <AppButton
                style={styles.button}
                onPress={() => {}}
                title="Register"
              />
            </View>

            <TouchableOpacity
              style={{
                width: "100%",
                alignItems: "center",
                marginVertical: 20,
              }}
              onPress={() => navigation.navigate(ScreenNames.SIGNIN)}
            >
              <AppText style={{ color: colors.grey }}>
                Already have an account? Login
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
    padding: 10,
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  inputsContainer: {
    width: 300,
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
    fontSize: 50,
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

export default SignUp;
