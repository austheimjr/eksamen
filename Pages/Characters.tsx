import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TextInput,
} from "react-native";

export default function Characters() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getCharacter = async (name: string) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      const json = await response.json();
      setData(json);
      setFilteredData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const onSearchChange = (text: string) => {
    if (text !== "") {
      setSearch(text);
    } else {
      setSearch(text);
      getCharacter(text);
    }
  };

  const handleSearch = (text: string) => {
    console.log("SUBMITTED");

    if (search == "") {
      getCharacter("");
    } else {
      getCharacter(text);
    }
  };

  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../Images/rickandmortyBG.jpeg")}
    >
      <SafeAreaView>
        <TextInput
          placeholder="search for characters"
          placeholderTextColor="black"
          style={styles.textInput}
          onChangeText={onSearchChange}
          value={search}
          autoCorrect={false}
          onSubmitEditing={() => handleSearch(search)}
        />

        {data && (
          <FlatList
            data={data.results}
            keyExtractor={(character) => character.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.ViewCard}>
                <Text
                  style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Species: {item.species}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Gender: {item.gender}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Last seen: {item.status}
                </Text>
                <Image style={styles.ImgStyle} source={{ uri: item.image }} />
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
  ImgStyle: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: "white",
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,

    margin: 5,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "hsl(120, 100%, 46%)",
  },
});
