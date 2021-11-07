import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

/*import navigation container */
import { NavigationContainer } from "@react-navigation/native";

/*import o tipo de navegação */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

/*import páginas */
import Home from "./src/pages/Home";
import Filmes from "./src/pages/Filmes";
import Favoritos from "./src/pages/Favoritos";

/*criando uma variavel para utilizar os icones */
const icons = {
  Home: { name: "home" },
  Filmes: { name: "movie" },
  Favoritos: { name: "favorite" },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <MaterialIcons name={name} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: "#16101f",
            height: 64,
            paddingBottom: 8,
            paddingTop: 8,
            borderColor: "transparent",
          },
          activeTintColor: "#FFC107",
          inactiveTintColor: "#7952B3",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Filmes" component={Filmes} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
