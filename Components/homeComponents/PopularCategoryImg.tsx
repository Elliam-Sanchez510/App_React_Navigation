import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  imgSaucer: {};
  textName: string;
  textMinute: string;
}

export const PopularCategoryImg = ({
  imgSaucer,
  textName,
  textMinute,
}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={imgSaucer} style={styles.imageCircle} />
        <Text style={styles.textNamePlate}>{textName}</Text>
        <View style={styles.containerTime}>
          <Text style={styles.textTime}>Time</Text>
          <View style={styles.subContainerTime}>
            <Text style={styles.textMinute}>{textMinute}</Text>
            <View style={styles.bookmark}>
              <Ionicons name="ios-bookmark-outline" size={15} color="black" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    borderRadius: 15,
    height: 200,
    width: 180,
    marginTop: 70,
    marginLeft: 30,
    marginBottom: 20,
  },
  imageCircle: {
    marginTop: -80,
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  textNamePlate: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  bookmark: {
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTime: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  textTime: {
    color: "grey",
    marginVertical: 3,
    fontWeight: "400",
  },
  textMinute: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subContainerTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
