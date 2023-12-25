import { Box, Text, Center, ScrollView, HStack, Button } from "native-base";
import React from "react";
import Colors from "../../src/color";
// import CartEmpty from "../Components/CartEmpty";
import CartIterms from "../Components/CartIterms";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

function CartScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Giỏ Hàng
        </Text>
      </Center>
      {/* CART EMPTY */}
      {/* <CartEmpty /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartIterms />
        {/* total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Tổng</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              10
            </Button>
          </HStack>
        </Center>
        {/* check out */}
        <Center px={5}>
          <Buttone
            bg={Colors.black}
            color={Colors.white}
            mt={10}
            onPress={() => navigation.navigate("Shipping")}
          >
            Thanh Toán
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
