import { Box, Center, FormControl, HStack, Input, ScrollView, Text, VStack, View, Image } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethodes = [
  {
    image: require("../../assets/images/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/images/googlepay.png"),
    alt: "googlepay",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/images/cod.png"),
    alt: "cod",
    icon: "FontAwesome",
  },
];

function PaymentScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PHƯƠNG THỨC THANH TOÁN
        </Text>
      </Center>
      {/* SELECTION */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethodes.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={i.image}
                    alt={i.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={24}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}
            <Buttone
              bg={Colors.main}
              color={Colors.white}
              mt={5}
              onPress={() => navigation.navigate("Paceorder")}
            >
              TIẾP TỤC
            </Buttone>
            <Text italic textAlign="center">
              Phương thức thanh toán <Text bold>Paypal</Text> là mặc định
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
