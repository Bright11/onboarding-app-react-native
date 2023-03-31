import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import Boarding from "./Boarding";
import onboardingstyle from "./images/onboardingstyle";
import { TouchableOpacity } from "react-native";

import { Alert } from "react-native";

const OnBoardingScreen = ({ navigation }) => {
  // customizing done botton and passing it as props
  const Done = () => (
    <TouchableOpacity
      onPress={pressdon}
      style={{ backgroundColor: "green", padding: 15 }}
    >
      <Text style={{ fontSize: 16, marginHorizontal: 20, color: "white" }}>
        Get Started
      </Text>
    </TouchableOpacity>
  );
  const pressdon = () => {
    navigation.replace("createaccount");
  };
  //the pressdon will be passed as a props to the borading
  return (
    <SafeAreaView style={{ flex: 1 / 1, marginTop: 20 }}>
      <View style={onboardingstyle.view__content}>
        {/* onboarding */}
        <Boarding Done={Done} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
