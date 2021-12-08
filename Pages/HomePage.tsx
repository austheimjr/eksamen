import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  HomePage: undefined;
  Characters: undefined;
  Locations: undefined;
  Episodes: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "HomePage">;

export default function HomePage({ navigation }: Props) {
  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../Images/rickandmortyBG.jpeg")}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.SafeAreaView}>
        <Image
          style={styles.headerImage}
          source={require("../Images/headerImage.png")}
        />

        <View style={styles.Top}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => navigation.navigate("Characters")}
          >
            <Text style={styles.Characters}> Characters </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Middle}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => navigation.navigate("Locations")}
          >
            <Text style={styles.Locations}> Locations </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Bottom}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => navigation.navigate("Episodes")}
          >
            <Text style={styles.Episodes}> Episodes </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
  },
  headerImage: {
    flex: 0.2,
    marginBottom: 40,
    marginTop: -100,
    width: "100%",
  },
  Top: {
    flex: 0.2,
    borderRadius: 20,
    backgroundColor: "hsl(120, 100%, 46%)",
    margin: 20,
  },
  Middle: {
    flex: 0.2,
    borderRadius: 20,
    backgroundColor: "hsl(120, 100%, 46%)",
    margin: 20,
  },
  Bottom: {
    flex: 0.2,
    borderRadius: 20,
    backgroundColor: "hsl(120, 100%, 46%)",
    margin: 20,
  },
  Characters: {
    color: "black",
    fontSize: 30,
    position: "absolute",
  },
  Locations: {
    color: "black",
    fontSize: 30,
  },
  Episodes: {
    color: "black",
    fontSize: 30,
  },
  Btn: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    color: "green",
  },
});
