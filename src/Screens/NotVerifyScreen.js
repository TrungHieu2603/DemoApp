import { Box, Image, VStack, Center } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.white} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/homedecor.png")}
          alt="Logo"
          size="250"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.black} color={Colors.white}>REGISTER</Buttone>
        <Buttone bg={Colors.black} color={Colors.white}>LOGIN</Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
