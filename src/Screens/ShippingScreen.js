import { Box, Center, FormControl, Input, ScrollView, Text, VStack, View } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label: "Thành Phố",
    type: "text",
  },
  {
    label: "Quốc Gia",
    type: "text",
  },
  {
    label: "Mã Bưu Điện",
    type: "text",
  },
  {
    label: "Địa Chỉ",
    type: "text",
  },
];

function ShippingScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          ĐỊA CHỈ GIAO HÀNG
        </Text>
      </Center>
      {/* INPUT */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={i.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <Buttone
              bg={Colors.main}
              color={Colors.white}
              mt={5}
              onPress={() => navigation.navigate("Checkout")}
            >
              TIẾP TỤC
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
