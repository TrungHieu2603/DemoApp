import { Box, Button, Center, Heading, Modal, ScrollView, Text, VStack, View, HStack, Pressable, Image } from "native-base";
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
        title:"Tổng Giá",
        price:146,
        color:"main"
    },
];

const OrderModel = () => {
    const [ ShowModel , setShowModel ] = useState(false);
    const navigation = useNavigation();
    return (
        <Center>
            <Buttone
                onPress={() => setShowModel(true)}
                bg={Colors.main}
                color={Colors.white}
                mt={5}
            >
                Tổng Giá Tiền Thanh Toán
            </Buttone>
            <Modal
                isOpen={ShowModel}
                onClose={() => setShowModel(false)}
                size="lg"
            >
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header>Đơn Hàng</Modal.Header>
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
                        <Pressable w="full" justifyContent="center" bg={Colors.paypal} h={45} rounded={3} overflow="hidden" onPress={() => setShowModel(false)}>
                            <Image source={require("../../assets/images/paypal.png")}
                            alt="paypal"
                            resizeMode="contain"
                            w="full"
                            h="34"
                            />
                        </Pressable>
                        <Button w="full" mt={2} bg={Colors.black} h={45}
                        _text={{
                            color: Colors.white,
                        }}
                        onPress={() => {
                            navigation.navigate("Home");
                            setShowModel(false);
                        }}
                        _pressed={{
                            bg: Colors.main,
                        }}
                        >Thanh Toán Sau</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default OrderModel;
