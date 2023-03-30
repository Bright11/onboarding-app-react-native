import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import verificationstyle from './verificationstyle';
import { SafeAreaView } from 'react-native';

const Verification = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Verification code",
    });
  }, [navigation]);
  //verification screen
  return (
    <SafeAreaView style={verificationstyle.verificationsafeview}>
      <View style={verificationstyle.verificationviews}>
        <Text style={verificationstyle.codetext}>
          Enter the OTP sent to +233558602996
        </Text>
        <View style={verificationstyle.inputview_content}>
          <View style={verificationstyle.inputview}>
            <View>
              <TextInput style={verificationstyle.input} value="1" />
            </View>
            <View>
              <TextInput style={verificationstyle.input} value="1" />
            </View>
            <View>
              <TextInput style={verificationstyle.input} value="1" />
            </View>
            <View>
              <TextInput style={verificationstyle.input} value="1" />
            </View>
          </View>
          <Pressable style={{ alignSelf: "center", marginTop: 10 }}>
            <Text style={verificationstyle.codetext}>
              Didin't get the OTP code?
            </Text>
          </Pressable>
        </View>
        <KeyboardAvoidingView>
          <View style={verificationstyle.submitbtn}>
            <Pressable onPress={() => navigation.replace("Home")}>
              <Text style={verificationstyle.codetextsubmit}>Verify</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Verification

const styles = StyleSheet.create({})