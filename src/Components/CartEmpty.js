import { Box, Text, Center } from "native-base";
import React from "react";
import Colors from "../../src/color";
import { FontAwesome } from "@expo/vector-icons";
import Butone from "./Buttone";

const CartEmpty = () => {
    return(
        <Box flex={1} px={10}>
            <Center h="90%">
                <Center w={200} h={200} bg={Colors.white} rounded="full">
                    <FontAwesome name="shopping-basket" size={64} color={Colors.main}></FontAwesome>
                </Center>
                <Text color={Colors.main} bold mt={20} fontSize={25}>
                    CART IS EMPTY
                </Text>
            </Center>
            <Butone bg={Colors.black} color={Colors.white}>
                START SHOPPING
            </Butone>
        </Box>
    );
}

export default CartEmpty;
