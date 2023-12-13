import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

// let locationOfInterest = [
//   {
//     title: "Lapangan Basket Unesa",
//     location: {
//       latitude: -7.313344995805432,
//       longitude: 112.72816160693765,
//     },
//     description:
//       "Universitas Negeri Surabaya, Cab. Ketintang",
//   },
//   {
//     title: "Stadium Tennis ITTS",
//     location: {
//       latitude: -7.311147177343846,
//       longitude: 112.72803520783782,
//     },
//     description: "Stadium Tennis",
//   },
// ];
export default function Search() {
  const [location, setlocation] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setlocation(currentLocation);
      console.log("Location : ");
      console.log(currentLocation);
    };
    getPermissions();
  }, []);

  const geocode = async () => {
    const geocodedLocation = await Location.geocodeAsync(address);
    console.log("Geocoded Address");
    console.log(geocodedLocation);
  };

  const reversegeocode = async () => {
    const reversegeocodeaddress = await Location.reverseGeocodeAsync({
      longitude: location?.coords?.longitude || 0,
      latitude: location?.coords?.latitude || 0,
    });
    console.log("Reverse Geocoded:");
    console.log(reversegeocodeaddress);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder=" Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Geocode Address" onPress={geocode} />
      <Button
        title="Reverse Geocode Current Location"
        onPress={reversegeocode}
      />
      {location && (
        <MapView
          style={styles.maps}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005251309080501976,
            longitudeDelta: 0.002587325870990753,
          }}
        >
          {/* You can add additional components/markers here if needed */}
          <Marker
            
            coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            }}
            title="You are here"
            description="Your current location"
            pinColor="cyan"
          />
        </MapView>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
// const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
//   longitude: 148.11,
//   latitude: -26.85,
// });
// const onRegionChange = (Region) => {
//   console.log(Region);
// };
// const ShowLocationsOfInterest = () => {
//   return locationOfInterest.map((item, index) => {
//     return (
//       <Marker
//         key={index}
//         coordinate={item.location}
//         title={item.title}
//         description={item.description}
//       />
//     );
//   });
// };

//   return (
//     <View>
//       <MapView
//         style={styles.maps}
//         onRegionChange={onRegionChange}
//         initialRegion={{
//           latitude: -7.310435844561978,
//           latitudeDelta: 0.005251309080501976,
//           longitude: 112.72867960855365,
//           longitudeDelta: 0.002587325870990753,
//         }}
//       >
//         {ShowLocationsOfInterest()}
//         <Marker
//           draggable
//           coordinate={draggableMarkerCoord}
//           onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
//         />
//       </MapView>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  maps: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});

// ////// GPT BENER ////////
// export default function Search() {
//   const [location, setlocation] = useState();
//   const [address, setAddress] = useState();

//   useEffect(() => {
//     const getPermissions = async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log("Please grant location permissions");
//         return;
//       }

//       let currentLocation = await Location.getCurrentPositionAsync({});
//       setlocation(currentLocation);
//       console.log("Location : ");
//       console.log(currentLocation);
//     };
//     getPermissions();
//   }, []);

//   const geocode = async () => {
//     const geocodedLocation = await Location.geocodeAsync(address);
//     console.log("Geocoded Address");
//     console.log(geocodedLocation);
//   };

//   const reversegeocode = async () => {
//     const reversegeocodeaddress = await Location.reverseGeocodeAsync({
//       longitude: location?.coords?.longitude || 0,
//       latitude: location?.coords?.latitude || 0,
//     });
//     console.log("Reverse Geocoded:");
//     console.log(reversegeocodeaddress);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder=" Address"
//         value={address}
//         onChangeText={setAddress}
//       />
//       <Button title="Geocode Address" onPress={geocode} />
//       <Button
//         title="Reverse Geocode Current Location"
//         onPress={reversegeocode}
//       />
//       {location && (
//         <MapView
//           style={styles.maps}
//           initialRegion={{
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//             latitudeDelta: 0.005251309080501976,
//             longitudeDelta: 0.002587325870990753,
//           }}
//         >
//           {/* You can add additional components/markers here if needed */}
//         </MapView>
//       )}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   maps: {
//     width: "100%",
//     height: "100%",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 20,
//   },
// });
