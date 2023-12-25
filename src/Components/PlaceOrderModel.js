import { Box, Button, Center, Heading, Modal, ScrollView, Text, VStack, View, HStack } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const OrdersInfos =[
    {
        title:"Thành Tiền",
        price:123,
        color:"black"
    },
    {
        title:"Giá Ship",
        price:12,
        color:"black"
    },
    {
        title:"Thuế",
        price:11,
        color:"black"
    },
    {
        title:"Tổng thanh toán",
        price:146,
        color:"main"
    },
];

const PlaceOrderModel = () => {
    const navigation = useNavigation();
    const [ ShowModel , setShowModel ] = useState(false);
    return (
        <Center>
            <Buttone
                onPress={() => setShowModel(true)}
                bg={Colors.black}
                color={Colors.white}
                mt={5}
            >
                XEM TẤT CẢ
            </Buttone>
            <Modal
                isOpen={ShowModel}
                onClose={() => setShowModel(false)}
                size="lg"
            >
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrdersInfos.map((i, index) => (
                                <HStack 
                                    key={index}
                                    alignItems="center" justifyContent="space-between">
                                    <Text fontWeight="medium">{i.title}</Text>
                                    <Text color={ i.color === "main" ? Colors.main : Colors.black} bold
                                >
                                    ${i.price}
                                </Text>
                            </HStack>
                            ))}
                            
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button flex={1} bg={Colors.main} h={45}
                        _text={{
                            color: Colors.white,
                        }}
                        onPress={() => {
                            navigation.navigate("Order");
                            setShowModel(false);
                        }}
                        _pressed={{
                            bg: Colors.main,
                        }}
                        >Đặt Hàng</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default PlaceOrderModel;
