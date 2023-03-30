import { FlatList, Pressable, StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import resturantdata from '../resturants/resturantdata';
import itemstyle from './itemstyle';
import { useFonts } from "expo-font";
const Items = ({ navigation }) => {

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../../assets/fonts/Roboto-Italic.ttf"),
  });
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={resturantdata}
        // numColumns={2}
        horizontal={true}
        renderItem={({ item }) => (
          <Pressable style={itemstyle.itemview}>
            <Image style={itemstyle.itemimg} source={item.image} />
            <View>
              <Text style={{ fontFamily: "Roboto-Regular" }}>{item.name}</Text>

              <Text style={{ fontFamily: "Roboto-Regular" }} numberOfLines={1}>
                {item.description.length < 10
                  ? `${item.description}`
                  : `${item.description.substring(0, 10)}...`}
              </Text>
              <Text style={{ fontFamily: "Roboto-Regular" }}>
                ${item.price}
              </Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Items

const styles = StyleSheet.create({})