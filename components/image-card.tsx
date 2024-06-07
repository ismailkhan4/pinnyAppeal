import { icons } from '@/constants';
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

type Props = {
    title: string;
    type: string;
    data: any;
}

const ImageCard = ({ title, data, type }: Props) => {
    return (
        <View>
            <Text className='font-pmedium text-lg mt-2'>{title}</Text>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity key={item.id} className='flex-row  justify-center'>
                            <View className='bg-white mr-4 my-4 rounded-3xl justify-center items-center '>
                                <Image
                                    source={item.imgSrc as ImageSourcePropType}
                                    className='w-full h-44 rounded-t-3xl'
                                    resizeMode='cover'
                                    style={{ height: responsiveHeight(20) }}
                                />
                                <Image
                                    source={icons.slice as ImageSourcePropType}
                                    className='absolute right-0 bottom-0'
                                    resizeMode='contain'
                                    tintColor={'#FFFFFF'}
                                    style={{ height: responsiveHeight(12), width: responsiveWidth(8) }}
                                />
                                <View style={{ width: type === 'featured' ? responsiveWidth(44) : responsiveWidth(70) }} className={`bg-white py-3 px-2 -mt-6 rounded-b-3xl rounded-tl-3xl`}>
                                    <Text className={`font-pmedium pl-3 text-black`} style={{ fontSize: responsiveFontSize(1.4) }}>{item.title}</Text>
                                    {
                                        type === 'default' && (
                                            <View className='flex-row items-end justify-start gap-1 ml-2'>
                                                <Image
                                                    source={item.iconSrc as ImageSourcePropType}
                                                    className='w-5 h-5'
                                                    resizeMode='contain'
                                                />
                                                <Text className='text-gray font-plight' style={{ fontSize: responsiveFontSize(1.4) }}>{item.donors} Donors</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ImageCard

const styles = StyleSheet.create({})