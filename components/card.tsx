import { Image, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    title: string
    description: string
    imageUrl: string
}

const Card = ({ title, description, imageUrl }: Props) => {
    return (
        <LinearGradient
            colors={['white', 'white', '#EF7D00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 2.2 }}
            className='p-4 m-1 rounded-2xl shadow-md z-20'>
            <View className={'flex-row justify-between'}>
                <View className='w-32 max-w-lg'>
                    <Text className={'text-xs font-psemibold'}>{title}</Text>
                    <Text className={'text-sm text-gray-600  mt-1'}>{description}</Text>
                </View>
                <Image
                    // @ts-ignore
                    source={imageUrl}
                    className={'w-8 h-8 rounded-lg'}
                    resizeMode='contain'
                />
            </View>
        </LinearGradient>
    )
}

export default Card

const styles = StyleSheet.create({
    background: {

        // top: 0,
        zIndex: 20
    },
})