import { icons } from '@/constants';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Dimensions, Text, Image, TouchableOpacity } from 'react-native'

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
            <View style={styles.container2}>
                <Text className='font-pmedium text-white'>${collected}</Text>
                <View className='flex-row gap-2 items-center'>
                    <Text className='font-pmedium text-white'><Text className='font-pbold text-lg'>2024</Text> donation goal</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            // @ts-ignore
                            source={icons.info}
                            className='w-4'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
                <Text className='font-pmedium text-white'>${totalAmount}</Text>
            </View>
            <View style={[styles.container, { width: screenWidth }]}>
                <Animated.View style={[styles.bar, { width: progress }]} />
                <Animated.View style={[styles.bar2, { width: goal }]} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 10,
        backgroundColor: '#FFFFFF66',
        borderRadius: 10,
        position: 'relative',
        maxWidth: '100%'
    },
    container2: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '100%',
    },
    bar: {
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#3B9781',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100
    },
    bar2: {
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        position: 'absolute',
        top: 0,
        left: 0,
    }
});

export default ProgressBar