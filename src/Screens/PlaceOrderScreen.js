import { Box, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import OrderIterm from "../Components/OrderIterm";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="Khách Hàng"
            subTitle="Hiếu"
            text="admin@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="Thông Tin Ship"
            subTitle="Ship"
            text="Phương thức thanh toán: Paypal"
            icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="Địa chỉ giao hàng"
            subTitle="Địa Chỉ:"
            text="HANOI, VIETNAM"
            icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          Các Sản Phẩm
        </Heading>
        <OrderIterm/>
        {/* total */}
        <PlaceOrderModel/>
      </Box>
    </Box>
  );
}

export default PlaceOrderScreen;
