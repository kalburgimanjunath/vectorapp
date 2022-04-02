import React, { useState, createRef } from "react";
import {
  Text,
  Link,
  View,
  Image,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Button,
  ScrollView,
  Icon,
  IconButton,
  Box,
  Pressable,
  Actionsheet,
  Stagger,
  StatusBar,
} from "native-base";
import { Entypo } from "@native-base/icons";
import "react-native-gesture-handler";
import RNBootSplash from "react-native-bootsplash";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NativeBaseIcon from "./components/NativeBaseIcon";
import FooterTabs from "./components/FooterTabs";
// import Stagger from "./components/Stagger";
import Category from "./components/Category";
import { Categories, blogs } from "./data/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDisclose } from "native-base";
import BlogScreen from "./Screens/BlogScreen";
import GettingStarted from "./Screens/GettingStarted";
import * as Speech from "expo-speech";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import ProfileScreen from "./Screens/ProfileScreen";
import MessageScreen from "./Screens/MessageScreen";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
const HomeCategoryItem = ({ item, type }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const speak = (text) => {
    Speech.speak(text);
  };

  return (
    <View
      style={{
        flex: "0 33%",
        margin: "20px",
        textAlign: "center",
        padding: "5px 10px",
      }}
    >
      {type == "category" ? (
        <>
          <Image
            style={{ minWidth: "300px", minHeight: "200px" }}
            source={{
              uri: item.url,
            }}
            alt="image"
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              padding: "5px 10px",
            }}
          >
            {item.title}
          </Text>
        </>
      ) : (
        <>
          <Image
            width={300}
            height={200}
            source={{
              uri: item.url,
            }}
            alt="image"
            onPress={() => speak(item.content)}
          />
          <Text style={{ fontWeight: "bold", fontSize: "14px" }}>
            {item.title}
          </Text>
          <Button onPress={() => speak(item.content)}>
            Press to hear some words
          </Button>
          <Button onPress={onOpen}>Language</Button>
          <Button onPress={onOpen}>
            Pitch
            {/* <Icon as={Entypo} name="message"></Icon> */}
          </Button>
          <Button onPress={onOpen}>
            Voices
            {/* <Icon as={Entypo} name="user"></Icon> */}
          </Button>
        </>
      )}

      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
        <Actionsheet.Content borderTopRadius="0">
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              English
            </Text>
          </Box>
          <Actionsheet.Item>Hindi</Actionsheet.Item>
          <Actionsheet.Item>Kannada</Actionsheet.Item>
          <Actionsheet.Item>Marathi</Actionsheet.Item>
          <Actionsheet.Item>Tamil</Actionsheet.Item>
          <Actionsheet.Item>Telugu</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};
