import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Filmes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Filmes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1427",
  },

  text: {
    fontSize: 26,
    color: "#e9e9e9",
  },
});
