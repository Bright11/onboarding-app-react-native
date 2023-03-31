import {
  FlatList,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import resturantdata from "./resturantdata";
import resturantstyle from "./resturantstyle";

const Resturants = () => {
  return (
    <View style={resturantstyle.resturantviewtop}>
      <Text style={resturantstyle.resturantext}>Resturants</Text>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={resturantdata}
          renderItem={({ item }) => (
            <View style={resturantstyle.rinsturantview}>
              <Image
                style={resturantstyle.rinsturaantimg}
                source={item.image}
              />

              <View style={resturantstyle.rinsturanameview}>
                <Text style={resturantstyle.rinsturaantname}>
                  #{item.price}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={resturantstyle.rinsturaantname}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Resturants;

const styles = StyleSheet.create({});
