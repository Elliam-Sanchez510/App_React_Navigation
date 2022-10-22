import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { SeeAll } from "../Components/homeComponents/SeeAll";
import { TrendImage } from "../Components/homeComponents/TrendImage";
import { PopularCreators } from "../Components/homeComponents/PopularCreators";
import { RecentFoodImag } from "../Components/homeComponents/RecentFoodImag";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
        Encontrar las mejores {"\n"}recetas para cocinar
      </Text>
      <View style={styles.containerSearch}>
        <EvilIcons name="search" size={30} color="grey" />
        <TextInput placeholder="Search recipes" style={styles.searchRecipes} />
      </View>
      <SeeAll text="En tendencia 🔥" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <TrendImage />
        <TrendImage />
      </ScrollView>
      <Text style={styles.textTitleCategory}>Categoria Popular</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.category}>
          <Text style={styles.textCategory}>Salad</Text>
          <View style={styles.containerCategoryRed}>
            <Text style={{ color: "#fff" }}>Breakfast</Text>
          </View>
          <Text style={styles.textCategory}>Appetizer</Text>
          <Text style={styles.textCategory}>Noodle</Text>
          <Text style={styles.textCategory}>Noodle</Text>
        </View>
      </ScrollView>
      {/* <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <HomeScreen />
      </ScrollView> */}
      <SeeAll text="Recientes" />

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <RecentFoodImag />
      </ScrollView>

      <SeeAll text="Creadores Populares" />
      <View style={styles.containerPopularCreators}>
        <PopularCreators
          profile={require("../Image/persona1.jpg")}
          name={"Troyan \nSmith"}
        />
        <PopularCreators
          profile={require("../Image/persona2.jpg")}
          name={"Jamesa \nWolden"}
        />
        <PopularCreators
          profile={require("../Image/persona3.jpg")}
          name={"Roberto \nLouren"}
        />
        <PopularCreators
          profile={require("../Image/persona4.jpg")}
          name={"Niki \nSamantha"}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 25,
  },
  containerSearch: {
    flexDirection: "row",
    margin: 25,
    borderWidth: 0.5,
    borderColor: "grey",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    paddingLeft: 10,
  },
  searchRecipes: {
    marginHorizontal: 10,
  },
  scrollView: {
    marginVertical: 17,
  },
  textTitleCategory: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 2,
  },
  category: {
    flexDirection: "row",
    marginLeft: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCategory: {
    color: "#E23E3E",
    marginRight: 30,
  },
  containerCategoryRed: {
    backgroundColor: "#E23E3E",
    marginRight: 30,
    width: 90,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  containerPopularCreators: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});

export default HomeScreen;