function HomeScreen({ navigation }) {
  const [selected, setSelected] = React.useState(1);
  const navigationRef = createRef();
  const nav = () => navigationRef.current;
  const { isOpen, onToggle } = useDisclose();

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      flex={1}
      style={{ width: "100%" }}
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
          <AppBar />
          {/* <Stagger /> */}

          {/* {Categories && Categories.length > 0 ? (
              <Category items={Categories} />
            ) : (
              <View>
                <Text>Loading</Text>
              </View>
            )} */}
          {/* <Stagger /> */}
          {/* <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Code>App.js</Code>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link> */}
          <ToggleDarkMode />

          <View>
            <Box alignItems="center">
              <Stagger
                visible={isOpen}
                initial={{
                  opacity: 0,
                  scale: 0,
                  translateY: 34,
                }}
                animate={{
                  translateY: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    mass: 0.8,
                    stagger: {
                      offset: 30,
                      reverse: true,
                    },
                  },
                }}
                exit={{
                  translateY: 34,
                  scale: 0.5,
                  opacity: 0,
                  transition: {
                    duration: 100,
                    stagger: {
                      offset: 30,
                      reverse: true,
                    },
                  },
                }}
              >
                <Icon as={Entypo} name="user" onPress={onToggle}></Icon>

                <Icon as={Entypo} name="user" onPress={onToggle}></Icon>

                <Icon as={Entypo} name="user" onPress={onToggle}></Icon>
              </Stagger>
            </Box>
            <HStack justifyContent="center">
              <Icon as={Entypo} name="user" onPress={onToggle}></Icon>
            </HStack>
            <Button
              onPress={() => navigation.navigate("Talkback")}
              color="primary.500"
              underline
              fontSize={"xl"}
            >
              START
              {/* Start <Icon as={Entypo} name="user"></Icon> */}
            </Button>
          </View>
        </VStack>
      </ScrollView>
    </Center>
  );
}
function TalkbackScreen({ navigation }) {
  return (
    <ScrollView
      style={{
        display: "flex",
        alignContent: "center",
        width: "100%",
        flexWrap: "wrap",
      }}
      maxW="100%"
      _contentContainerStyle={{
        px: "0px",
        mb: "4",
        minW: "300",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10",
      }}
    >
      <VStack style={{ display: "flex", flexFlow: "wrap", margin: "0 10%" }}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Blogs")}
        >
          Blog
        </Button>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("MessagePage")}
        >
          Messages
        </Button>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("ProfilePage")}
        >
          Profile
        </Button>
        {Categories.map((item) => {
          return (
            <TouchableOpacity
              key={item.title}
              onPress={() => {
                navigation.navigate("Details", {
                  itemId: item.title,
                  subitems: item.subitems,
                  otherParam: "anything you want here",
                });
              }}
            >
              <HomeCategoryItem item={item} type="category" />
            </TouchableOpacity>
          );
        })}
      </VStack>
    </ScrollView>
  );
}
function DetailScreen({ route, navigation }) {
  const { itemId, otherParam, subitems } = route.params;
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <ScrollView
      style={{
        display: "flex",
        alignContent: "center",
        width: "100%",
      }}
      maxW="100%"
      _contentContainerStyle={{
        px: "0px",
        mb: "4",
        minW: "300",
        alignItems: "center",
        marginTop: "10",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>item: {itemId}</Text>
      {subitems.map((item) => {
        return <HomeCategoryItem key={item.title} item={item} type="item" />;
      })}
    </ScrollView>
  );
}
function BlogPage({ navigation }) {
  return (
    <ScrollView
      style={{
        display: "flex",
        alignContent: "center",
        width: "100%",
      }}
      maxW="100%"
      _contentContainerStyle={{
        px: "0px",
        mb: "4",
        minW: "300",
        alignItems: "center",
        marginTop: "10",
      }}
    >
      <BlogScreen />
    </ScrollView>
  );
}
function MessagePage({ navigation }) {
  return (
    <ScrollView
      style={{
        display: "flex",
        alignContent: "center",
        width: "100%",
      }}
      maxW="100%"
      _contentContainerStyle={{
        px: "0px",
        mb: "4",
        minW: "300",
        alignItems: "center",
        marginTop: "10",
      }}
    >
      <MessageScreen />
    </ScrollView>
  );
}
function ProfilePage({ navigation }) {
  return (
    <ScrollView
      style={{
        display: "flex",
        alignContent: "center",
        width: "100%",
      }}
      maxW="100%"
      _contentContainerStyle={{
        px: "0px",
        mb: "4",
        minW: "300",
        alignItems: "center",
        marginTop: "10",
      }}
    >
      <ProfileScreen />
    </ScrollView>
  );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppBar() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#6200ee"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="favorite"
                size="sm"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Talkback"
            component={TalkbackScreen}
            options={({ navigation, route }) => ({
              headerTitle: "Talkback",
            })}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={({ navigation, route }) => ({
              headerTitle: "Details",
            })}
          />
          <Stack.Screen
            name="Blogs"
            component={BlogPage}
            options={({ navigation, route }) => ({
              headerTitle: "Blog",
            })}
          />
          <Stack.Screen
            name="MessagePage"
            component={MessageScreen}
            options={({ navigation, route }) => ({
              headerTitle: "Messages",
            })}
          />
          <Stack.Screen
            name="ProfilePage"
            component={ProfileScreen}
            options={({ navigation, route }) => ({
              headerTitle: "Profile",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
