import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './src/launchscreen/LaunchScreen';
import { useFonts } from "expo-font";
import OnBoardingScreen from './src/boarding/OnBoardingScreen';
import CreatAccount from './src/creataccount/CreatAccount';
import Verification from './src/verification/Verification';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/creataccount/Login';

const Stack = createNativeStackNavigator();
export default function App() {
   const [fontsLoaded] = useFonts({
     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
     
   });

   if (!fontsLoaded) return null;
  return (
    //  <LaunchScreen />
    // <OnBoardingScreen/>
    // <CreatAccount/>

    //   <Verification />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="verify" component={Verification} />
        <Stack.Screen name="onboard" component={OnBoardingScreen} />
        <Stack.Screen name="createaccount" component={CreatAccount} />
        <Stack.Screen name="launch" component={LaunchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
