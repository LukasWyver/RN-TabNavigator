import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Inicio</Text>
      <Button
        title="Favoritos"
        color="#8257e5"
        onPress={() => navigation.navigate("Favoritos")}
      />
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
    marginBottom: 30,
  },
});
