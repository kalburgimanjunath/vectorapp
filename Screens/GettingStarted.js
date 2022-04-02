import React, { Component } from "react";
// import SplashScreen from "react-native-splash-screen";
import { Text, View, Center, ScrollView, VStack } from "native-base";
import RNBootSplash from "react-native-bootsplash";
export default class GettingStarted extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // SplashScreen.hide();
  }
  render() {
    return (
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        flex={1}
        style={{ width: "100%" }}
        onReady={() => RNBootSplash.hide()}
      >
        <ScrollView
          style={{
            display: "flex",
            alignContent: "center",
            width: "100%",
          }}
          maxW="100%"
          _contentContainerStyle={{
            minW: "100%",
            alignItems: "center",
            marginTop: "0",
          }}
        >
          <VStack alignItems="center" style={{ width: "100%" }}>
            <Text>Getting Started</Text>
          </VStack>
        </ScrollView>
      </Center>
    );
  }
}
