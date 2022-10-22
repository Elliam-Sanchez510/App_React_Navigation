import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  profile: {};
  name: string;
}

export const PopularCreators = ({ profile, name }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profileImg} />
      <Text style={styles.textPopularCreators}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 5,
  },
  textPopularCreators: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
});
