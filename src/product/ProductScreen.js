import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import productstyle from './productstyle';
import { FontAwesome } from "@expo/vector-icons"; 
import { Entypo } from "@expo/vector-icons"; 
//importing font
import { useFonts } from "expo-font";
import { TextInput } from 'react-native-paper';
import Category from './category/Category';
import Resturants from './resturants/Resturants';
import Items from './item/Items';

//the end
// launch screen
const ProductScreen = () => {

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={productstyle.findviews}>
        <Text
          style={{ ...productstyle.usertext, fontFamily: "Roboto-Regular" }}
        >
          Chika
        </Text>
        <View>
          <Text
            style={{
              ...productstyle.foodtext,
              fontFamily: "Roboto-Regular",
            }}
          >
            Find Nigerian
          </Text>
          <Text
            style={{
              ...productstyle.foodtext,
              fontFamily: "Roboto-Regular",
            }}
          >
            Food close to you
          </Text>
        </View>
      </View>
      <View style={productstyle.searchinputview}>
        <View style={productstyle.searchinputview_holder}>
          <Pressable style={productstyle.searchbtn}>
            <FontAwesome name="search" size={24} color="black" />
          </Pressable>
          <TextInput style={productstyle.searchinput} placeholder="Search" />
        </View>
        <View>
          <Pressable style={productstyle.searchrighticon}>
            <Entypo name="flow-parallel" size={30} color="white" />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={productstyle.categoryview}>
          <Category />
        </View>
        <View>
          <Resturants />
        </View>
        <View style={{ margin: 10 }}>
          <Items />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProductScreen

const styles = StyleSheet.create({})