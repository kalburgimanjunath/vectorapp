import {
  View,
  Text,
  Image,
  Center,
  ScrollView,
  Button,
  Box,
  Flex,
  Stack,
  VStack,
  Actionsheet,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDisclose } from "native-base";
const CategoryItem = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center size="16" style={{ margin: "10px" }}>
      <Image
        shadow={2}
        source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
        alt="Alternate Text"
        width={300}
        height={200}
      />
      <Text>{item.title}</Text>
      <Button onPress={onOpen}>Actionsheet</Button>
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
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};
export default function Category({ items }) {
  return (
    <Box flex="1">
      <Text>Category</Text>
      <VStack space="20" mt="10" px="8">
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
          <View style={{ display: "block", columnCount: 2, margin: 10 }}>
            {items.map((item) => {
              return <CategoryItem key={item.id} item={item} />;
            })}
          </View>
        </Stack>
      </VStack>
    </Box>
  );
}
