import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const RecentFoodImag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerB}>
        <Image source={require("../../Image/food4.jpeg")} style={styles.img} />
        <Text style={styles.foodName}>Indonesian {"\n"}chicken burger</Text>
        <Text style={styles.creatorName}>By Adrianna Curt</Text>
      </View>
      <View style={styles.containerB}>
        <Image source={require("../../Image/food5.jpeg")} style={styles.img} />
        <Text style={styles.foodName}>Indonesian {"\n"}chicken burger</Text>
        <Text style={styles.creatorName}>By Adrianna Curt</Text>
      </View>
      <View style={styles.containerB}>
        <Image source={require("../../Image/food6.jpg")} style={styles.img} />
        <Text style={styles.foodName}>Indonesian {"\n"}chicken burger</Text>
        <Text style={styles.creatorName}>By Adrianna Curt</Text>
      </View>
      <View style={styles.containerB}>
        <Image source={require("../../Image/food8.webp")} style={styles.img} />
        <Text style={styles.foodName}>Indonesian {"\n"}chicken burger</Text>
        <Text style={styles.creatorName}>By Adrianna Curt</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    flexDirection: "row",
  },
  containerB: {
    marginRight: 10,
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
  },
  foodName: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  },
  creatorName: {
    color: "grey",
    fontSize: 10,
    marginTop: 5,
  },
});
