import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import TabNavigation from "./Navigations/TabNavigation";
// import MapView from "react-native-maps";

export default function App() {
  // const onRegionChange = (Region) => {
  //   console.log(Region);
  // };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <MapView
        style={styles.maps}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: -7.310435844561978,
          latitudeDelta: 0.005251309080501976,
          longitude: 112.72867960855365,
          longitudeDelta: 0.002587325870990753,
        }}
      ></MapView>
      <StatusBar style="auto" /> */}

      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  // maps: {
  //   width: "100%",
  //   height: "100%",
  // },
});
