import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export const TrendImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../Image/food8.webp")}
        resizeMode="cover"
        style={styles.imgTrend}
        imageStyle={{ borderRadius: 15 }}
      ></ImageBackground>
      <View style={styles.containerB}>
        <Text style={{ fontSize: 17, marginVertical: 10, fontWeight: "bold" }}>
          How to make sushi at home
        </Text>
        <Entypo name="dots-three-horizontal" size={20} color="black" />
      </View>
      <View style={styles.containerC}>
        <Image
          source={require("../../Image/file.jpg")}
          style={styles.imgProfileTrend}
        />
        <Text style={{ color: "grey" }}>By Niki Samantha</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginLeft: 30,
  },
  imgTrend: {
    height: 170,
    width: 300,
  },
  containerB: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerC: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgProfileTrend: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 10,
  },
});
