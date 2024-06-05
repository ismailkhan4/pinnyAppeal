import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const HomeScreen = (props: Props) => {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='text-2xl font-semibold'>Home Screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})