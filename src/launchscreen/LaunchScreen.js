import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import launchScreenstyle from './launchScreenstyle';
//importing font
import { useFonts } from "expo-font";
//the end
// launch screen
// getting font ready to be used

const LaunchScreen = () => {
	 const [fontsLoaded] = useFonts({
     "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
   });

// 	if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={launchScreenstyle.safearealaunchview}>
      <Pressable style={launchScreenstyle.safearealaunchpress}>
        <Text
          style={{
            ...launchScreenstyle.launctext9ja,
            fontFamily: "Roboto-Regular",
          }}
        >
          9ja
        </Text>
        <Text
          style={{
            ...launchScreenstyle.launctext,
            fontFamily: "Roboto-Regular",
          }}
         
        >
          foods
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default LaunchScreen

