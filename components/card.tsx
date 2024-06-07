import { Image, ImageSourcePropType, Text, View } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    title: string
    description: string
    imageUrl: string
}

const Card = ({ title, description, imageUrl }: Props) => {
    return (
        <LinearGradient
            colors={['white', 'white', '#EF7D0005']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 2.2 }}
            style={{ width: responsiveWidth(44) }}
            className='p-3 m-1 rounded-2xl shadow-md z-20'>
            <View className={'flex-row justify-between items-start '}>
                <View style={{
                    width: responsiveWidth(29)
                }}>
                    <Text className={'font-psemibold text-black'} style={{ fontSize: responsiveFontSize(1.4) }}>{title}</Text>
                    <Text className={'text-gray-600 font-plight mt-1'} style={{ fontSize: responsiveFontSize(1.37) }}>{description}</Text>
                </View>
                <Image
                    source={imageUrl as ImageSourcePropType}
                    style={{ width: responsiveWidth(5), height: responsiveHeight(4) }}
                    className={'rounded-lg'}
                    resizeMode='contain'
                />
            </View>
        </LinearGradient >
    )
}

export default Card