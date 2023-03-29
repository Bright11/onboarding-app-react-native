import { Alert, Image, Text, View } from "react-native";
import React from "react";

import Onboarding from "react-native-onboarding-swiper";
import onboardingstyle from "./images/onboardingstyle";

// https://www.figma.com/file/4vGZtsKEU8bdJ8b4i4MzH6/Diagram---naija-foods?node-id=0-8&t=QHcfdPv8stYV5nwf-0
const Boarding = ({ Done }) => (
  // calling onboarding from it's screen

  <Onboarding
    // naviget when skip
    onSkip={() => {
      Alert.alert("hi", "Skip");
    }}
    titleStyles={{ color: "black" }}
    subTitleStyles={{ color: "black", marginBottom: 300 }}
    containerStyles={{
      height: "60%",
      width: "100%",
      paddingTop: 10,
    }}
    imageContainerStyles={{
      height: "65%",
      width: "100%",
    }}
    bottomBarHeight={50}
    showPagination={true}
    bottomBarColor="#037F00"
    DoneButtonComponent={Done}
    pages={[
      {
        image: (
          <Image
            style={onboardingstyle.onboardimg}
            source={require("./images/img.png")}
          />
        ),
        title: "Accra Ghana",
        subtitle: "Shop on the way",
      },
      {
       
        image: (
          
          <Image
            style={onboardingstyle.onboardimg}
            source={require("./images/img2.jpg")}
          />
        ),
        title: "Place Your Order",
        subtitle: "Feel the test it quality",
      },
      {
        image: (
          <Image
            style={onboardingstyle.onboardimg}
            source={require("./images/img3.jpg")}
          />
        ),
        title: "Get Delivery",
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />
);

export default Boarding;
