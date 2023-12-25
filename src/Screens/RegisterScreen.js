import { Box, View, Text, Image, Heading, VStack, Input, Button, Pressable } from "native-base";
import React from "react";
import Colors from "../color";
import { MaterialCommunityIcons, Entypo, FontAwesome } from "@expo/vector-icons";

function RegisterScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.white}>
      {/* <Image
          flex={1}
          alt="Logo"
          resizeMode="cover"
          size="lg"
          w="full"
          source={require("../../assets/cover.png")}
        /> */}
      <Box
        w="full"
        h="full"
        position="absolute"
        top="150"
        left="50"
        alignContent="center"
        // px="6"
        // justifyContent="center"
      >
        <Heading>Sign up</Heading>
        <VStack space={5} pt="6">
          {/* username đăng nhập */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color="black" />
            }
            variant="underlined"
            placeholder="username"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* gmail đăng nhập */}
          <Input
            InputLeftElement={
              <MaterialCommunityIcons name="gmail" size={20} color="black" />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* mật khẩu */}
          <Input
            InputLeftElement={<Entypo name="key" size={20} color="black" />}
            variant="underlined"
            placeholder="********"
            w="70%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{ bg: Colors.main }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          alignContent="center"
          onPress={() => navigation.navigate("Login")}
        >
          SIGN UP
        </Button>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray} alignContent="center">
            LOGIN
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
