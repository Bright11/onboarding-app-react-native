import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native';
import categorydata from './categorydata';
import categorystyle from './categorystyle';
//importing font
import { useFonts } from "expo-font";
const Category = () => {
	const [pressed, setPressed] = useState(null);
  const changecolor = (cat) => {
   
    setPressed(cat.name);
	};
	const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
  });
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={categorydata}
      renderItem={({ item }) => (
        <>
          {pressed === item.name ? (
            <Pressable
              style={{
                ...categorystyle.categoryactive,
                fontFamily: "Roboto-Regular",
              }}
            >
              <Text
                style={{
                  ...categorystyle.categoryactivetext,
                  fontFamily: "Roboto-Regular",
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => changecolor(item)}
              style={categorystyle.cate_holder}
            >
              <Text
                style={{
                  ...categorystyle.cate_holdertext,
                  fontFamily: "Roboto-Regular",
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        </>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default Category

const styles = StyleSheet.create({})