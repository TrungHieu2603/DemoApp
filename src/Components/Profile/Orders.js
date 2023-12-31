import { View, Text, Box, ScrollView, VStack, FormControl, Input, Button, HStack } from "native-base";
import React from "react";
import Colors from "../../color";
import { Pressable } from "react-native";

const Orders = () => {
    return (
        <Box h="full" bg={Colors.white} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* da thanh toan */}
                <Pressable>
                    <HStack
                        space={4}
                        justifyContent="space-between"
                        alignItems="center"
                        bg={Colors.subGreen}
                        py={5}
                        px={2}
                    >
                        <Text fontSize={12} color={Colors.blue} isTruncated>02062003</Text>
                        <Text fontSize={12} bold color={Colors.black} isTruncated>Đã Thanh Toán</Text>
                        <Text fontSize={11} italic color={Colors.black} isTruncated>20/11/2023</Text>
                        <Button
                            px={7}
                            py={1.5}
                            rounded={50}
                            bg={Colors.main}
                            _text={{
                                color: Colors.white,
                            }}
                            _pressed={{
                                bg: Colors.main,
                            }}
                            
                        >
                            $181
                        </Button>
                    </HStack>
                </Pressable>
                {/* chua thanh toan */}
                <Pressable>
                    <HStack
                        space={4}
                        justifyContent="space-between"
                        alignItems="center"
                        py={5}
                        px={2}
                    >
                        <Text fontSize={12} color={Colors.blue} isTruncated>02062003</Text>
                        <Text fontSize={12} bold color={Colors.black} isTruncated>Chưa Thanh Toán</Text>
                        <Text fontSize={11} italic color={Colors.black} isTruncated>20/11/2023</Text>
                        <Button
                            px={7}
                            py={1.5}
                            rounded={50}
                            bg={Colors.red}
                            _text={{
                                color: Colors.white,
                            }}
                            _pressed={{
                                bg: Colors.main,
                            }}
                            
                        >
                            $181
                        </Button>
                    </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    );
};

export default Orders;
