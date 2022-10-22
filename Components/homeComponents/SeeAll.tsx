import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  text: string;
}

export const SeeAll = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.principalText}>{text}</Text>
      </View>
      <View style={styles.containerB}>
        <Text style={styles.textSeeAll}>See all</Text>
        <AntDesign name="arrowright" size={24} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    alignItems: "center",
  },
  principalText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  containerB: {
    marginTop: 10,
    flexDirection: "row",
  },
  textSeeAll: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#E23E3E",
    marginRight: 10,
  },
});
