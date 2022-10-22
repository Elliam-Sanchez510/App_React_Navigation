import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const TrendImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../Image/food8.webp")}
        resizeMode="cover"
        style={styles.imgTrend}
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={styles.header}>
          <View style={styles.contStar}>
            <AntDesign name="star" size={18} color="white" />
            <Text style={{ color: "white", marginLeft: 5, fontWeight: "bold" }}>
              4,5
            </Text>
          </View>
          <View style={styles.bookmark}>
            <Ionicons name="ios-bookmark-outline" size={18} color="black" />
          </View>
        </View>
        <Ionicons
          style={styles.caretForward}
          name="md-caret-forward-circle"
          size={65}
          color="rgba(182, 180, 178, 0.9)"
        />
        <View style={styles.footer}>
          <Text style={{ color: "white" }}>15:10</Text>
        </View>
      </ImageBackground>
      <View style={styles.containerB}>
        <Text style={{ fontSize: 17, marginVertical: 10, fontWeight: "bold" }}>
          How to make sushi at home
        </Text>
        <Entypo name="dots-three-horizontal" size={17} color="black" />
      </View>
      <View style={styles.containerC}>
        <Image
          source={require("../../Image/persona2.jpg")}
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
    marginRight: 10,
  },
  imgTrend: {
    height: 200,
    width: 320,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
  contStar: {
    backgroundColor: "rgba(182, 180, 178, 0.9)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  bookmark: {
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "rgba(182, 180, 178, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 30,
    alignSelf: "flex-end",
    marginTop: 25,
    marginHorizontal: 10,
    borderRadius: 10,
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
  caretForward: {
    textAlign: "center",
    marginTop: 30,
  },
});
