import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import creatAccountstyle from "./creatAccountstyle";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Login = () => {
  // for the icons, i make use of vector icons
  return (
    <SafeAreaView style={creatAccountstyle.creatAccountsafeview}>
      <ScrollView style={creatAccountstyle.creatAccountinputview}>
        {/*  KeyboardAvoidingView is to stop the keyboard from covering the items*/}
        <KeyboardAvoidingView>
          <View>
            <Text style={creatAccountstyle.pagenametext}>Login Account</Text>

            <View style={creatAccountstyle.inputview}>
              <MaterialIcons name="call" size={24} color="black" />
              <TextInput
                style={creatAccountstyle.input}
                placeholder="Phone Number"
              />
            </View>
            <View style={creatAccountstyle.inputview}>
              <FontAwesome5 name="lock" size={24} color="black" />
              <TextInput
                secureTextEntry={true}
                style={creatAccountstyle.input}
                placeholder="Password"
              />
            </View>

            <View style={creatAccountstyle.sumbitview}>
              <Pressable>
                <Text style={creatAccountstyle.submittext}>Create Account</Text>
              </Pressable>
            </View>
            <View style={creatAccountstyle.orview}>
              <Text style={creatAccountstyle.ortext}>
                -----------Or-----------
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={creatAccountstyle.noaccountview}>
          <Pressable>
            <Text style={{ color: "red" }}>Already have an account</Text>
          </Pressable>
        </View>
        <View style={creatAccountstyle.socialview}>
          <View>
            <AntDesign name="google" size={24} color="black" />
          </View>
          <View>
            <AntDesign name="facebook-square" size={24} color="black" />
          </View>
          <View>
            <AntDesign name="apple1" size={24} color="black" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
