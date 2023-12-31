import { View, Text, Box, ScrollView, VStack, FormControl, Input, Button } from "native-base";
import React from "react";
import Colors from "../../color";
import Buttone from "../Buttone";

const Inputs = [
    {
        label:"Tên Đăng Nhập",
        type:"text",
    },
    {
        label:"EMAIL",
        type:"text",
    },
    {
        label:"Nhập Mật Khẩu Mới",
        type:"password",
    },
    {
        label:"Xác thực mật khẩu",
        type:"password",
    }
]

const Profile = () => {
    return (
        <Box h="full" bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    {Inputs.map((i, index) => (
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
                            borderWidth={0}
                            bg={Colors.subGreen}
                            py={4}
                            type={i.type}
                            color={Colors.main}
                            fontSize={20}
                            _focus={{
                                bg: Colors.subGreen,
                                borderColor: Colors.main,
                                borderWidth: 1,
                            }}
                        />
                    </FormControl>
                    ))}
                    <Buttone bg={Colors.main} color={Colors.white} >Cập Nhật Thông Tin</Buttone>
                </VStack>
            </ScrollView>
        </Box>
    );
}

export default Profile;