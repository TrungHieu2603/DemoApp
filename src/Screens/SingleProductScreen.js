import { Box, ScrollView, Text, View, Image, Heading, HStack, Spacer } from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({route}) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={350}
          resizeMode="contain"
        ></Image>
        <Heading bold mb={2} lineHeight={35}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <>
              <NumericInput
                value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.deepGray}
                rounded
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
            </>
          ) : (
            <Heading bold color={Colors.red} fontSize={19}>
              Hết Hàng
            </Heading>
          )}
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <Buttone
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          THÊM VÀO GIỎ
        </Buttone>
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
