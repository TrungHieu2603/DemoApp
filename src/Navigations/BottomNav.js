import { Center, Pressable, Text } from "native-base";
import React from "react";
import Colors from "../color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNav from "../Navigations/StackNav";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator()
const CustomTab = ({ children, onPress }) => (
    <Pressable
        onPress={onPress}
        h={70}
        w={70}
        _pressed={{ bg: Colors.white }}
        rounded="full"
        bg={Colors.main}
        top={-30}
        shadow={2}
    >
        {children}
    </Pressable>
);

const BottomNav = () => {
    return (
        <Tab.Navigator
            backBehavior="Main"
            initialRouteName="Main"
            screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle:{...styles.tab},
                headerShown:false,
                tabBarHideOnKeyboard:true,
            }}
        >
            <Tab.Screen name="Main" component={StackNav} options={{
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <Entypo name="home" size={24} colors={Colors.main}/>
                        ): (
                            <AntDesign name="home" size={24} colors={Colors.black} />
                        )}
                    </Center>
                ),
            }}/>
            {/* Cart */}
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarButton: (props) => <CustomTab {...props} />,
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <FontAwesome5 name="shopping-basket" size={24} colors={Colors.main}/>
                        ): (
                            <MaterialCommunityIcons name="shopping-outline" size={24} colors={Colors.black} />
                        )}
                    </Center>
                ),
            }}/>
            {/* profile */}
            <Tab.Screen name="Proflie" component={ProfileScreen} options={{
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <FontAwesome name="user" size={24} colors={Colors.main}/>
                        ): (
                            <AntDesign name="user" size={24} colors={Colors.black} />
                        )}
                    </Center>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: Colors.white,
        height: 60,
    }
})

export default BottomNav;