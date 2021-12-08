import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
} from "react-native";

export default function Episodes() {
  const [data, setData] = useState();

  const getEpisodes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../Images/rickandmortyBG.jpeg")}
      resizeMode="cover"
    >
      <SafeAreaView>
        {data && (
          <FlatList
            data={data.results}
            keyExtractor={(location) => location.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.ViewCard}>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "lightgreen", fontSize: 20 }}>
                  Season and episode: {item.episode}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Air Date: {item.air_date}
                </Text>
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },
  ViewCard: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "rgb(36, 40, 47)",
  },
});
