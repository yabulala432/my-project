import React from "react";
import { StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";
import Onboarding from "react-native-onboarding-swiper";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import ScreenNames from "../../navigation/ScreenNames";
import { TouchableOpacity } from "react-native-gesture-handler";
import { setItem } from "../../utils/AsyncStorage";

interface OnboardingScreenProps {
  navigation?: any;
}

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const handleSkip = () => {
    navigation.navigate(ScreenNames.SIGNIN);
    setItem("isOnboarded", "true");
  };
  return (
    <Onboarding
      bottomBarHighlight={false}
      onSkip={handleSkip}
      onDone={handleSkip}
      DoneButtonComponent={() => (
        <TouchableOpacity style={styles.doneButton} onPress={handleSkip}>
          <AppText
            color={colors.primary}
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            Done
          </AppText>
        </TouchableOpacity>
      )}
      subTitleStyles={{ fontSize: 20 }}
      pages={[
        {
          backgroundColor: colors.lightTeritiary,
          image: (
            <View style={styles.animationContainer}>
              <LottieView
                source={require("../../animations/animation1.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Welcome to Smoother Rides!",
          subtitle: (
            <View style={styles.onboardingContainer}>
              <AppText style={styles.subtitle} color={colors.accent}>
                We'll get you navigating the city like a pro in no time. Let's
                set up your preferences to find the perfect bus for your
                journey.
              </AppText>
            </View>
          ),
        },
        {
          backgroundColor: colors.secondary,
          image: (
            <View style={styles.animationContainer}>
              <LottieView
                source={require("../../animations/animation4.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Pick Your Destination",
          subtitle: (
            <View style={styles.onboardingContainer}>
              <AppText style={styles.subtitle}>
                Where are you headed? Enter your destination, and we'll show you
                all the buses that get you there quickly and easily.
              </AppText>
            </View>
          ),
        },
        {
          backgroundColor: colors.primary,
          image: (
            <View style={styles.animationContainer}>
              <LottieView
                source={require("../../animations/animation2.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Set Your Preferences",
          subtitle: (
            <View style={styles.onboardingContainer}>
              <AppText style={styles.subtitle}>
                Tailor your experience! Choose your preferred bus types,
                real-time alerts, and accessibility options for a personalized
                ride.
              </AppText>
            </View>
          ),
        },
        {
          backgroundColor: "#fe6e58",
          image: (
            <View style={styles.animationContainer}>
              <LottieView
                source={require("../../animations/animation3.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Follow Your Bus in Real-Time",
          subtitle: (
            <View style={styles.onboardingContainer}>
              <AppText style={styles.subtitle} color={colors.lightGrey}>
                See your bus on the map as it approaches your stop. No more
                waiting in the dark, know exactly when to step out!
              </AppText>
            </View>
          ),
        },
        {
          backgroundColor: colors.gold,
          image: (
            <View style={styles.animationContainer}>
              <LottieView
                source={require("../../animations/ring_bell.json")}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Get Live Updates and Alerts",
          subtitle: (
            <View style={styles.onboardingContainer}>
              <AppText style={styles.subtitle} color={colors.black}>
                Stay informed! Receive notifications for delays, reroutes, and
                any other important updates for your chosen bus.
              </AppText>
            </View>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  animationContainer: {
    width: 300,
    height: 200,
  },
  doneButton: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  onboardingContainer: {
    width: 320,
    paddingVertical: 40,
    textAlign: "justify",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "justify",
  },
});

export default OnboardingScreen;
