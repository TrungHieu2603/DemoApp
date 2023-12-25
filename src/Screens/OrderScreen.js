import { Box, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import OrderIterm from "../Components/OrderIterm";
import OrderModel from "../Components/OrderModel";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

function OrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="Thông Tin Đơn Hàng"
            success
            subTitle="Đang giao"
            text="Phương thức thanh toán: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="Địa Chỉ Giao Hàng"
            subTitle="Địa Chỉ:"
            danger
            text="HANOI, VIETNAM"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          Đơn Hàng
        </Heading>
        <OrderIterm />
        {/* total */}
        <OrderModel />
      </Box>
    </Box>
  );
}

export default OrderScreen;
