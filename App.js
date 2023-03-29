import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './src/launchscreen/LaunchScreen';
import { useFonts } from "expo-font";
export default function App() {
   const [fontsLoaded] = useFonts({
     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
     
   });

   if (!fontsLoaded) return null;
  return (
    // <SafeAreaView>
    //   <LaunchScreen />
    // </SafeAreaView>
    <LaunchScreen />
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
