import { Box, Text, Center, View, Heading, Image } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";

function ProfileScreen() {
return (
    <>
        <Center bg={Colors.main} pt={10} pb={6}>
            <Image
                source={{ uri: "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg",}}
                alt="profile"
                w={24}
                h={24}
                resizeMode="cover"
                rounded="full"
            />
            <Heading bold font={15} isTruncated my={2} color={Colors.white}>
                ADMIN 
            </Heading>
        </Center>
        {/* Tabs */}
            <Tabs/>
    </>
);
}
export default ProfileScreen;
