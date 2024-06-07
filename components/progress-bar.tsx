import { icons } from '@/constants';
import { useEffect, useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { View, StyleSheet, Animated, Dimensions, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'

const { width: screenWidth } = Dimensions.get('window');

const ProgressBar = ({ totalAmount, collected, donationGoal }: any) => {
    const [progress, setProgress] = useState(new Animated.Value(0));
    const [goal, setGoal] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(progress, {
            toValue: (collected / totalAmount) * screenWidth,
            duration: 2000,
            useNativeDriver: false
        }).start();

        Animated.timing(goal, {
            toValue: (donationGoal / totalAmount) * screenWidth,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }, [collected, donationGoal, totalAmount]);
    return (
        <>
            <View className='flex-row items-center justify-between'>
                <Text
                    className='font-pmedium text-white'
                    style={{
                        fontSize: responsiveFontSize(1.5)
                    }}>${collected}</Text>
                <View className='flex-row gap-x-2 items-center'>
                    <Text
                        className='font-pmedium text-white'
                        style={{
                            fontSize: responsiveFontSize(1.5)
                        }}>
                        <Text className='font-pbold text-lg mr-2' style={{
                            fontSize: responsiveFontSize(1.8)
                        }}>2024</Text>
                        donation goal
                    </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={icons.info as ImageSourcePropType}
                            className='w-4'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    className='font-pmedium text-white'
                    style={{
                        fontSize: responsiveFontSize(1.5)
                    }}>${totalAmount}</Text>
            </View>
            <View className='h-2 bg-light relative max-w-full -mt-3' style={[styles.container, { width: screenWidth }]}>
                <Animated.View className='h-full rounded-lg bg-secondary absolute top-0 left-0 z-20' style={{ width: progress }} />
                <Animated.View className='h-full rounded-lg bg-white absolute top-0 left-0' style={{ width: goal }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    container2: {
        
    },
});

export default ProgressBar