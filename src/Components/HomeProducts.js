import React from "react";
import { Flex, ScrollView, Box, Pressable, Image, Heading, Text } from "native-base";
import Colors from "../color";
import products from "../data/Products";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

function HomeProducts() {
    const navigation = useNavigation();
    return (
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex 
                flexWrap="wrap" 
                direction="row"
                justifyContent="space-between"
                px={6}
            >
                {products.map((product) =>(
                    <Pressable 
                        onPress={() => navigation.navigate("Single", product)}
                        key={product._id} w="47%" bg={Colors.home} rounded="md" shadow={2} pt={0.5} my={3} pb={5} overflow="hidden"
                    >
                        <Image source={{uri:product.image}} alt={product.name} w="full" h={24} resizeMode="contain" />
                        <Box px={4} pt={1}>
                            <Heading size="sm" bold>
                                ${product.price}
                            </Heading>
                            <Text fontSize={10} mt={1} isTruncated w="full" bold>
                                {product.name}
                            </Text>
                            {/* rating */}
                            <Rating value={product.rating}/>
                        </Box>
                    </Pressable>
                ))}
            </Flex>
        </ScrollView>
    );
}

export default HomeProducts;
