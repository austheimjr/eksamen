import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
} from "react-native";

export default function Locations() {
  const [data, setData] = useState();

  const getLocations = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/location");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocations();
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
                  style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Type: {item.type}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Dimension: {item.dimension}
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
    borderWidth: 3,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "rgb(36, 40, 47)",
  },
});
