import { Image, StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { icons } from '@/constants'

type TabIconProps = {
    icon: any
    color: string
    name: string
    focused: any
}

type MainProps = {

}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                style={{
                    width: responsiveWidth(9),
                    height: responsiveHeight(2.3)
                }}
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'}`} style={{ color: color, fontSize: responsiveFontSize(1.3) }}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = (props: MainProps) => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FF9C27',
                    tabBarInactiveTintColor: '#8C9099',
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        height: responsiveHeight(8)
                    }
                }}
            >
                <Tabs.Screen name='index'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                focused={focused}
                                name={'Home'}
                            />
                        )
                    }}
                />
                <Tabs.Screen name='donate'
                    options={{
                        title: 'Auto Donate',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.repeat}
                                color={color}
                                focused={focused}
                                name={'Auto Donate'}
                            />
                        )
                    }}
                />
                <Tabs.Screen name='roundup'
                    options={{
                        title: 'Round up',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.creditcard}
                                color={color}
                                focused={focused}
                                name={'Round up'}
                            />
                        )
                    }}
                />
                <Tabs.Screen name='portfolio'
                    options={{
                        title: 'Portfolio',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.chart}
                                color={color}
                                focused={focused}
                                name={'Portfolio'}
                            />
                        )
                    }}
                />
                <Tabs.Screen name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                focused={focused}
                                name={'Profile'}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})