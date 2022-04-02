import React from "react";
import {
  View,
  Text,
  NativeBaseProvider,
  Box,
  Center,
  HStack,
  Pressable,
  Icon,
} from "native-base";
import { Entypo } from "@native-base/icons";
export default function FooterTabs() {
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="white"
        safeAreaTop
        style={{ width: "100%" }}
        alignSelf="center"
      >
        <Center flex={1}></Center>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon as={Entypo} name="user"></Icon>
              {/* <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="white"
                size="sm"
              /> */}
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon as={Entypo} name="user"></Icon>
              {/* <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              /> */}
              <Text color="white" fontSize="12">
                Talkback
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon as={Entypo} name="user"></Icon>
              {/* <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "cart" : "cart-outline"}
                  />
                }
                color="white"
                size="sm"
              /> */}
              <Text color="white" fontSize="12">
                Chat
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon as={Entypo} name="user"></Icon>
              {/* <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                color="white"
                size="sm"
              /> */}
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
